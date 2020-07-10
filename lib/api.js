import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFileds = `
    title,
    subtitle,
    'slug': slug.current,
    date,
    coverImage,
    'author': author->{name, 'avatar': avatar.asset->url},
`

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}

export async function getAllBlogs({offset, date} = {offset: 0, date: 'desc'}) {

    const results = await client.fetch(`*[_type == "blog"] | order(date ${date}) { ${blogFileds}}[${offset}...${offset + 6}]`);
    return results;
}

export async function getBlogBySlug(slug) {
    const result = await client.fetch(`*[_type == "blog" && slug.current == $slug]{ ${blogFileds} content[]{..., "asset": asset->} }`, {slug})
                          .then(res=> res?.[0]);

    return result;
}