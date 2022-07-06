/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import clip from 'text-clipper'

const HomePageTourIntro = () => {
    const tourOverviewTogo = clip('Explore West Africa, the place that is known for rich culture, legacy, warmth and cadence. Find where nature is as yet unadulterated and warmth streams without any problem. Ghana, formally know as the Gold Coast sits between Côte d’ivoire and Togo while sharing a boarder with Burkina Faso to the north. It came in to prominence in its early days for its huge gold reserves. There are many reasons why a tourists will choose Ghana as a place to experience. Ranging from colonial era castles, to beaches, to scenic high routs etc.', 170);
    const tourOverviewEgyptOne = clip('We are very excited to introduce 7 days / 6 nights with luxury service to the land of Pharoah. The land of great histories and pyramids and that welcome great men like Abraham, Moses, Jacob and Joseph, among others. Life is to be enjoyed and that is why we at Excel Travel Services have organised this trip for you.', 120);

    const tourOverviewEgyptTwo = clip('We are very excited to introduce 7 days / 6 nights with luxury service to the land of Pharoah. The land of great histories and pyramids and that welcome great men like Abraham, Moses, Jacob and Joseph, among others. Life is to be enjoyed and that is why we at Excel Travel Services have organised this trip for you.', 120);
  return (
    <>
    <section className="text-gray-400 dark:text-gray-200  dark:bg-gray-900 
    body-font border-b border-gray-200 pt-10 dark:border-gray-800  bg-blue-100 ">
  <div className=" px-3 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-full mx-auto md:px-20 lg:px-32 ">
      <div className="flex flex-wrap w-full bg-gray-800 py-32 px-5 relative mb-4 rounded-xl h-[450px] justify-center items-center">
        <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl opacity-50 dark:opacity-20 absolute inset-0 shadow-md" src="/images/tours/beach.avif" />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-4xl text-yellow-300 dark:text-yellow-300 font-medium title-font mb-2  ">
            Togo - Ghana adventure &amp; Culinary Trip </h2>
          <p className="leading-relaxed text-gray-200  px-5 md:px-10  font-bold  text-xl">{tourOverviewTogo}</p>
          <Link href="/tours/togo-ghana-adventure-and-culinary-trip">
            <a className="mt-3 dark:text-blue-300 text-cyan-200 text-lg inline-flex items-center ">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-yellow-800 sm:py-24 py-16 sm:px-10 px-6 relative  rounded-xl">
            <img alt="gallery" className="w-full object-cover h-full object-center block  rounded-xl  opacity-70 absolute inset-0" src="/images/cards/egypt3.jpg" />
            <div className="text-center relative z-10 w-full">
            <h2 className="text-3xl text-yellow-300 dark:text-yellow-300 font-medium title-font mb-2  ">
            7 Days / 6 Nights <br />in Egypt </h2>
          <p className="leading-relaxed text-white font-bold ">{tourOverviewEgyptOne}</p>
          <Link href="/tours/togo-ghana-adventure-and-culinary-trip">
            <a className="mt-3 dark:text-blue-300 text-cyan-100 text-lg inline-flex items-center ">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          </Link>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2 ">
          <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative  rounded-xl ">
            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-60 mix-blend-hard-light	 rounded-xl absolute inset-0" src="/images/cards/egypt5.jpg" />
            <div className="text-center relative z-10 w-full">
            <h2 className="text-3xl text-yellow-300 dark:text-yellow-300 font-medium title-font mb-2  ">
            5 Days / 4 Nights <br /> in Egypt </h2>
          <p className="leading-relaxed text-gray-200  font-bold ">{tourOverviewEgyptTwo }</p>
          <Link href="/tours/togo-ghana-adventure-and-culinary-trip">
            <a className="mt-3 dark:text-blue-300 text-cyan-200 text-lg inline-flex items-center ">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          </Link>
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

export default HomePageTourIntro