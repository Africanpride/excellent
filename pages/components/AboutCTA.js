
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import placeholder from '/public/assets/722x402.png'
import { WhyExcel } from './WhyExcel'
import useTranslation from 'next-translate/useTranslation'
import BigCard from './BigCard'

const AboutCTA = ({}) => {

  const {t} = useTranslation()
  return (
    <> 
<section className="bg-blue-50 pt-15 text-gray-800 body-font  dark:text-blue-200 dark:bg-slate-900 dark:bg-opacity-20 border-b dark:border-slate-800  ">
  <div className="container px-2 md:px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">
        { t('about:our-mantra')}</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">About <span className='text-navy-800 dark:text-white'>{process.env.NEXT_PUBLIC_ENV_APP_NAME}</span> Adventure Tours</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Active adventure tours are interest based tours that connect travelers to nature and culture while exploring destinations around the world. Hike, bike, cruise and swim your way through jaw dropping scenery, all while being surrounded by other likeminded travelers. </p>
    </div>

   <div className="md:pb-5 md:px-5">

    <BigCard bgColor='bg-navy-900' txtColor='text-navy-400' />

    </div>

    <div className="flex flex-wrap  pt-5 mt-5">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">How to book</h2>
        <p className="leading-relaxed text-base mb-4">Booking a tour with us is simple and can be completed within minutes. Click <span className='text-blue-800 '><Link href="/tours" >Tour Packages</Link>  </span> menu above and choose a package. </p>
        <a className="text-blue-400 inline-flex items-center"><Link href="/tours" >Learn More</Link>
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 md:border-l-2  border-gray-200 border-opacity-60 dark:border-gray-800">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Trip Planning Assistance</h2>
        <p className="leading-relaxed text-base mb-4">We are ready to assist you in everyway as you plan the trip of your dream. Get in touch with us through our customer service chanels and social media. </p>
        <a className="text-blue-400 inline-flex items-center"><Link href="/inquiries" >Learn More</Link>
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 md:border-l-2  border-gray-200 border-opacity-60  dark:border-gray-800">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Unbeatable Tours</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-blue-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 md:border-l-2  border-gray-200 border-opacity-60  dark:border-gray-800">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Cheap but Classy</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-blue-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-gray-600 bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button> */}
  </div>
</section>



<section className='bg-white dark:text-gray-400 dark:bg-gray-900 dark:body-font h-auto w-full md:mx-auto  px-4'>

  <div className="container md:px-5 py-5 md:py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-2 md:p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 dark:border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
          <Image 
          className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src={placeholder} 
          alt="blog" 
          width="720" 
          height="400" 
          layout="responsive"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200  dark:border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
        <Image 
          className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src={placeholder} 
          alt="blog" 
          width="720" 
          height="400" 
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex itemsstrokeLinecap-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200  dark:border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
        <Image 
          className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src={placeholder} 
          alt="blog" 
          width="720" 
          height="400" 
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  )
}

export default AboutCTA