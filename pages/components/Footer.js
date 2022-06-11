import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"

import React from 'react'

const Footer = () => {
  return (
    <>
<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>

        <span className="ml-3 text-xl">{process.env.NEXT_PUBLIC_ENV_APP_NAME} <br /><hr /></span>
      
      </a>

      <p className="mt-2 text-sm text-gray-500 p-5">Excel Travel Services Get The Best Price And Service For Your Next Trip To Africa.</p>
      <div>
        <ul>
        <li>
            <a className="text-gray-400 hover:text-white p-5"><FontAwesomeIcon icon={faPhone} className="text-gray-300 text-lg ml-2 mr-2"></FontAwesomeIcon> +1 516 461 9526</a>
          </li>
          </ul>
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
  <div className="bg-gray-800 bg-opacity-75">
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

export default Footer