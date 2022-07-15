import React from 'react'
import Heading from '../components/Heading'
import SmallCard from '../components/SmallCard'
import TourCardIntro from '../components/Tours/TourCardIntro'
import clip from 'text-clipper'
import ItineraryCard from '../components/Tours/ItineraryCard';
import TourCarousel from '../components/Tours/TourCarousel';
import TourPackageWithPrice from '../components/TourPackageWithPrice';
import PaymentLogos from '../components/PaymentLogos';
// pass html element to virtual dom
import parse from 'html-react-parser';
import AdditionalOffer from '../components/AdditionalOffer'
import { faGuilded } from '@fortawesome/free-brands-svg-icons'

const egyptPackageItem = parse('');

const destinationEgype1 = {
  tourName: `Egypt Tour: Yoga Retreats – Sahara Adventure (11 Days / 10 Nights) `,

  tourOverview: `Prices and Conditions Valid from 1/10/2022 till 30/4/2023. = USD 1985. Price per 
  person in double occupancy Price is based on 6 paying passengers, and includes: 5 nights' accommodation in Cairo, in a standard 5 stars hotel, 2 nights on Bed and 
  Breakfast and 3 on Half Board basis. The full board during The Oases trip, day 4 to 
  day 9. The accommodation in local hotels and good standard tents, during the visit of 
  the Oases. The entry fees of all the mentioned sightseeing. 2 lunches in high quality 
  restaurants during the 2 days visits of Cairo. English speaking Egyptologist during the 
  sightseeing in Cairo. Fair English-speaking guides during the Oases trip. 
  Transportation by air-conditioned vehicles in Cairo, and to/from the Oases. `,

  tourOverview2: `Transportation is by air-conditioned 4x4 Jeeps in the Oases. 
  Excludes: The flight tickets, to/from Egypt. The entry visa to Egypt. Personal 
 expenses. Gratuities. Please be informed that:  
 -50% of total operation amount, upon confirmation.​
 -50%, 3 weeks prior to arrival.​
 If the request is less than a month prior to the arrival date,​
 -100% upon confirmation.`,

  tourOverview2Header: `Confirmation Details`,

  tourDuration: `11 days, 10 nights`,

  tourImage: `/images/cards/egypt_yoga.jpg`,

  tourHighlight: ['Tourism Guide', 'Reception and Travel', 'All Transfers', 'All Entrance and Tickets', 'Two Flights inside Egypt','All Meals During the Trip'],
 
  tourPayment: 'Payment is required upon arrival',
  tourPaymentLogos: <PaymentLogos />,

  additionalOffers: [
    {
      offerTitle: 'Price per person in double occupancy',
      offerDescription:`Price is based on 6 paying passengers, and includes: 5 nights' accommodation in Cairo, in a standard 5 stars hotel, 2 nights on Bed and Breakfast and 3 on Half Board basis.`,
      offerImage: '/images/cards/egypt_yoga2.jpg',
      offerPrice: 'Price: $1985',
    }
  ],

  tourItinerary: [
    {
      day: 'Day 1',
      title: 'Arrival in Cairo',
      description: `Arrive to Cairo international airport, your Tour Manager will meet and assist 
      you, then will escort you to your hotel in an air-conditioned deluxe vehicle. At the 
      hotel, he'll assist you with a smooth check-in and review your day-by-day itinerary, to 
      confirm pick-up times for each tour. Overnight in Cairo.`,
      image: '/images/tours/cairo-arrival.jpg'
    },
    {
      day: 'Day 2',
      title: 'The Great Pyramids',
      description: `You will have your breakfast at your hotel, then, your personal Egyptologist 
      guide will accompany you to Giza to visit one of The Seven Wonders of the Ancient 
      World, the Great Pyramids of Cheops, Chefren, Mykerinos, famous Sphinx and Valley 
      temple. Then, you will enjoy a tasty lunch at a high-quality restaurant. Heading to The 
      Egyptian Museum, you will enjoy Treasures room of the king Tutankhamen. Evening, 
      you will enjoy a freshly prepared dinner in your hotel and spend an overnight in 
      Cairo.`,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 3',
      title: `Visit to Many interesting places`,
      description: `Hotel breakfast, transfer to start a full day visit to the Coptic Cairo, we will  
      discover the oldest part of the city, originally a Roman fortress town called 
      "Babylon”, where The Holy Family passed by. We'll start by visiting the hanging 
      Church (El Muallaqa) one of the oldest churches in Egypt and its history dates to the 
      3rd century. Proceed to visit Saint Sergius and Bacchus Church, also known as Abu 
      Serga dating back to the 4th century. Visit the Church of St. Barbara, one of the oldest 
      buildings in Cairo, dating back to the 5th century, then proceed to visit the Church of 
      St. George, a Greek Orthodox Church, dates back to the 10th century. Lunch in a local 
      restaurant, then proceed to visit the Islamic Cairo, The Citadel and Mohamed Ali 
      Mosque. At the end of the day, you'll enjoy a tour in the "Souq" of Khan El Khalili 
      Bazaars, where you can find lot of choices if you want to buy some souvenirs to your 
      family and friends. End of the tour, transfer to your hotel, dinner and overnight.`,

      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 4',
      title: `Marsa Matrouh, Siwa Oases`,
      description: `Early breakfast at your hotel, check-out, then drive toward Siwa Oases to start 
      your journey to the Desert to enjoy your Yoga retreats and experience an adventure 
      trip in the Oases of Egypt. We stop by Marsa Matrouh for lunch, then we continue our 
      way driving to reaches Siwa Oases. Arrive, check-in, dinner and overnight.`,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 5',
      title: `Alexander the Great Temple, and Cleopatra path`,
      description: `Hotel breakfast, Yoga session, and then we start to explore Siwa by visiting the 
      mountain of the dies, Alexander the Great Temple, and Cleopatra path. Back to our 
      hotel for lunch, then, we drive to visit El Dakrour Mountain, and a tour by a small 
      boat in the salty lakes. Back to the city to enjoy a tour, in the dates and olives market. 
       
      Evening, Yoga session, dinner and overnight at your hotel. `,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 6',
      title: 'Baharia Oasis',
      description: `Early hotel breakfast, check-out, drive back to Marsa Matrouh, then to Baharia 
      Oasis, lunch en route, and by the end of the day we arrive at Baharia. Check-in at your 
      hotel, dinner and overnight.`,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 7',
      title: 'Yoga sessions, Crystal Mountain, etc ',
      description: `Morning, Yoga session, breakfast at your hotel, and check-out. Our 4x4 Jeeps 
      are ready to drive us to start our Sahara adventure. Drive to the black desert, El Hez 
      village, to see the cold spring where we'll have our lunch. Proceed to visit The Crystal 
      Mountain, then we continue driving in the middle of the desert to El Matter area 
      where we find a nice spot to make our camp. Yoga session under the stars, then, 
      dinner and overnight. `,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 7',
      title: 'El Hez village, The Crystal Mountain ',
      description: `Morning, Yoga session, breakfast at your hotel, and check-out. Our 4x4 Jeeps 
      are ready to drive us to start our Sahara adventure. Drive to the black desert, El Hez 
      village, to see the cold spring where we'll have our lunch. Proceed to visit The Crystal 
      Mountain, then we continue driving in the middle of the desert to El Matter area 
      where we find a nice spot to make our camp. Yoga session under the stars, then, 
      dinner and overnight. `,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 8',
      title: 'Magic Spring, The White Desert',
      description: `Morning Yoga session, breakfast, and then drive to explore more in The White 
      Desert. We visit Aqapat and Karaween Dunes, then we drive, by our 4x4 Jeeps, to the 
      Magic Spring where we will have our lunch. Proceed driving to The White Desert 
      with its limestone formations. By the sun set we find our lovely spot for camping, 
      Yoga session, then dinner and overnight under the stars. `,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 9',
      title: 'Baharia Oasis',
      description: `After breakfast, we drive back to Baharia Oases, then we find our car ready to 
      drive us back to Cairo. Arrive, check-in, dinner, and overnight hotel. `,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 10',
      title: 'City tour in Cairo',
      description: `Breakfast, then transfer, by your Van, and with your Egyptologist, to enjoy a 
      city tour in Cairo, the capital of Egypt, and the second biggest city in Africa. Lunch 
      free. Evening, your Tour Manager will accompany you to enjoy a cruise dinner on the 
      Nile River, aboard a Luxurious Ship, include folkloric show. Overnight at your hotel.  `,
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 11',
      title: 'Departure from Cairo International Airport ',
      description: `Hotel breakfast, check-out, then transfer to Cairo International Airport and fly 
      back home.`,
      image: '/images/tours/cairo-city-tour.jpg'
    },
  ],
  tourItineraryCard: <ItineraryCard />,
  tourCarousel: <TourCarousel />

}


