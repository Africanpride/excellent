import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'
import AfricanDestinations from './components/AfricanDestinations'
import OfferUp from './components/OfferUp'


export default function Home() 
{  
  return (
    <>
    <main 
    className='flex flex-col justify-center items-center object-fit h-screen w-full bg-blue-100  dark:bg-black md:mx-auto  px-4'     
    // style={{
    //   backgroundImage:
    //     "url(https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
    // }}
    >
     <div className='  text-4xl  text-left capitalize  text-pink-600 font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 font-bold  md:text-2xl  lg:text-5xl '>
       Welcome to  <br /> 
       <div 
       className="text-md text-bold text-8xl "> 
       { process.env.NEXT_PUBLIC_ENV_APP_NAME }
       </div> 
    </div>

    <div className='hidden md:flex container wx-auto absolute left-10 -bottom-16 w-full rounded-md justify-evenly '>
      <span className=''><OfferUp serviceAmount={'$599'} serviceIntro={'Flights'} /></span>
      <span className=''><OfferUp serviceIntro={'Hotels'}  /></span>
      <span className=''><OfferUp serviceIntro='Car Rentals'  /></span>
      <span className=''><OfferUp serviceIntro='Tours' /></span>      
    </div>
   </main>

   <AfricanDestinations />
    </>
  )
}

