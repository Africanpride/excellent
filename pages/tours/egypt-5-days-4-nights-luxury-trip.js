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
  image={'/images/cards/hotels/holiday3.jpg'} 
  offerText={'$3050 in single room super deluxe service & In double room 2800$ super deluxe service '}
  offerPrice='$2800 - $3050'
  />,
  additionalOffers2: 
  <AdditionalOffer 
  offerTitle={'2- Super Deluxe Service'} 
  image={'/images/cards/hotels/holiday.jpg'} 
  offerText={'Per person single room deluxe service for $2800 & Double room deluxe device $2500'}
    offerPrice='$2500 - $2800'
  />,
  additionalOffers3: 
  <AdditionalOffer 
  offerTitle={'3- Super Deluxe Service'} 
  image={'/images/cards/hotels/holiday2.jpg'} 
  offerText={'Per person single room deluxe service for $2250 & Double room deluxe device $1900'}
    offerPrice='$1900 - $2250'
  />,


  tourItinerary: [
    {
      day: 'Day 1',
      title: 'Nile Cruise',
      description: 'You will be met in Luxor and transferred to your five stars full board Nile Cruise. In the afternoon you will start your visit in Luxor with the tour to the East Bank, where you will visit the largest temple in Egypt with is Karnak Temples, then to a smaller but not less important one called Luxor Temple where you get to see the combination between three different religions in one sight, after the tour will drive you back to your cruise ship..',
      image: '/images/tours/cairo-arrival.jpg'
    },
    {
      day: 'Day 2',
      title: 'cruise ship',
      description: 'Overnight on board in Luxor. – After breakfast we will pick you up from the cruise going to visit the West Bank of Luxor where you will visit Valley of the Kings, Queen Hatshepsut’s Mortuary Temple, and the Colossi Statues of Memnon. After your tour will get back to the cruise ship set sail towards Edfu acrossing Esna lock. Overnight on board in Edfu.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 3',
      title: 'visit Edfu Templ',
      description: 'After breakfast, we will pick you up from the cruise going to visit Edfu Temple the best preserved temple in Egypt and the 2nd biggest one after Karnak, this temple dedicated to the Falcon god Horus. after your tour will get back to the cruise and set sail towards the temple of Komombo, dedicated to the crocodile god Sobek. you will enjoy the visit at this temple then set sail towards Aswan.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 4',
      title: 'tour to Philae Temple',
      description: 'Morning after your breakfast we will pick you up from the cruise going to visit the High Dam, followed by a tour to Philae Temple on an Island dedicated to Goddess Isis, after the tour will return to the cruise.',
      image: '/images/tours/cairo-city-tour.jpg'
    },
    {
      day: 'Day 5',
      title: 'temples of Ramses II and Nefertiti',
      description: 'Your cruise ship will prepare a breakfast box to take with you on your early morning departure to the magnificent temples of Ramses II and Nefertiti at Abu Simbel. Joining the sharing tour leaving Aswan at 4 AM towards Abu Simbel, you will get back to Aswan around 2 PM, will pick your luggage and will drive you to wherever you want to go in Aswan.',
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