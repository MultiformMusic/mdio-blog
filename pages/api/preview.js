import { getBlogBySlug } from "lib/api";

export default async function enablePreview(req, res) {

    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({message: 'Invalid token'})
    }

    const blog = await getBlogBySlug(req.query.slug);

    if (!blog) {
        res.status(401).json({message: 'Invalid slug'});
    }

    // set cookie into browser
    // __prerender__bypass__next_preview_data
    res.setPreviewData({});
    res.writeHead(307, {Location: `/blogs/${blog.slug}`});

    return res.end();
}