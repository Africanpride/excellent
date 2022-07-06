import React from 'react'
import Heading from '../components/Heading'
import SmallCard from '../components/SmallCard'
import TourCardIntro from '../components/Tours/TourCardIntro'
import TourDestination from '../components/Tours/TourDestination'

const TogoGhana = () => {
  const subtitleText = `Togo is known for their great beaches, among them being Aneho Beach and Lome Beach. 
  White sand can be found on several of the beaches, and seclusion is simple to come by.`;
  return (
    <>
    <Heading title={`Togo-Ghana Adventures & Culinary Trip`} imageSrc={'/images/tours/elephant2.jpg '} subtitle = {subtitleText}  />
    <div className=" py-10 bg-gray-100 dark:bg-slate-900 ">
      <TourDestination />
      <TourCardIntro />
    </div>      
    </>
  )
}

export default TogoGhana