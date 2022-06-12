import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'
import {useEffect,useState } from 'react'
import * as flagIcons from 'flag-icons'

import { useRouter } from 'next/router'


export default function Navbar() {
  
  const { asPath, pathname } = useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarStyles = {
    position: 'fixed',
    height: '80px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center'
  }

  // new useEffect:
  useEffect(() => {
    const handleScroll = () => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;
  
      // set state based on location info (explained in more detail below)
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
  
      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    }; 
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible]);
  // new function:



  return (
    <>

    <script id="run"
        strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                      console.log('Finally ......... document 123');
                  `,
            }}
          ></script>

    <header id='MainNav' style={{ ...navbarStyles, top: visible ? '0' : '-60px' }} className="text-gray-400 bg-transparent body-font fixed top-0 w-full shadow-sm">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

        <span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>

        </span>

        <span className="ml-3 text-xl">Excel Travel Services</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" ><a className="mr-5 hover:text-white">Home</a></Link>     
        <Link href="/about" ><a className="mr-5 hover:text-white">About</a></Link>     
        <Link href="/locale" ><a className="mr-5 hover:text-white">Local</a></Link>     
        <Link href="/scrolltest " ><a className="mr-5 hover:text-white">Scroll</a></Link>     
        <Link href="/flights" ><a className="mr-5 hover:text-white">Flights</a></Link>     

      </nav>

    

      <div className='flex justify-center items-center'>
      <Link href={asPath} locale="en">
      <a><span className="fi fi-gb mr-2"></span> </a>
      </Link> 
      <Link href={pathname} locale="fr">
      <a><span className="fi fi-fr mr-2"></span></a>
      </Link>
              
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Book Now 
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>

      </button>
      </div>
  </div>
</header>
    
    
    
    </>
  )
}

