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
import { faGuilded } from '@fortawesome/free-brands-svg-icons'

const egyptPackageItem = parse('');

const destinationEgype1 = {
  tourName: 'Egypt: 7 Days, 6 nights Luxury Trip',
  tourOverview: `Egypt is a world-class diving destination. It offers an enormous variety of dive sites and dive operators, ranging from Red Sea shore sites to deep-diving liveaboard boats. There are many different types of diving available: wreck diving, wall diving, drift dives and night or cave diving. The Red Sea has many high quality dive centers offering PADI certification courses at affordable prices. One of the best things to do in Egypt is visit pyramids. Pyramids are very interesting, because they have been built by many people’s hands a long time ago. There are many pyramids in Egypt, such as the Great Pyramid of Giza and others (there is no place on earth that has so many pyramids)`,

  tourOverview2: `The pyramids in egypt took 20 years to build and it was covered with polished limestone blocks that were cut into shape using copper chisels during construction. The Egyptians believed that after death they would go through several stages before reaching heaven or hell depending on how good their life had been while they were alive!`,

  tourOverview2Header: `Great Pyramid of Giza`,

  tourDuration: `7 days 6 nights`,

  tourImage: `/images/cards/egypt3.jpg`,

  tourHighlight: ['Tourism Guild', 'Reception and Travel', 'All Transfers', 'All Entrance and Tickets', 'Two Flights inside Egypt','All Meals During the Trip'],
 
  tourPayment: 'Payment is required upon arrival',
  tourPaymentLogos: <PaymentLogos />,

  tourPackageWithPrice1: '',

  tourPackageWithPrice2: '',

  tourPackageWithPrice3: '',

  additionalOffers1: 
  <AdditionalOffer 
  offerTitle={'1- Super Deluxe Hotel & Nile Cruise'} 
  image={'/images/cards/hotels/holiday3.jpg'} 
  offerText={'Price per person in a single room in super deluxe Hotel and Nile cruise device is 4700$ the price per person in a double room in super deluxe hotel and Nile cruise service is 4350$'}
  offerPrice='$4700 - $4350'
  />,
  additionalOffers2: 
  <AdditionalOffer 
  offerTitle={'2- Super Deluxe Hotel & Nile Cruise'} 
  image={'/images/cards/hotels/holiday.jpg'} 
  offerText={'Price per person in deluxe hotel and Nile cruise service in single room 4200$ Price per person in double room deluxe hotel and Nile cruise service 3900$'}
    offerPrice='$4200 - $3900'
  />,
  additionalOffers3: 
  <AdditionalOffer 
  offerTitle={'3- Super Deluxe Hotel & Nile Cruise'} 
  image={'/images/cards/hotels/holiday2.jpg'} 
  offerText={'Price per person in single room standard service 3300$ Per person in double room standard service 3100$'}
    offerPrice='$3300 - $3100'
  />,


  tourItinerary: [
    {
      day: 'Day 1',
      title: 'Arrival in Cairo',
      description: 'Arrival at Cairo Airport and a reception for accommodation at the 5-star Steinberger Hotel next to the pyramids, have a meeting for acquaintance.',
      image: '/images/tours/cairo-arrival.jpg'
    },
    {
      day: 'Day 2',
      title: 'Pyramids of Giza',
      description: 'After breakfast, visit the pyramids of Giza and the Sphinx, ride a camel, then visit the Cairo Museum and go around the streets of Cairo and shopping.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 3',
      title: 'Travel from Cairo Airport Alp',
      description: 'In the morning Travel from Cairo Airport Alp Luxor Airport Arrival, reception and visit to Karnak and Luxor temples, then accommodation in a 5-star Nile boat.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 4',
      title: 'A visit to the tombs',
      description: 'Morning - A visit to the tombs of the Valley of the Kings on the West Bank in Luxor, a visit to the temple of Queen Hatshepsut, and a visit to the Colossi of Memnon Then return to the Nile boat, sail up the Nile in the afternoon to Edfu.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 5',
      title: 'the Temple of Horus in Edfu',
      description: 'A visit to the Temple of Horus in Edfu using a chariot, then return to the boat and sail to visit the Temple of Kom Ombo in the evening with the Mummification Museum and return to the boat and sail to Aswan.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 6',
      title: 'visit the Temple of Isis (Phila)',
      description: 'Morning arrival in Aswan, visit the Temple of Isis (Phila), the Unfinished Obelisk, the High Dam, and return to the boat.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day:'Day 7',
      title: 'Departure from Aswan Airport',
      description: 'Leaving the boat and traveling from Aswan Airport to Cairo Airport, then travel abroad for international flight.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
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