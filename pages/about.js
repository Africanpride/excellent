import React from 'react'
import AboutCTA from './components/AboutCTA'
import Heading from './components/Heading'

export default function About() 
{
  return (

    <>
    <Heading imageSrc={'/images/cards/holiday.avif'}  />
       <div className=''>
       <AboutCTA />
       </div>
  </>
  )
}

