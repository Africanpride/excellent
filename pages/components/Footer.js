import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest } from "@fortawesome/free-brands-svg-icons"
import FooterCarousel from './FooterCarousel'

const Footer = () => {
  const router = useRouter();
  const { asPath, pathname } = useRouter();
  return (
    <>

   { pathname === '/' || pathname ==='/404' ?  null : <FooterCarousel  />}

  <footer className="text-white bg-slate-900 lg:grid lg:grid-cols-5">
  <aside className="hidden  lg:relative lg:col-span-2 lg:block">
    <Image
      className="object-fill w-full h-full z-10"
      // src={airport2}
      src="/images/cards/airportNight.jpg"
      alt="Proceeding to Boarding Gate"
      layout='fill'
      objectFit='cover'
    />

  </aside>
  <div className="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p className="font-medium">
          <span className="text-xs tracking-widest uppercase">Call Our Hotline</span>
          <a className="block  hover:opacity-75 text-navy-200 cursor-pointer " onClick={() => router.push('tel:+15164619526')}>
          +1 516 461 9526
          </a>
        </p>
        <ul className="mt-8 space-y-2 text-sm">
          <li>Monday to Friday: 24/7</li>
          <li>Weekend: 10am - 8pm</li>
        </ul>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-16 pt-16  space-x-3 justify-center sm:justify-start">
        <Link href="https://www.facebook.com/exceltravelservices"><a className="text-gray-400"><FontAwesomeIcon icon={faFacebookF} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon></a></Link>
        <Link href="https://twitter.com/exceltravelserv"><a className="ml-3 text-gray-400"><FontAwesomeIcon icon={faTwitter} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon></a></Link>
        <Link href="https://instagram.com/exceltravelsservices"><a className="ml-3 text-gray-400"><FontAwesomeIcon icon={faInstagram} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon></a></Link>
        <Link href="https://www.linkedin.com/in/adjoavi-dossekpli-333552135"><a className="ml-3 text-gray-400"><FontAwesomeIcon icon={faLinkedin} className="text-gray-300 text-lg ml-2 "></FontAwesomeIcon></a></Link>
        <Link href="https://pin.it/4E7IezJ"><a className="ml-3 text-gray-400"><FontAwesomeIcon icon={faPinterest} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon></a></Link>
      </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium">Support</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-300">
            <Link  href="/inquiries">              
              <a className="hover:opacity-75">
              {" "}
              Contact{" "}
            </a>
            </Link>
            <Link  href="/inquiries">              
              <a className="hover:opacity-75">
              {" "}
              FAQs{" "}
            </a>
            </Link>
            <Link  href="/inquiries">              
              <a className="hover:opacity-75">
              {" "}
              Live Chat{" "}
            </a>
            </Link>
           <Link   href="/sitemap">
             <a className="hover:opacity-75">
              {" "}
              Sitemap{" "}
            </a>
            </Link>
          </nav>
        </div>
        <div>
          <p className="font-medium">Popular Destinations</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-300">
            <Link href="/"> 
            <a className="hover:opacity-75">
              {" "}
              Lagos{" "}
            </a>
            </Link>
            <Link href="/"> 
            <a className="hover:opacity-75" >
              {" "}
              Lome{" "}
            </a>
            </Link>
           <Link href="/">  
           <a className="hover:opacity-75" >
              {" "}
              Accra{" "}
            </a>
            </Link>
            <Link href="/"> 
            <a className="hover:opacity-75">
              {" "}
              Abidjan{" "}
            </a>
            </Link>
            <Link href="/"> 
            <a className="hover:opacity-75">
              {" "}
              Banjul{" "}
            </a>
            </Link>
          </nav>
        </div>

      </div>
    </div>
    <div className="block h-auto pt-4  ">

<p className="font-medium">
  <span className="text-xs tracking-widest uppercase ">Accreditation By:</span>
</p>
<ul className=' flex items-center justify-start w-full mt-2 '>
  <li className="w-auto ">    
    <img src="/images/accreditation/accred1.jpg" style={{ height:"50px"  }}  className="h-15 w-auto pr-2" alt="Accredited"/>              
  </li>
  <li className="w-auto ">    
    <img src="/images/accreditation/accred2.jpg" style={{ height:"50px"  }}   className="h-15 w-auto pr-2" alt="Accredited"/>              
  </li>
  <li className="w-auto  ">    
    <img src="/images/accreditation/accred3_bb.jpg" style={{ height:"50px"  }} className="h-15  w-auto pr-2" alt="Accredited"/>              
  </li>            
</ul>
</div>

    <div className="pt-7 mt-7 border-t border-gray-800">
      <div className="text-sm text-gray-300 sm:items-center sm:justify-between sm:flex">
        <div className="flex space-x-3">
          <Link  href="/privacy">
            
            <a className="hover:opacity-75">
            {" "}
            Privacy Policy{" "}
          </a>
          </Link>
          <Link href="/terms">            
            <a className="hover:opacity-75">
            {" "}
            Terms &amp; Conditions{" "}
          </a>
          </Link>
         {/* <Link  href="/privacy">          
           <a className="hover:opacity-75">
            {" "}
            Returns Policy{" "}
          </a>
          </Link> */}
          <Link href={asPath} locale="en">
          <a><span className="fi fi-gb mr shadow"></span> </a>
          </Link> 
          <Link href={pathname} locale="fr">
          <a><span className="fi fi-fr  shadow"></span></a>
          </Link>
        </div>
        <p className="mt-4 sm:mt-0">&copy;  { new Date().getFullYear() } Excel Travel Services. <span className="">All Rights Reserved.</span></p>
      </div>
      <p className="mt-8 text-xs text-gray-500 text-justify">
        {`If you are experiencing any issues with our platform, have a suggestion for a new feature, or would like to share your thoughts on anything else related to Excel Travel Services, please `} <span className="dark:text-navy-300 text-navy-600 "><Link href="/inquiries">click here</Link> </span> {` to get in touch. Your feedback helps us continuously improve our product and create the best possible experience for you. We take protecting your personal information very seriously! For details concerning how we use and protect your personal information, please see here. When you use our services, we may collect information using cookies. Something you eat? Not in this case; cookies are small data files that are stored in a user’s browser when they visit a website. The use of cookies allows us to offer you a more personalized experience on our site - win-win situation, right? For more information on this, please see here.`}
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer