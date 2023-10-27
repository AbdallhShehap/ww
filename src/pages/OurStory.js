import React from 'react'
import MenuPages from '../componnent/MenuPages'
import BannerOurStory from '../componnent/BannerOurStory'
import SlideOurStory from '../componnent/SlideOurStory'
import Footer from '../componnent/Footer'

function OurStory() {
  return (
    <div>
      <div>

        <MenuPages/>
      </div>

      <div>
        <BannerOurStory/>
      </div>

      {/* slider */}
      <div>
        <SlideOurStory/>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default OurStory