const EgyptYogaTrip = () => {
  const subtitleText = clip(`Egyptian art is also a mixture of styles from other cultures—the Egyptians borrowed techniques from the Etruscans and Greeks, for instance; they used materials like wood or stone; they made art for various purposes such as religious rituals or tomb decoration.`, 150);
  return (
    <>
    <Heading title={`Egypt Tour: Yoga Retreats – Sahara Adventure`} imageSrc={'/images/cards/egypt6.jpg '} subtitle = {subtitleText}  />

    <div className=" py-10 bg-gray-100 dark:bg-slate-900 ">
        <div className="container mx-auto py-2 ">
          <div className="relative  mx-auto px-4 sm:px-6 lg:px-4 ">
            <div className="pricing-box max-w-lg mx-auto rounded-lg shadow overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
                <div className="flex items-center">
                  <h2 className="uppercase md:text-2xl text-xl font-extrabold text-navy-800 dark:text-white">
                    {destinationEgype1.tourName}.
                  </h2>
                  <br />
                  <br />
                </div>
                <h4 className="flex-shrink-0 pt-4 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600 dark:text-blue-300">
                  Overview of the Tour
                </h4>

                <p className="my-5 text-base leading-6 text-gray-800 dark:text-gray-200 md:text-justify ">
                  {destinationEgype1.tourOverview}
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
                  { destinationEgype1.additionalOffers &&  destinationEgype1.additionalOffers.map((offer, index) => ( 
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
                                           Book Here
                                         </button>
                                       </div>
                                     </div>
                                   </div>
                  }</li> ))}
                </ul> 
                  <img
                    src={destinationEgype1.tourImage}
                    alt={destinationEgype1.tourImageAlt}
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

                    {destinationEgype1.tourHighlight.map((highlight, index) => (
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
                    {destinationEgype1.tourOverview2Header}
                  </p>
                  <p className="text-gray-500 font-normal text-sm text-justify ">
                    {destinationEgype1.tourOverview2}
                  </p>

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
                    {destinationEgype1.tourPaymentLogos }
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
                          {destinationEgype1.tourItinerary.map(
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
                                  <p className="leading-relaxed dark:text-navy-200 text-sm text-blue-800 italic font-bold ">
                                    {itinerary.title}
                                  </p>
                                  <p className="leading-relaxed text-sm text-justify">
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

export default EgyptYogaTrip