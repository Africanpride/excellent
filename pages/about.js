import React from 'react'
import AboutCTA from './components/AboutCTA'
import Heading from './components/Heading'

export default function About() 
{
  return (

    <>
    <Heading imageSrc={'/images/cards/holiday.jpg'}  />
       <div className=''>
       <AboutCTA />
       </div>
  </>
  )
}

