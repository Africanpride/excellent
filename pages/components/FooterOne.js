import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"

import React from 'react'
import Logo from './logo';

const FooterOne = () => {
  return (
    <>
<footer className="text-gray-400 bg-navy-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div>
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
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href="/">
            <a className="text-gray-400 hover:text-white">Home</a>
          </Link>
          </li>
          <li>
            <Link href="/about">

            <a className="text-gray-400 hover:text-white">About Us</a>
            </Link>
          </li>
          <li>
          <Link href="/tours">
            <a className="text-gray-400 hover:text-white">Tours</a>
            </Link>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Deals</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Inquiry</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Popular Destinations
</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Lome</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Accra</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Abidjan</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Lagos</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Banjul</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Policy News</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Travel News</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Updates on Covid-19</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Cancellation Policy</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Privacy</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Terms & Conditions</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Support</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Contact Us</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Help Center</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Sitemap</a>
          </li>


        </nav>
      </div>
    </div>
  </div>
  <div className="bg-blue-800 bg-opacity-75 drop-shadow-sm border-t border-navy-900 ">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left"><span className="text-xs">&copy;</span> { new Date().getFullYear() } <span> { process.env.NEXT_PUBLIC_ENV_APP_NAME} </span>—
      </p>
      <p  className="text-gray-400 text-sm text-center sm:text-left ml-1">
      Excel Travel Services Lcc Dos Id 581 9018 Nysdos – Secured Payment By Authorize.net
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-400">
        <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon>
        </a>
        <a className="ml-3 text-gray-400">
        <FontAwesomeIcon icon={faTwitter} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon>
        </a>
        <a className="ml-3 text-gray-400">
        <FontAwesomeIcon icon={faInstagram} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon>
        </a>
        <a className="ml-3 text-gray-400">
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 text-lg ml-2 "></FontAwesomeIcon>
        </a>
        <a className="ml-3 text-gray-400">
        <FontAwesomeIcon icon={faYoutubeSquare} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon>
        </a>
      </span>
    </div>
  </div>
</footer>
</>
  )
}

export default FooterOne