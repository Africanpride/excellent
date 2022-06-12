import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const { locale } = router

  return (
<> 
<main className='flex flex-col justify-center items-center h-screen w-full bg-black md:mx-auto  px-4'>
     <div className='  text-4xl  text-center capitalize  text-pink-600 font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 font-bold  md:text-2xl  lg:text-5xl'>
       Welcome to  <br /> 
       <div className="text-md text-bold text-8xl"> { process.env.NEXT_PUBLIC_ENV_APP_NAME }</div> <br />
       Locale
       </div>
   </main>

</>
  )
}