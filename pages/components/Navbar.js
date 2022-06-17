import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect,useState } from 'react'
import * as flagIcons from 'flag-icons'


import { useRouter } from 'next/router'

import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon, ChevronRightIcon, ArrowCircleRightIcon} from "@heroicons/react/solid";
import Logo from '../components/logo'





export default function Navbar({props}) {
  
  const {systemTheme , theme, setTheme} = useTheme ();

  const renderThemeChanger= () => {

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-7 h-7 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-7 h-7 text-gray-300 border-2 rounded-full" role="button" onClick={() => setTheme('dark')} />
        )
      }
   };

  const { asPath, pathname } = useRouter();

  const [scrollY, setScrollY] = useState(0);
  const [fixed, setFixed] = useState("");
  const [background, setBackground] = useState("");
  
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", getScroll);
    }
    const getScroll = () => {
      setScrollY(window.pageYOffset);
    }

   const runSetFixed = () => {
    (scrollY > 100)? setFixed("fixed") : setFixed("absolute");
    return fixed;
    }

    const runBackgroundColorLogic =() => {
      (scrollY > 100)? setBackground("bg-navy-900") : setBackground("bg-transparent");
      return background;
    }

    watchScroll();
    runSetFixed();
    runBackgroundColorLogic();
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, [fixed, scrollY, background]);


  // capitalisze first string 

  const capitalizeTitle = () => {

    let pagetitle = pathname.slice(1);
    return pagetitle = pagetitle.replace(/^(\w)(.+)/, (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase());    
  }
  
  return (
    <>

    <Head>
      <title>{process.env.NEXT_PUBLIC_ENV_APP_NAME } &#124;	 {capitalizeTitle()}</title>
    </Head>

    <header id='MainNav'  className={`${background} z-30  body-font  top-0 w-full  shadow-sm ${fixed}`}  >
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className='inline-flex items-center justify-center'>
    <div  className="pr-2">
        <Link href="/">
              <a>
              <Logo />
              </a>
        </Link>
    </div>
      <div className="ml-3 text-xl pl-4 py-2 border-l border-navy-600 border-opacity-20 text-white">{process.env.NEXT_PUBLIC_ENV_APP_NAME}  <span className='text-base '>&trade;</span>
      </div>
    </div>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-blue-800">
        <Link href="/" ><a className="mr-5 hover:text-white">Home</a></Link>     
        <Link href="/about" ><a className="mr-5 hover:text-white">About</a></Link>     
        <Link href="/bookings " ><a className="mr-5 hover:text-white">Bookings</a></Link>     
        <Link href="/locale" ><a className="mr-5 hover:text-white">Local</a></Link>     
        <Link href="/inquiries" ><a className="mr-5 hover:text-white">Inquiries</a></Link>     
        <Link href="/flights" ><a className="mr-5 hover:text-white">Flights</a></Link>     
        <Link href="/users" ><a className="mr-5 hover:text-white">Users</a></Link>     
        <Link href="/test" ><a className="mr-5 hover:text-white">Test</a></Link>     

      </nav>

    

      <div className='flex justify-center items-center'>
      <Link href={asPath} locale="en">
      <a><span className="fi fi-gb mr-2"></span> </a>
      </Link> 
      <Link href={pathname} locale="fr">
      <a><span className="fi fi-fr mr-2"></span></a>
      </Link>
              
      <button className="transition ease-in duration-200 text-white inline-flex items-center bg-blue-800 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-800 rounded text-base mt-4 md:mt-0"> 
      <Link href="/bookings">
          <a className='inline-flex items-center justify-between text-md'>Book Now &nbsp; <ArrowCircleRightIcon className='h-5 w-5' /> </a>
      </Link>


      </button>

      <div className='ml-3 rounded-full bg-opacity-95 border-opacity-80  '>
      {renderThemeChanger()}
      </div>
      </div>
  </div>
</header>
    
    
    
    </>
  )
}

