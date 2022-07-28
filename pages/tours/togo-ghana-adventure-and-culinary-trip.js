import React from 'react'
import Heading from '../components/Heading'
import PaymentLogos from '../components/PaymentLogos'
import SmallCard from '../components/SmallCard'
import TourPackageWithPrice from '../components/TourPackageWithPrice'
import ItineraryCard from '../components/Tours/ItineraryCard'
import TourCardIntro from '../components/Tours/TourCardIntro'
import TourCarousel from '../components/Tours/TourCarousel'
// pass html element to virtual dom
import parse from 'html-react-parser';

const destinationAfrica1 = {
  tourName: 'Togo - Ghana Adventure & Culinary Trip ',
  tourOverview: `Explore West Africa, the place that is known for rich culture, legacy, warmth and cadence. Find where nature is as yet unadulterated and warmth streams without any problem. Ghana, formally known as the Gold Coast sits between Côte d’ivoire and Togo while sharing a boarder with Burkina Faso to the north. It came in to prominence in its early days for its huge gold reserves. There are many reasons why a tourists will choose Ghana as a place to experience. Ranging from colonial era castles, to beaches, to scenic high routs etc.`,

  tourOverview2: `Togo & Ghana are both countries found in the West Africa. They host extremely colourful and diverse cultures as well as tourist sites. Togo is a nation in the Gulf of Guinea that lies between Ghana and Benin. Its is know for its serene beaches, busy markets and scenic spots which make it ideal for vacations and tours. You are guaranteed to have a memorable time anytime you visit.`,

  tourDuration: `7 days 6 nights`,

  tourOverview2Header: `Two Nations One Tour `,

  tourImage: `/images/tours/elephant.jpg`,

  tourHighlight: [
    'Akwapim hills', 'Lome Beach', 'Aneho Beach', 'Togo Museum','Kpalime City Tour','Keta Beaches and St. Paul Lighthouse','W.E. B. Du Bois Centre', 'Kwame Nkrumah Mausoleum', 'Agou and Yikpa Waterfalls', 'Agou and Yikpa Waterfalls', 'Agbodrafo Slave house and Aného'
  ], 
  tourPayment: 'Payment is required upon arrival',
  
  tourPaymentLogos: <PaymentLogos />,

  tourPackageWithPrice1: parse('<div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6 "><div className="flex items-start w-full justify-between"><p className="flex-grow w-full text-2xl text-gray-700"><span className="text-gray-400 font-light text-md">$</span>2,799</p><span className="px-3 py-1 flex-none text-sm rounded-full text-blue-500 border border-blue-500">Single Occupancy</div></div>'),

  tourPackageWithPrice2: parse('<div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6 "><div className="flex items-start w-full justify-between"><p className="flex-grow w-full text-2xl text-gray-700"><span className="text-gray-400 font-light text-md">$</span>2,399</p><span className="px-3 py-1 flex-none text-sm rounded-full text-blue-500 border border-blue-500">Double Occupancy</div></div>'),

  tourPackageWithPrice3: '',


  
  tourItinerary: [
    {
      day:' Day 1',
      title: 'Arrival in Cairo',
      description: 'Arrive in Cairo and take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-arrival.jpg'
    },
    {
      day: 'Day 2',
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 3',
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 4',
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 5',
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 6',
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    }
  ],
  tourItineraryCard: <ItineraryCard />,
  tourCarousel: <TourCarousel />

}

