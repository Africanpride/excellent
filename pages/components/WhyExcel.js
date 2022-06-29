import React from 'react'
import BigCard from './BigCard'

 const WhyExcel = () => {
  return (
    <>
    <section className="bg-blue-100 pt-20 text-gray-800 body-font  dark:text-blue-200 dark:bg-slate-900 dark:bg-opacity-20">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">Our Mantra: Excellence In Travel</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">About {process.env.NEXT_PUBLIC_ENV_APP_NAME} Adventure Tours</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Active adventure tours are interest based tours that connect travelers to nature and culture while exploring destinations around the world. Hike, bike, cruise and swim your way through jaw dropping scenery, all while being surrounded by other likeminded travelers. </p>
    </div>

    <BigCard />
    
    <div className="flex flex-wrap  pt-5 mt-5">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">How to book</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-blue-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-gray-200 border-opacity-60 dark:border-gray-800">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Trip Planning Assistance</h2>
        <p className="leading-relaxed text-base mb-4">We are ready to assist you in everyway as you plan the trip of your dream. Get in touch with us through our customer service chanels and social media. </p>
        <a className="text-blue-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-gray-200 border-opacity-60  dark:border-gray-800">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Neptune</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-blue-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-gray-200 border-opacity-60  dark:border-gray-800">
        <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Melanchole</h2>
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
    </>
  )
}

export default WhyExcel