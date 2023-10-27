import React from "react";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurStory from "./pages/OurStory";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<OurStory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



{/* <Routes> */}
{/* <Route path='/' element={<Layouts />} > */}
    {/* <Route/> */}
      {/* <Route path="productdetails" element={<ProductDetails />} /> */}
      {/* <Route path="home" element={<Home />} /> */}
      {/* <Route path="mac" element={<IMac />} /> */}
      {/* <Route path="macmini" element={<MacMini/>} /> */}
      {/* <Route path="ipadpro" element={<IPadPro />} /> */}
      // <Route path="ipad" element={<IPad />} />
    
// </Route>
      // <Route path="registration" element={<Registration />} />
      // <Route path="login" element={<Login />} />
// </Routes>