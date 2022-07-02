/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

/* eslint-enable @next/next/no-img-element */
// Language: javascript
// Path: pages/components/Carousel.js
/* eslint-disable @next/next/no-img-element */



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const FooterCarousel = () => {

  return (
    <>
<Carousel
  additionalTransfrom={0}
  arrows = {false}
  autoPlay
  autoPlaySpeed={6000}
  centerMode={false}
  className="bg-transparent dark:bg-slate-900"
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass="px-1 py-2"
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive = {responsive}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>

        <img
          src="https://source.unsplash.com/81zFNW-K_no"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/iD-kJmgptn0"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/k4AEKrAh_Do"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/AQJ5cLTR_AM"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/no_TCkPUq_s"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/fYcF0JlMz6g"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/tul9reTbpaY"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/PkrzCvapEtM"
          alt="..."
          className="rounded"
          
        />
        <img
          src="https://source.unsplash.com/lP61RkcRAYc"
          alt="..."
          className="rounded"
          
        />       
        <img
          src="https://source.unsplash.com/rJiQM8IEERk"
          alt="..."
          className="rounded"
          
        />       
        <img
          src="https://source.unsplash.com/_xxV2KSoCvI"
          alt="..."
          className="rounded"
          
        />       
      </Carousel>
    </>
  )
}

export default FooterCarousel