import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'
import AfricanDestinations from './components/AfricanDestinations'
import OfferUp from './components/OfferUp'
import HomePageTourIntro from './components/HomePageTourIntro'


export default function Home() 
{  
  return (
    <>
    <main 
    className='flex flex-col justify-center items-center object-fit h-screen w-full bg-blue-200  dark:bg-black md:mx-auto  px-4'     
    style={{
      backgroundImage:
        "url('/images/landscape/home.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
    }}
    >
      {/* <div className="absolute inset-0 bg-navy-900 opacity-60"></div> */}

     <div className='z-10  text-2xl md:text-4xl  text-left capitalize  text-pink-600 font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 font-bold  lg:text-5xl '>
       Welcome to  <br /> 
       <div 
       className="text-md text-bold text-5xl md:text-8xl "> 
       Excel Travel Services
       </div> 
    </div>

    <div className='hidden md:flex container wx-auto absolute left-10 -bottom-16 w-full rounded-md justify-evenly '>
      <span className=''><OfferUp serviceAmount={'$599'} serviceIntro={'Flights'} /></span>
      <span className=''><OfferUp serviceIntro={'Hotels'} serviceAmount={'$99'}  /></span>
      <span className=''><OfferUp serviceIntro='Car Rentals' serviceAmount={'$199'}  /></span>
      <span className=''><OfferUp serviceIntro='Tours' serviceAmount={'$799'} /></span>      
    </div>
   </main>
    <HomePageTourIntro />
   <AfricanDestinations />
    </>
  )
}

