import { dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head'
import Script from 'next/script'
import {useEffect, useState } from 'react'
import { AboutCTA } from './components/AboutCTA';
import Heading from './components/Heading';
import Thomalex from './components/Thomalex';

export default function Bookings() {

const subtitle = 'A Great option to book your next Flight, Hotel and Car for your next trip. '

  // call a react components
    return (
      <>    
      <Heading title={'Bookings'} subtitle={subtitle} imageSrc={'/images/cards/holiday2.avif'}  />
      <Thomalex />
      </>
    );
 
}

