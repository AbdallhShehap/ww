import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assiste/SlideOurStory.css";

export default function SlideOurStory() {
  return (
    <Container>
      <Row className="slides-container">
        {/* side */}
        <Col xs={3} md={3} lg={3} className="side">
          <Container>
            <Row>
              <div style={{color:"Black"}}>
                <p>OUR</p>
                <p>VISION</p>
              </div>
            </Row>

            <Row></Row>

            <Row></Row>
          </Container>
        </Col>

        {/* image and text */}
        <Col xs={3} md={9} lg={9} className="image-text">
        <div className="black-box" style={{color:"white" }}>
        <p style={{fontSize:"30px", marginLeft:"2rem"}}>THE BEST</p>
        <h1 style={{fontSize:"120px", marginLeft:"2rem"}}>EXPERIENCE</h1>
        <p style={{fontSize:"24px", marginLeft:"2rem"}}>
          OF LIVING IN A CLEAN, SAFE AND PERFUMED ENVIRONMENT WITH THE SCENTS OF
          OUR DISTINCTIVE PRODUCTS
        </p>
        <h5 style={{fontSize:"14px", marginLeft:"2rem"}}>READ MORE</h5>
        <hr style={{width:"8%" , color:"white" , marginLeft:"2rem"}}/>
      </div>
        </Col>
      </Row>
    </Container>
  );
}
