import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import "../assiste/sliderhomepage.css"
import image1 from "../images/slider1.png"

export default function SliderHomePage() {
  return (
    <>
    
    <MDBCarousel className="Hsliderhomepage">
    
    <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
   
    <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
      </MDBCarousel>
      <div className="black-box-outsrtory" style={{color:"white" }}>
        <p style={{fontSize:"24px", marginLeft:"2rem"}}>
          OF LIVING IN A CLEAN, SAFE AND PERFUMED ENVIRONMENT WITH THE SCENTS OF
          OUR DISTINCTIVE PRODUCTS
        </p>
      </div>
    </>
   
  );
}
