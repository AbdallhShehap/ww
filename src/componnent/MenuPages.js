import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBCollapse,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import logo from "../images/logo.png";
import '../assiste/menuPages.css';

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' bgColor='#911E1A' className='Container-navbar'>
      <MDBContainer fluid className="navbar-container">
        <MDBNavbarBrand href='#' style={{ color: "white" }}>
          <img src={logo} alt="Logo" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>


        <MDBCollapse navbar show={showNavSecond}>
  <MDBNavbarNav
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <MDBNavbarLink style={{ color: "white", fontSize: "20px", margin: "0 1rem" }}>
      HOME
    </MDBNavbarLink>
  </MDBNavbarNav>
  <MDBNavbarNav
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <MDBNavbarLink style={{ color: "white", fontSize: "20px", margin: "0 1rem" }}>
      OUR_STORY
    </MDBNavbarLink>
  </MDBNavbarNav>
  <MDBNavbarNav
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <MDBNavbarLink style={{ color: "white", fontSize: "25px", margin: "0 1rem" }}>
      ABOUT_US
    </MDBNavbarLink>
  </MDBNavbarNav>
  <MDBNavbarNav
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <MDBNavbarLink style={{ color: "white", fontSize: "25px", margin: "0 1rem" }}>
      OUR_PRODUCTS
    </MDBNavbarLink>
  </MDBNavbarNav>
  <MDBNavbarNav
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <MDBNavbarLink style={{ color: "white", fontSize: "25px", margin: "0 1rem" }}>
      CONTACT_US
    </MDBNavbarLink>
  </MDBNavbarNav>
  <MDBNavbarNav
    style={{
      display: "flex",
      justifyContent: "end",
      marginRight: "3rem"
    }}
  >
    <MDBIcon
      icon='facebook'
      fab
      style={{ margin: '0 1rem', color: "white", fontSize: "30px" }}
    />
    <MDBIcon
      icon='instagram'
      fab
      style={{ margin: '0 1rem', color: "white", fontSize: "30px" }}
    />
    <MDBIcon
      icon='youtube'
      fab
      style={{ margin: '0 1rem', color: "white", fontSize: "30px" }}
    />
  </MDBNavbarNav>
</MDBCollapse>




      </MDBContainer>
    </MDBNavbar>
  );
}
