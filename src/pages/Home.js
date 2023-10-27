import React from 'react'
import Menu from "../componnent/MenuHome"
import SliderHomePage from "../componnent/SliderHomePage"
import BlogsHomePage from "../componnent/BlogsHomePage"
import SecoundSlider from "../componnent/SecoundSlider"
import ValueHome from '../componnent/ValueHome'
import FeedbackSug from '../componnent/FeedbackSug'
import SliderFeedback from '../componnent/FeedbaceSlider'
import Footer from '../componnent/Footer'

export default function Home() {
  return (
    <div>
      <div>
          <Menu/>
          <SliderHomePage/>

      </div>

          <div>

          <BlogsHomePage/>
          </div>
          <br/> <br/>
          <br/> <br/>
          <br/> <br/>
          <div>
          <SecoundSlider/>
          </div>

           
          <br/> <br/>
          <br/> <br/>


          <div>
            <ValueHome/>
          </div>
         
          <br/> <br/>
          <br/> <br/>
          <hr/>
          <br/> <br/>
          <br/> <br/>
          
          <div>
            <FeedbackSug/>
          </div>

          <br/> <br/>
          <br/> <br/>

          <div>
            <div style={{display:"flex", justifyContent:"center"}}>

          <h2><b style={{color:'black' , fontSize:"100px"}}> TESTIMONIALS </b> </h2>
            </div>
          <SliderFeedback/>
          </div>

          <br/> <br/>
          <br/> <br/>
          <div>
            
            <Footer/>
          </div>
    </div>
  )
}
