/* eslint-disable @next/next/no-img-element */
import react from 'react';
// import 'flowbite'
import { Carousel } from 'flowbite-react'

const TourCarousel = () => {


  return (
    <>
      {/* <div className="h-full w-full "> */}
      
       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

        <Carousel indicators={false} >
          
         <img src="/images/tours/borabora.jpg " alt="..." />
         <img src="/images/tours/borabora.jpg " alt="..." />
         <img src="/images/tours/borabora.jpg " alt="..." />
         <img src="/images/tours/borabora.jpg " alt="..." />


       
      </Carousel>
      </div>

   
    </>
  )
}

export default TourCarousel