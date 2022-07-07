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
  tourName: 'Egypt: 5 Days, 4 nights Luxury Trip',
  tourOverview: `Egypt is a world-class diving destination. It offers an enormous variety of dive sites and dive operators, ranging from Red Sea shore sites to deep-diving liveaboard boats. There are many different types of diving available: wreck diving, wall diving, drift dives and night or cave diving. The Red Sea has many high quality dive centers offering PADI certification courses at affordable prices. One of the best things to do in Egypt is visit pyramids. Pyramids are very interesting, because they have been built by many people’s hands a long time ago. There are many pyramids in Egypt, such as the Great Pyramid of Giza and others (there is no place on earth that has so many pyramids)`,

  tourOverview2: `The pyramids in egypt took 20 years to build and it was covered with polished limestone blocks that were cut into shape using copper chisels during construction. The Egyptians believed that after death they would go through several stages before reaching heaven or hell depending on how good their life had been while they were alive!`,

  tourOverview2Header: `Land of the Pharoahs`,

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
  offerTitle={'1- Super Deluxe Service'} 
  image={'/images/cards/hotels/holiday3.avif'} 
  offerText={'$3050 in single room super deluxe service & In double room 2800$ super deluxe service '}
  offerPrice='$2800 - $3050'
  />,
  additionalOffers2: 
  <AdditionalOffer 
  offerTitle={'2- Super Deluxe Service'} 
  image={'/images/cards/hotels/holiday.avif'} 
  offerText={'Per person single room deluxe service for $2800 & Double room deluxe device $2500'}
    offerPrice='$2500 - $2800'
  />,
  additionalOffers3: 
  <AdditionalOffer 
  offerTitle={'3- Super Deluxe Service'} 
  image={'/images/cards/hotels/holiday2.avif'} 
  offerText={'Per person single room deluxe service for $2250 & Double room deluxe device $1900'}
    offerPrice='$1900 - $2250'
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
    <Heading title={`Egypt: 5 Days, 4 nights Luxury Trip`} imageSrc={'/images/cards/egypt6.jpg '} subtitle = {subtitleText}  />
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