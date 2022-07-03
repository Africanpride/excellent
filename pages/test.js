import React from 'react'
import Heading from './components/Heading'
import SmallCard from './components/SmallCard'
import TourCardIntro from './components/Tours/TourCardIntro'
import TourDestination from './components/Tours/TourDestination'

const test = () => {
  return (
    <>
    <Heading />
    <div className=" py-10 bg-gray-100 dark:bg-slate-900 ">
      <TourDestination />
      <TourCardIntro />

    </div>
      
    </>
  )
}

export default test