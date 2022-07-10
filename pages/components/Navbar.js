import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect,useState } from 'react'
import * as flagIcons from 'flag-icons'
import { useRouter } from 'next/router'

import {useTheme} from "next-themes";
import {SunIcon ,MoonIcon, ChevronRightIcon, ArrowCircleRightIcon, SwitchHorizontalIcon, LightBulbIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import Logo from '../components/logo'





export default function Navbar({props}) {


  const {systemTheme , theme, setTheme} = useTheme ();

  const renderThemeChanger= () => {

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="switch w-7 h-7 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          // <MoonIcon className="w-7 h-7 text-navy-400 border-2 border-blue-300 rounded-full" role="button" onClick={() => setTheme('dark')} />
          <LightBulbIcon  className="switch w-7 h-7 text-white rounded-full" role="button" onClick={() => setTheme('dark')} />
        )
      }
   };

  // create mobile menu
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { asPath, pathname } = useRouter();
  const router = useRouter();

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
      (scrollY > 100) ? setBackground('bg-navy-400 dark:bg-navy-900 shadow-md') : setBackground('bg-transparent')
      return background;
    }

    const handleStart = (url) => (url !== router.asPath) && setNavbarOpen(false);
    router.events.on('routeChangeStart', handleStart)

    watchScroll();
    runSetFixed();
    runBackgroundColorLogic();
    return () => {
      window.removeEventListener("scroll", getScroll);
      router.events.off('routeChangeStart', handleStart)
    };
  }, [fixed, scrollY, background, router.asPath, router.pathname, router.events]);


  // capitalisze first string 

  const capitalizeTitle = () => {

    let pagetitle = pathname.slice(1);
    return pagetitle = pagetitle.replace(/^(\w)(.+)/, (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase());    
  }
  
  return (
    <>

    <Head>
      <title>Excel Travel Services &#124;	 {capitalizeTitle()}</title>
    </Head>

    <div className={"fixed z-30 inset-0 flex-col justify-center items-center object-fit min-h-screen h-full w-auto bg-slate-600  dark:bg-pink-500 md:mx-auto px-4" + (navbarOpen ? " flex" : " hidden")
  } >

            <nav className="flex flex-col items-start justify-center text-4xl font-extrabold italic text-white dark:text-navy-800">
        <Link href="/" ><a className="p-2 mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">Home</a></Link>     
        <Link href="/about" ><a className="p-2 mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">About</a></Link>     
        <Link href="/bookings " ><a className="p-2 mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">Bookings</a></Link>     
        <Link href="/tours/" ><a className="p-2 mr-5 hover:underline over:decoration-solid  dark:hover:text-white dark:text-white">Tour Packages</a></Link>     
        <Link href="/inquiries" ><a className="p-2 mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">Inquiries</a></Link>     
        <Link href="/news" ><a className="p-2 mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">News</a></Link>     
      </nav>

    </div>

    <header id='MainNav'  className={`${background} md:px-5  z-30  body-font  top-0 w-full ${fixed}`}  >
    <div className=" mx-auto flex p-5  md:flex-row  justify-between items-center">
    <div className='inline-flex items-center justify-center'>
    <div  className="pr-2">
        <Link href="/">
              <a>
              <Logo />
              </a>
        </Link>
    </div>
    <Link href="/">
      <a>        
      <div className="ml-3  pl-4 py-2 border-l border-navy-300 border-opacity-30 text-white text-bold dark:text-white text-xl md:text-2xl ">Excel Travel Services  <span className='text-base '>&trade;</span>
      </div>
      </a>
    </Link>
    </div>

      <nav className="md:mx-auto hidden md:flex flex-wrap items-center justify-center text-white dark:text-navy-800">
        <Link href="/" ><a className="mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">Home</a></Link>     
        <Link href="/about" ><a className="mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">About</a></Link>     
        <Link href="/bookings " ><a className="mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">Bookings</a></Link>     
        <Link href="/tours/" ><a className="mr-5 hover:underline over:decoration-solid  dark:hover:text-white dark:text-white">Tour Packages</a></Link>     
        <Link href="/inquiries" ><a className="mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">Inquiries</a></Link>     
        <Link href="/news" ><a className="mr-5 hover:underline hover:decoration-solid  dark:hover:text-white dark:text-white">News</a></Link>     
      </nav>

      <div className='hidden md:flex justify-center items-center'>
      <Link href={pathname} locale="fr">
      <a><span className="fi fi-fr mr-2  shadow"></span></a>
      </Link>
      <Link href={asPath} locale="en">
      <a><span className="fi fi-gb mr-2 shadow"></span> </a>
      </Link> 
              
      <button className="transition ease-in duration-200 text-white inline-flex items-center bg-navy-800 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-800 rounded text-base mt-4 md:mt-0 shadow"> 
      <Link href="/bookings">
          <a className='inline-flex items-center justify-between text-md'>Book Now &nbsp; <ArrowCircleRightIcon className='h-5 w-5' /> </a>
      </Link>
      </button>

      <div className='ml-3 rounded-full bg-opacity-95 border-opacity-80  '>
      {renderThemeChanger()}
      </div>
      </div>
      <div className="md:hidden block z-50 flex justify-center items-center" >
      <MenuAlt3Icon 
      className="w-10 h-10 text-white border-2  shadow" 
      role="button" 
      onClick={() => setNavbarOpen(!navbarOpen)}
      />
      <div className='ml-3 rounded-full bg-opacity-95 border-opacity-80  '>
      {renderThemeChanger()}
      </div>
      </div>
  </div>
</header>
    
    
    
    </>
  )
}