const TogoGhana = () => {
  const subtitleText = `Togo is known for their great beaches, among them being Aneho Beach and Lome Beach. 
  White sand can be found on several of the beaches, and seclusion is simple to come by.`;
  return (
    <>
    <Heading title={`Togo-Ghana Adventures & Culinary Trip`} imageSrc={'/images/tours/elephant2.jpg'} subtitle = {subtitleText}  />
    <div className=" py-10 bg-gray-100 dark:bg-slate-900 ">
        <div className="container mx-auto py-2 ">
          <div className="relative  mx-auto px-4 sm:px-6 lg:px-4 ">
            <div className="pricing-box max-w-lg mx-auto rounded-lg shadow overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
                <div className="flex items-center">
                  <h2 className="uppercase md:text-2xl text-xl font-extrabold text-navy-800 dark:text-white">
                    {destinationAfrica1.tourName}.
                  </h2>
                  <br />
                  <br />
                </div>
                <h4 className="flex-shrink-0 pt-4 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600 dark:text-blue-300">
                  Overview of the Tour
                </h4>

                <p className="my-5 text-base leading-6 text-gray-800 dark:text-gray-200 md:text-justify ">
                  {destinationAfrica1.tourOverview}
                </p>
                <div className="w-full md:w-[100%] h-auto ">
                  <TourCarousel />
                </div>

                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
                      Package Includes
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                  </div>

                  <div className="pt-10  py-5 ">
                    <div className="flex flex-wrap  sm:mx-auto sm:mb-2 ">
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <span className="title-font dark:text-white font-medium">
                            Hotel Accommodation
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="title-font dark:text-white font-medium">
                            Breakfast
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="title-font dark:text-white font-medium">
                            Tourist Guide
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="title-font dark:text-white font-medium">
                            All Entry and Admissions
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                            />
                          </svg>
                          <span className="title-font dark:text-white font-medium">
                            Transportation
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span className="title-font dark:text-white font-medium">
                            Airport Pickups and Drop-Offs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                <ul>
                  { destinationAfrica1.additionalOffers &&  destinationAfrica1.additionalOffers.map((offer, index) => ( 
                  <li key={index}>{
                                     <div
                                     className={
                                       'flex flex-wrap  md:max-w-3xl h-auto md:max-h-auto  my-5 bg-white dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden'
                                     }
                                   >
                                     <div className=" md:w-1/3 bg-cover bg-landscape overflow-hidden">
                                        <img
                                         className="w-full h-full object-cover rounded-t-lg md:rounded-r-none md:rounded-l-lg  overflow-hidden "
                                         src={offer.offerImage}
                                         alt="Tour Package"
                                       />
                                     </div>
               
                                     <div className="w-full  md:w-2/3 p-4 flex flex-col justify-center ">
                                       <h1 className="text-gray-900 dark:text-gray-100  font-bold text-2xl">
                                         {offer.offerTitle}
                                       </h1>
                                       <p className="mt-2 text-gray-600 dark:text-gray-100 text-sm">
                                         {offer.offerDescription}
                                       </p>
                                       <div className="flex item-center mt-2">
                                         <svg
                                           className="w-5 h-5 fill-current text-gray-700 dark:text-gray-200"
                                           viewBox="0 0 24 24"
                                         >
                                           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                                         </svg>
                                         <svg
                                           className="w-5 h-5 fill-current text-gray-700 dark:text-gray-200"
                                           viewBox="0 0 24 24"
                                         >
                                           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                                         </svg>
                                         <svg
                                           className="w-5 h-5 fill-current text-gray-700 dark:text-gray-200"
                                           viewBox="0 0 24 24"
                                         >
                                           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                                         </svg>
                                       </div>
                                       <div className="flex item-center justify-between mt-3">
                                         <h1 className="text-gray-700 dark:text-gray-200 font-bold text-xl">
                                           {offer.offerPrice ?? ''}
                                         </h1>
                                         <button className="px-3 py-2 dark:bg-navy-800   dark:hover:bg-navy-700 bg-navy-800 hover:bg-navy-900 text-white dark:text-navy-50 text-xs font-bold uppercase rounded">
                                           Book in Addition
                                         </button>
                                       </div>
                                     </div>
                                   </div>
                  }</li> ))}
                </ul> 
                  <img
                    src={destinationAfrica1.tourImage}
                    alt={destinationAfrica1.tourImageAlt}
                    className="w-full h-auto rounded-lg my-5 shadow bg-cover "
                  />
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
                      Highlights Shall Include
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                  </div>

                  <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    {/* array map through tourHighlight */}

                    {destinationAfrica1.tourHighlight.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start lg:col-span-1 py-1"
                      >
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width={6}
                            height={6}
                            stroke="currentColor"
                            fill="#10b981"
                            viewBox="0 0 1792 1792"
                          >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                          {highlight}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="py-8 px-6 bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-start lg:p-8">
                <div className="shadow-lg rounded-xl w-full md:max-w-xs p-6 bg-white dark:bg-gray-800 overflow-hidden mb-5  ">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center justify-start w-full flex-grow">
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="/images/person/1.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                      <div className="flex flex-col items-start ml-4">
                        {/* <span className="dark:text-white text-gray-700">
          Charlie Rabiller
        </span> */}
                        <span className="text-gray-400 font-light text-sm dark:text-gray-300">
                          Updated 3 min ago
                        </span>
                      </div>
                    </div>
                    <div className="flex-none hidden md:block ">
                      <span className="w-full px-3 py-1 text-sm rounded-full text-white bg-blue-500">
                        Tour
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-white text-lg mt-4 mb-2 text-left ">
                    {destinationAfrica1.tourOverview2Header}
                  </p>
                  <p className="text-gray-500 font-normal text-sm text-justify ">
                    {destinationAfrica1.tourOverview2}
                  </p>
                  {/* {destinationAfrica1.tourPackageWithPrice1}
                {destinationAfrica1.tourPackageWithPrice2}
                {destinationAfrica1.tourPackageWithPrice3}
                {destinationAfrica1.tourPackageWithPrice4}
                {destinationAfrica1.tourPackageWithPrice5}
                {destinationAfrica1.tourPackageWithPrice6} */}

                  <button
                    type="button"
                    className="my-2 py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200  text-sm  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Book This Tour
                  </button>
                  <button
                    type="button"
                    className="my-2 py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200  text-sm lowercase  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    EXCEL@EXCELTRAVELSERVICES.COM
                  </button>
                  <button
                    type="button"
                    className="my-2 py-2 px-4  bg-blue-100 hover:bg-blue-600 hover:text-white focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 w-full transition ease-in duration-200  text-sm lowercase  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Hotline: +1 412 315 4817
                  </button>
                </div>

                <p className="mt-4 text-center text-sm leading-5 flex flex-col ">
                  <span className=" font-medium text-gray-500 dark:text-gray-400 mb-4 flex justify-center ">
                    <PaymentLogos />
                  </span>
                  <span className="block  font-medium text-gray-500 dark:text-gray-400">
                    Discount for Children:
                  </span>
                  <span className=" inline-block font-medium text-gray-500 dark:text-gray-400">
                    Children between the ages of 6-12 years <br />
                    50% charge of adult rates.
                  </span>
                </p>
                <div className="mt-6">
                  <div className="my-5 text-left">
                    <span className=" uppercase py-5 text-xl text-blue-600">
                      Itinerary
                    </span>
                    <div className="flex-1 border-t-2 border-gray-200"></div>

                    <div className="container px-2 py-10 mx-auto flex flex-wrap">
                      <div className="flex flex-wrap w-full">
                        <div className="max-w-xs  md:py-6">
                          {destinationAfrica1.tourItinerary.map(
                            (itinerary, index) => (
                              <div
                                key={index}
                                className="flex relative pb-12 text-left"
                              >
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>

                                <div
                                  className="flex-shrink-0 w-10 h-10 
                          rounded-full bg-blue-600 
                          inline-flex items-center justify-center text-white 
                          relative z-10"
                                >
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                  </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                  <h2
                                    className="font-medium title-font 
                            text-sm dark:text-pink-500 text-gray-900 mb-1 uppercase
                            tracking-wide "
                                  >
                                    {itinerary.day}
                                  </h2>
                                  <p className="leading-relaxed dark:text-navy-200 text-xl text-blue-800 italic font-bold ">
                                    {itinerary.title}
                                  </p>
                                  <p className="leading-relaxed">
                                    {itinerary.description}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TourCardIntro />
      </div>    
    </>
  )
}

export default TogoGhana