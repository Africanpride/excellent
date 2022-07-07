import React from 'react'
import Heading from '../components/Heading'
import PaymentLogos from '../components/PaymentLogos'
import SmallCard from '../components/SmallCard'
import TourPackageWithPrice from '../components/TourPackageWithPrice'
import ItineraryCard from '../components/Tours/ItineraryCard'
import TourCardIntro from '../components/Tours/TourCardIntro'
import TourCarousel from '../components/Tours/TourCarousel'
import TourDestination from '../components/Tours/TourDestination'
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
      day: 1,
      title: 'Arrival in Cairo',
      description: 'Arrive in Cairo and take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-arrival.jpg'
    },
    {
      day: 2,
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 3,
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 4,
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 5,
      title: 'Cairo City Tour',
      description: 'Take a tour of the city. We will be staying in the hotel for the night.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 6,
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
    <Heading title={`Togo-Ghana Adventures & Culinary Trip`} imageSrc={'/images/tours/elephant2.jpg '} subtitle = {subtitleText}  />
    <div className=" py-10 bg-gray-100 dark:bg-slate-900 ">
      <TourDestination {...destinationAfrica1} />
      <TourCardIntro />
    </div>      
    </>
  )
}

export default TogoGhana