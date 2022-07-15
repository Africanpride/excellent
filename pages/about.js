import React from 'react'
import AboutCTA from './components/AboutCTA'
import Heading from './components/Heading'
import { NextSeo } from 'next-seo'

export default function About() 
{
  return (

    <>
          <NextSeo
        title="Excel Travel Services"
        description="Welcome to Excel travel Services. We are your AfricanTour Experts. Book yourflights, Hotels, Cars with us. We are the best in the world."

      />
    <Heading imageSrc={'/images/cards/holiday.jpg'}  />
       <div className=''>
       <AboutCTA />
       </div>
  </>
  )
}

