/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import clip from "text-clipper"

function Destinations() {
  const tourOverviewTogo = clip('Explore West Africa, the place that is known for rich culture, legacy, warmth and cadence. Find where nature is as yet unadulterated and warmth streams without any problem. Ghana, formally know as the Gold Coast sits between Côte d’ivoire and Togo while sharing a boarder with Burkina Faso to the north. It came in to prominence in its early days for its huge gold reserves. There are many reasons why a tourists will choose Ghana as a place to experience. Ranging from colonial era castles, to beaches, to scenic high routs etc.', 120);

  const tourOverviewEgyptOne = clip('We are very excited to introduce 7 days / 6 nights with luxury service to the land of Pharoah. The land of great histories and pyramids and that welcome great men like Abraham, Moses, Jacob and Joseph, among others. Life is to be enjoyed and that is why we at Excel Travel Services have organised this trip for you.', 120);

  const tourOverviewEgyptTwo = clip('We are very excited to introduce 5 days / 4 nights with luxury service to the land of Pharoah. The land of great histories and pyramids and that welcome great men like Abraham, Moses, Jacob and Joseph, among others. Life is to be enjoyed and that is why we at Excel Travel Services have organised this trip for you.', 120);
  return (
    <>

<section className="text-gray-800 dark:text-gray-400 bg-gray-200 dark:bg-gray-900 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            
          <Link href="/tours/togo-ghana-adventure-and-culinary-trip">
            <a className="p-4 lg:w-1/3">

            <div className="h-full shadow  bg-gray-200  dark:bg-gray-800 dark:bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
             {/* Add  background image  */}
              <img className="absolute w-full h-full object-cover object-center inset-0 z-0" src="/images/cards/airportNight.jpg " alt="Togo-Ghana-Adventure-and-Culinary-Trip" />
              <div className="absolute inset-0 bg-blue-900 dark:opacity-50 opacity-40 "></div>
                <h2 className="relative z-10 tracking-widest text-xs title-font font-medium text-yellow-300 mb-1">AFRICA TOURS</h2>
                <h1 className="relative z-10 title-font sm:text-2xl text-xl font-medium text-white dark:text-white  mb-3">Togo-Ghana Adventure <br /> &amp; Culinary Trip</h1>
                <p className="relative z-10 leading-relaxed mb-3 dark:text-white text-blue-400 "> {tourOverviewTogo} </p>
                <Link href="/tours/togo-ghana-adventure-and-culinary-trip">
                  <a className="text-yellow-300 inline-flex items-center relative z-10 ">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                </Link>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-blue-200 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>900K
                  </span>
                  <span className="text-blue-200 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>426
                  </span>
                </div>
              </div>
            </a>
            </Link>
          <Link href="/tours/egypt-7-days-6-nights-luxury-trip">
            <a className="p-4 lg:w-1/3">

            <div className="h-full shadow  bg-gray-200  dark:bg-gray-800 dark:bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
             {/* Add  background image  */}
              <img className="absolute w-full h-full object-cover object-center inset-0 z-0" src="/images/cards/egypt1.jpg " alt="Togo-Ghana-Adventure-and-Culinary-Trip" />
              <div className="absolute inset-0 bg-blue-900 dark:opacity-50 opacity-40 "></div>
                <h2 className="relative z-10 tracking-widest text-xs title-font font-medium text-yellow-300 mb-1">AFRICA TOURS</h2>
                <h1 className="relative z-10 title-font sm:text-2xl text-xl font-medium text-white dark:text-white  mb-3">Egypt: 7 Days, 6 Nights  <br /> Luxury Trip</h1>
                <p className="relative z-10 leading-relaxed mb-3 dark:text-white text-cyan-400 "> {tourOverviewEgyptOne} </p>
                <Link href="/tours/egypt-7-days-6-nights-luxury-trip">
                  <a className="text-yellow-300 inline-flex items-center relative z-10 ">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                </Link>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-blue-200 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>300K
                  </span>
                  <span className="text-blue-200 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>6
                  </span>
                </div>
              </div>
            </a>
            </Link>
          <Link href="/tours/egypt-5-days-4-nights-luxury-trip">
            <a className="p-4 lg:w-1/3">

            <div className="h-full shadow  bg-gray-200  dark:bg-gray-800 dark:bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
             {/* Add  background image  */}
              <img className="absolute w-full h-full object-cover object-center inset-0 z-0 grayscale	" src="/images/cards/egypt2.jpg " alt="Togo-Ghana-Adventure-and-Culinary-Trip" />
              <div className="absolute inset-0 bg-blue-900 dark:opacity-50 opacity-40 "></div>
                <h2 className="relative z-10 tracking-widest text-xs title-font font-medium text-yellow-300 mb-1">AFRICA TOURS</h2>
                <h1 className="relative z-10 title-font sm:text-2xl text-xl font-medium text-white dark:text-white  mb-3">Egypt: 5 Days, 4 Nights  <br /> Luxury Trip</h1>
                <p className="relative z-10 leading-relaxed mb-3 dark:text-cyan-100 text-cyan-300 "> {tourOverviewEgyptTwo} </p>
                <Link href="/tours/egypt-5-days-4-nights-luxury-trip">
                  <a className="text-yellow-300 inline-flex items-center relative z-10 ">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                </Link>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-blue-200 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>1K
                  </span>
                  <span className="text-blue-200 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>67
                  </span>
                </div>
              </div>
            </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Destinations