import React from 'react'
import Image from 'next/image'
// import airport from '../../assets/images/airport.jpg,
import airport2 from '../../public/assets/airport2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <>
    <footer className="text-white bg-slate-900 lg:grid lg:grid-cols-5">
  <aside className="hidden  lg:relative lg:col-span-2 lg:block">

    <Image
      className="object-fill w-full h-full z-10 "
      src={airport2}
      alt="Comic Graphic"
      layout='fill'
    //   width={1120}
    //   height={630}
    />

  </aside>
  <div className="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p className="font-medium">
          <span className="text-xs tracking-widest uppercase">Call Our Hotline</span>
          <a className="block text-2xl sm:text-3xl hover:opacity-75" href="">
          +1 516 461 9526
          </a>
        </p>
        <ul className="mt-8 space-y-2 text-sm">
          <li>Monday to Friday: 10am - 5pm</li>
          <li>Weekend: 10am - 3pm</li>
        </ul>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-16 pt-16  space-x-3 justify-center sm:justify-start">
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium">Support</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-300">
            <a className="hover:opacity-75" href="">
              {" "}
              Contact{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              FAQs{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Live Chat{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Sitemap{" "}
            </a>
          </nav>
        </div>
        <div>
          <p className="font-medium">Popular Destinations</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-300">
            <a className="hover:opacity-75" href="">
              {" "}
              Lome{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Accra{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Abidjan{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Banjul{" "}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div className="pt-12 mt-12 border-t border-gray-800">
      <div className="text-sm text-gray-300 sm:items-center sm:justify-between sm:flex">
        <div className="flex space-x-3">
          <a className="hover:opacity-75" href="">
            {" "}
            Privacy Policy{" "}
          </a>
          <a className="hover:opacity-75" href="about">
            {" "}
            Terms &amp; Conditions{" "}
          </a>
          <a className="hover:opacity-75" href="">
            {" "}
            Returns Policy{" "}
          </a>
        </div>
        <p className="mt-4 sm:mt-0">&copy;  { new Date().getFullYear() }. {process.env.NEXT_PUBLIC_ENV_APP_NAME}.</p>
      </div>
      <p className="mt-8 text-xs text-gray-500 text-justify">
{`If you are experiencing any issues with our platform, have a suggestion for a new feature, or would like to share your thoughts on anything else related to Excel Travel Services, please click here to get in touch. Your feedback helps us continuously improve our product and create the best possible experience for you. We take protecting your personal information very seriously! For details concerning how we use and protect your personal information, please see here. When you use our services, we may collect information using cookies. Something you eat? Not in this case; cookies are small data files that are stored in a user’s browser when they visit a website. The use of cookies allows us to offer you a more personalized experience on our site - win-win situation, right? For more information on this, please see here.`}
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer