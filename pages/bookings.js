import { dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head'
import Script from 'next/script'
import {useEffect, useState } from 'react'
import { AboutCTA } from './components/AboutCTA';
import Heading from './components/Heading';
import Thomalex from './components/Thomalex';
import { NextSeo } from 'next-seo'

export default function Bookings() {

const subtitle = 'A Great option to book your next Flight, Hotel and Car for your next trip. '

  // call a react components
    return (
      <>
            <NextSeo
        title="Excel Travel Services"
        description="Welcome to Excel travel Services. We are your AfricanTour Experts. Book yourflights, Hotels, Cars with us. We are the best in the world."

      />
      <Heading title={'Bookings'} subtitle={subtitle} imageSrc={'/images/cards/holiday2.jpg'}  />
      <Thomalex />
      </>
    );
 
}

