import React, { Component } from 'react';
import "../assiste/feedback.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {MDBBtn
  } from 'mdb-react-ui-kit';

class ProductReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      rating: 1,
      name: '',
      country: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // You can add your submission logic here
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Container>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label>Produc:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
              <input
              type="text"
              className="form-control "
              name="productName"
              value={this.state.productName}
              onChange={this.handleInputChange}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>
           <br/>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label>Name:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
              <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>
            <br/>
        
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label>Country:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
                 
              <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>

            <br/>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label> Message:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
              <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>

            <Row style={{display:"flex", justifyContent:"end"}}>
                
            <MDBBtn
          type="submit"
          outline
          rounded
          className="btnmoreblog"
          style={{
            fontSize: "18px",
            backgroundColor: "#9D0C00",
            color: "white",
            width: "10rem",
          }}
        >
          SUBMIT
        </MDBBtn>
            </Row>
          </Container>

        

       

         

       
         
        </form>
      </div>
    );
  }
}

export default ProductReviewForm;
