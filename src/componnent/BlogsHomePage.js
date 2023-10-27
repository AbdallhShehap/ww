import React , {useState} from 'react';
import Blog from '../componnent/Blog';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';

import '../assiste/Blog.css';

const allBlogsData  = [
  {
    title: 'Blog Title 1',
    image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    content: 'Content of Blog 1',
  },
  {
    title: 'Blog Title 2',
    image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    content: 'Content of Blog 2',
  },
  {
    title: 'Blog Title 3',
    image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    content: 'Content of Blog 3',
  },
   {
    title: 'Blog Title 4',
    image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    content: 'Content of Blog 4',
  },
  {
   title: 'Blog Title 5',
   image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
   content: 'Content of Blog 5',
 },
 {
  title: 'Blog Title 6',
  image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
  content: 'Content of Blog 6',
},
{
 title: 'Blog Title 7',
 image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
 content: 'Content of Blog 7',
},
{
 title: 'Blog Title 8',
 image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
 content: 'Content of Blog 8',
}
,
{
 title: 'Blog Title 9',
 image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
 content: 'Content of Blog 9',
}
  
];

export default function BlogsHomePage() {
    const [visibleBlogs, setVisibleBlogs] = useState(3); 
  
    const loadMoreBlogs = () => {
      setVisibleBlogs(visibleBlogs.length);
    };
  
    const blogsToDisplay = allBlogsData.slice(0, visibleBlogs);
  
    return (
      <>
         <div style={{ display: "flex", justifyContent: "center", marginBottom:"2rem" }}>
        <h3 style={{ fontSize: "40px", color: "black" }}>Blogs Home Page</h3>
      </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%" }}>
            <Container fluid>
              <Row>
                {blogsToDisplay.map((blog, index) => (
                  <Col key={index} lg={4} md={4} sm={12} style={{marginTop:"3rem"}} >
                    <Blog blog={blog} />
                  </Col>
                ))}
              </Row>
            </Container>
            {visibleBlogs < allBlogsData.length && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <MDBBtn
                  outline
                  rounded
                  className="btnmoreblog"
                  color="danger"
                  onClick={loadMoreBlogs}
                  style={{ fontSize: "25px" , marginTop:"3rem"}}
                >
                  SEE ALL OUR NEWS
                </MDBBtn>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }