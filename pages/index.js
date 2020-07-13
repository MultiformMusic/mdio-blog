import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import { useState } from 'react';
import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';
import PreviewAlert from 'components/PreviewAlert';


export default ({blogs, preview}) => {

  const [filter, setFilter] = useState({
    view: {list: 0},
    date: {asc: 0}
  }); 

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({blogs, filter})

  return(
    <PageLayout>

      { preview && <PreviewAlert />}

      <AuthorIntro/>

      <FilteringMenu 
        filter={filter}
        onChange={(option, value) => {
          setFilter({...filter, [option]: value})
        }} />

      <hr/>

      <Row className="mb-5">
        {pages}
      </Row>
      <div style={{textAlign: 'center'}}>
        <Button 
          onClick={loadMore} 
          variant="outline-secondary" 
          size="lg"
          disabled={isReachingEnd || isLoadingMore}
        >
          { isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'}

        </Button>
      </div>
    </PageLayout>

  )
}

// this function is called during build time (only on the server)
// provides props to page
// it will create static page
export async function getStaticProps({preview = false}) {

  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});

  return {
    props: {
      blogs, preview
    }
  }
}