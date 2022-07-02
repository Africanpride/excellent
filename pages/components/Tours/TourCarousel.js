/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const TourCarousel = () => {
  return (
    <>
<Slider>
	<img src="https://s18.postimg.cc/9vhgup22x/img1.jpg" />
	<img src="https://s18.postimg.cc/vunvhvvrt/img2.jpg" />
	<img src="https://s18.postimg.cc/tdc4amjl5/img3.jpg" />
</Slider>
    
    </>
  )
}

export default TourCarousel