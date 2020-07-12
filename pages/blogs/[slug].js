
import PageLayout from 'components/PageLayout';
import { Row, Col } from 'react-bootstrap';

import { getBlogBySlug, getAllBlogs, urlFor } from 'lib/api';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import moment from 'moment';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

const BlogDetail = ({blog}) => {

    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode="404" />
    }

    if (router.isFallback) {
        return (
            <PageLayout className="blog-detail-page">
                Loading ...
            </PageLayout>
        )
    }

    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                <BlogHeader 
                    title={blog.title} 
                    subtitle={blog.subtitle} 
                    author={blog.author} 
                    coverImage={urlFor(blog.coverImage).height(500).url()} 
                    date={moment(blog.date).format('LL')} 
                />

                <hr/>
                    {
                        blog.content && <BlogContent content={blog.content} />
                    }

                </Col>
            </Row>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    
    const blog = await getBlogBySlug(params.slug);

    return {
        props: {blog}
    }
}

export async function getStaticPaths() {

    const blogs = await getAllBlogs();
    const paths = blogs?.map(blog => ({params: {slug: blog.slug}}));

    return {
        paths,
        fallback: true
    }
}

export default BlogDetail;