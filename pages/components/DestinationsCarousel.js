/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clip from 'text-clipper'
import Carousel from 'react-multi-carousel'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 4
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 4
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }

};

const accra = clip(`Accra is surrounded by beaches, each of which is unique in its own way. However, they all have one thing in common: cleanliness and safety. The beaches are great for swimming, surfing, and relaxing—and they're also fun! While you're on them, you'll be able to enjoy the beauty of nature around you with no worries about getting caught up in some sort of crime or violence on land or sea.`, 120)

const banjul = clip(`Banjul is known for its beaches, nightlife, culture and history. Banjul is also known for its food, which is full of delicious. Banjul is also known for its beauty, which is full of beauty. Banjul is also known for its safety, which is full of safety. Banjul is also known for its fun, which is full of fun. Banjul is also known for its beaches, which are full of beaches. `, 120)

const johannesburg = clip(`Johannesburg generates 16 percent of South Africa's GDP and employs 12 percent of the national workforce. Its infrastructure matches leading first world cities, yet the cost of living is far lower. The city is recognized as the financial capital of South Africa and is home to 74 percent of Corporate Headquarters.`, 120)

const abidjan = clip(`A cultural crossroads of West Africa, Abidjan is characterised by a high level of industrialisation and urbanisation. The city expanded quickly after the construction of a new wharf in 1931, followed by its designation as the capital city of the then-French colony in 1933.`, 120)

const lagos = clip(`Lagos is a major African financial centre and is the economic hub of Lagos State and Nigeria at large. The city has been described as the cultural, financial, and entertainment capital of Africa, and is a significant influence on commerce, entertainment, technology, education, politics, tourism, art, fashion.`, 120)

const lome = clip(`Sitting on the Gulf of Guinea, the port city of Lome serves as the capital of Togo, a sliver of a country in West Africa. Famous for the friendliness of its people and the beauty of its countryside, Lome is the perfect place to relax after exploring Togo's hills and forests.`, 120)

const kigali = clip(`Known as the land of a thousand hills, Rwanda's stunning scenery and warm, friendly people offer unique experiences in one of the most remarkable countries in the world. It is blessed with extraordinary biodiversity, with incredible wildlife living throughout its volcanoes, montane rainforest and sweeping plains.`, 120)

const DestinationsCarousel = () => {

    return ( <> <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={6000}
        centerMode={false}
        className="bg-transparent dark:bg-slate-900 "
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="p-4 md:p-2 "
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable>

        <Link href="/news">
            <div
                className="bg-gray-100 cursor-pointer  p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/destinations/kigali.jpg"
                    width="720"
                    height="400"
                    alt="Johannesburg, South Africa"/>

                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                <h2
                    className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Welcome to Rwanda</h2>
                <p className="leading-relaxed text-base">{`${kigali}`}</p>
            </div>
        </Link>
        <Link href="/news">
            <div
                className="bg-gray-100 cursor-pointer  p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/destinations/lagos.jpg"
                    width="720"
                    height="400"
                    alt="Johannesburg, South Africa"/>

                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                <h2
                    className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Welcome to Lagos</h2>
                <p className="leading-relaxed text-base">{`${lagos}`}</p>
            </div>
        </Link>
        <Link href="/news">
            <div
                className="bg-gray-100 cursor-pointer  p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/destinations/johannesburg.jpg"
                    width="720"
                    height="400"
                    alt="Johannesburg, South Africa"/>

                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                <h2
                    className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Welcome to Mzansi</h2>
                <p className="leading-relaxed text-base">{`${johannesburg}`}</p>
            </div>
        </Link>
        <Link href="/news">

            <div
                className="bg-gray-100 cursor-pointer  p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/destinations/accra.jpg"
                    width="721"
                    height="401"
                    alt="Accra, Ghana"/>
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                <h2
                    className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Best of Accra</h2>
                <p className="leading-relaxed text-base">{`${accra}`}</p>
            </div>
        </Link>
        <Link href="/news">

            <div
                className="bg-gray-100 cursor-pointer  p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">

                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/destinations/banjul.jpg"
                    width="721"
                    height="401"
                    alt="Banjul, Gambia"/>

                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                <h2
                    className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">White Sands Beach</h2>
                <p className="leading-relaxed text-base">{`${banjul}`}</p>
            </div>
        </Link>
        <Link href="/news">

            <div
                className="bg-gray-100 cursor-pointer  p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">

                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/destinations/abidjan.jpg"
                    width="721"
                    height="401"
                    alt="Abidjan. Ivory Coast"/>

                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                <h2
                    className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Ready for Abidjan?</h2>
                <p className="leading-relaxed text-base">{`${abidjan}`}</p>
            </div>
        </Link>
        <Link href="/news">
            <div
                className="bg-gray-100 cursor-pointer  p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">

                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/destinations/lome.jpg"
                    width="721"
                    height="401"
                    alt="Abidjan. Ivory Coast"/>

                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                <h2
                    className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Ready for lome?</h2>
                <p className="leading-relaxed text-base">{`${lome}`}</p>
            </div>
        </Link>

    </Carousel> </>
  )
}

export default DestinationsCarousel