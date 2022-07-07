import React from 'react'
import Heading from '../components/Heading'
import SmallCard from '../components/SmallCard'
import TourCardIntro from '../components/Tours/TourCardIntro'
import TourDestination from '../components/Tours/TourDestination'
import clip from 'text-clipper'
import ItineraryCard from '../components/Tours/ItineraryCard';
import TourCarousel from '../components/Tours/TourCarousel';
import TourPackageWithPrice from '../components/TourPackageWithPrice';
import PaymentLogos from '../components/PaymentLogos';
// pass html element to virtual dom
import parse from 'html-react-parser';
import AdditionalOffer from '../components/AdditionalOffer'

const egyptPackageItem = parse('');

const destinationEgype1 = {
  tourName: 'Egypt: 7 Days, 6 nights Luxury Trip',
  tourOverview: `Egypt is a world-class diving destination. It offers an enormous variety of dive sites and dive operators, ranging from Red Sea shore sites to deep-diving liveaboard boats. There are many different types of diving available: wreck diving, wall diving, drift dives and night or cave diving. The Red Sea has many high quality dive centers offering PADI certification courses at affordable prices. One of the best things to do in Egypt is visit pyramids. Pyramids are very interesting, because they have been built by many people’s hands a long time ago. There are many pyramids in Egypt, such as the Great Pyramid of Giza and others (there is no place on earth that has so many pyramids)`,

  tourOverview2: `The pyramids in egypt took 20 years to build and it was covered with polished limestone blocks that were cut into shape using copper chisels during construction. The Egyptians believed that after death they would go through several stages before reaching heaven or hell depending on how good their life had been while they were alive!`,

  tourOverview2Header: `Great Pyramid of Giza`,

  tourDuration: `7 days 6 nights`,

  tourImage: `/images/cards/egypt3.jpg`,

  tourHighlight: [
    'Akwapim hills', 'Lome Beach', 'Aneho Beach', 'Togo Museum','Kpalime City Tour','Keta Beaches and St. Paul Lighthouse','W.E. B. Du Bois Centre', 'Kwame Nkrumah Mausoleum', 'Agou and Yikpa Waterfalls', 'Agou and Yikpa Waterfalls', 'Agbodrafo Slave house and Aného'
  ], 
  tourPayment: 'Payment is required upon arrival',
  tourPaymentLogos: <PaymentLogos />,

  tourPackageWithPrice1: '',

  tourPackageWithPrice2: '',

  tourPackageWithPrice3: '',

  additionalOffers1: 
  <AdditionalOffer 
  offerTitle={'1- Super Deluxe Hotel & Nile Cruise'} 
  image={'/images/cards/hotels/holiday3.avif'} 
  offerText={'Price per person in a single room in super deluxe Hotel and Nile cruise device is 4700$ the price per person in a double room in super deluxe hotel and Nile cruise service is 4350$'}
  offerPrice='$4700 - $4350'
  />,
  additionalOffers2: 
  <AdditionalOffer 
  offerTitle={'2- Super Deluxe Hotel & Nile Cruise'} 
  image={'/images/cards/hotels/holiday.avif'} 
  offerText={'Price per person in deluxe hotel and Nile cruise service in single room 4200$ Price per person in double room deluxe hotel and Nile cruise service 3900$'}
    offerPrice='$4200 - $3900'
  />,
  additionalOffers3: 
  <AdditionalOffer 
  offerTitle={'3- Super Deluxe Hotel & Nile Cruise'} 
  image={'/images/cards/hotels/holiday2.avif'} 
  offerText={'Price per person in single room standard service 3300$ Per person in double room standard service 3100$'}
    offerPrice='$3300 - $3100'
  />,


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


const EgyptTripOne = () => {
  const subtitleText = clip(`Egyptian art is also a mixture of styles from other cultures—the Egyptians borrowed techniques from the Etruscans and Greeks, for instance; they used materials like wood or stone; they made art for various purposes such as religious rituals or tomb decoration.`, 150);
  return (
    <>
    <Heading title={`Egypt: 7 Days, 6 nights Luxury Trip`} imageSrc={'/images/cards/egypt6.jpg '} subtitle = {subtitleText}  />
    <div className=" py-10 bg-gray-100 dark:bg-slate-900 ">
      <TourDestination 
      {...destinationEgype1} 
      />
      <TourCardIntro />
    </div>      
    </>
  )
}

export default EgyptTripOne