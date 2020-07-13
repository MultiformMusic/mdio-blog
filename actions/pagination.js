import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';
import { Col } from 'react-bootstrap';

import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import { useEffect } from 'react';
import CardItemBlank from 'components/CardItemBlank';
import CardListItemBlank from 'components/CardListItemBlank';
import moment from 'moment';


export const useGetBlogsPages = ({blogs, filter}) => {

    useEffect(() => {

        window.__pagination__init = true;

    }, []);

    return useSWRPages('index-page', 
        ({offset, withSWR}) => {

            let initialData = !offset && blogs;

            if (typeof window !== 'undefined' && window.__pagination__init) {
                initialData = null;
            }

            const { data: paginatedBlogs } = withSWR(useGetBlogs({offset, filter}, initialData));

            if (!paginatedBlogs) {

                return Array(3).fill(0).map((_, index) => 
                
                    filter.view.list ? 
                        <Col key={index} md="9">
                            <CardListItemBlank/> 
                        </Col>
                    :
                        <Col key={`${index}-item`} md="6" lg="4">
                            <CardItemBlank/> 
                        </Col>                    
                );
            } 

            return paginatedBlogs
                    .map(blog => 
        
                    filter.view.list ? 
        
                    <Col key={blog.slug} md="9">
        
                        <CardListItem 
                        title={blog.title} 
                        subtitle={blog.subtitle} 
                        date={moment(blog.date).format('LL')}
                        author={blog.author}
                        slug={blog.slug}
                        link={{
                            href:'/blogs/[slug]',
                            as: `/blogs/${blog.slug}`
                        }}
                        />
                    </Col>
        
                    :
        
                    <Col key={blog.slug} md="6" lg="4"> 
                        <CardItem 
                        title={blog.title} 
                        subtitle={blog.subtitle} 
                        date={moment(blog.date).format('LL')}
                        image={blog.coverImage}
                        author={blog.author}
                        slug={blog.slug}
                        link={{
                            href:'/blogs/[slug]',
                            as: `/blogs/${blog.slug}`
                        }}
                        />
                    </Col>             

            )

        },
        // here you will compute offset that will get passed to previous callback function
        // SWR : data you will get from 'withSWR' functions
        // index : number of current page
        (SWR, index) => {

            if (SWR.data && SWR.data.length === 0) return null;

            return (index+1) * 6;        

        },
        [filter]
    );
}