import React from 'react'
import Image from 'next/image'
import clip from 'text-clipper'
import Carousel from 'react-multi-carousel'

const accra = clip(`Accra is surrounded by beaches, each of which is unique in its own way. However, they all have one thing in common: cleanliness and safety. The beaches are great for swimming, surfing, and relaxing—and they're also fun! While you're on them, you'll be able to enjoy the beauty of nature around you with no worries about getting caught up in some sort of crime or violence on land or sea.`, 120)

const banjul = clip(`Banjul is known for its beaches, nightlife, culture and history. Banjul is also known for its food, which is full of delicious. Banjul is also known for its beauty, which is full of beauty. Banjul is also known for its safety, which is full of safety. Banjul is also known for its fun, which is full of fun. Banjul is also known for its beaches, which are full of beaches. `, 120)

const johannesburg = clip(`Johannesburg generates 16 percent of South Africa's GDP and employs 12 percent of the national workforce. Its infrastructure matches leading first world cities, yet the cost of living is far lower. The city is recognized as the financial capital of South Africa and is home to 74 percent of Corporate Headquarters.`, 120)

const abidjan = clip(`A cultural crossroads of West Africa, Abidjan is characterised by a high level of industrialisation and urbanisation. The city expanded quickly after the construction of a new wharf in 1931, followed by its designation as the capital city of the then-French colony in 1933.`, 120)

const lagos = clip(`Lagos is a major African financial centre and is the economic hub of Lagos State and Nigeria at large. The city has been described as the cultural, financial, and entertainment capital of Africa, and is a significant influence on commerce, entertainment, technology, education, politics, tourism, art, fashion.`, 120)

const lome = clip(`Sitting on the Gulf of Guinea, the port city of Lome serves as the capital of Togo, a sliver of a country in West Africa. Famous for the friendliness of its people and the beauty of its countryside, Lome is the perfect place to relax after exploring Togo's hills and forests.`, 120)

const kigali = clip(`Kigali is the capital of Rwanda, a country in East Africa. It is the largest city in the country, and the largest in the world. Kigali is the largest city in the country, and the largest in the world.`, 120)

function AfricanDestinations() {

    return ( 
    <> 
    <section className="text-gray-600 body-font bg-blue-50 dark:bg-gray-900">
        <div className="container px-5 py-36 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1
                        className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900 dark:text-white">Top African Travel Destinations</h1>
                    <div className="h-1 w-20 bg-blue-900 dark:bg-blue-700 rounded"></div>
                </div>
                <p
                    className="lg:w-1/2 w-full leading-relaxed dark:text-gray-400 text-opacity-90">From
                    Banjul to Johannesburg, Africa boasts more World Heritage Sites than any other
                    continent in the world. This Mediterranean gem offers one of the most famous and
                    delicious cuisines in the world. Every city you travel to will give you an
                    entirely different experience, with unique aspects to topography, cuisine, and
                    scenery!</p>
            </div>
            <div className="flex flex-wrap -m-4">

                <div className="xl:w-1/4 md:w-1/2 p-2">
                    <div
                        className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
                        <Image className="h-40 rounded w-full object-cover object-center mb-6" 
                        src="/images/destinations/johannesburg.jpg" 
                        width="720" height="400" 
                        alt="Johannesburg, South Africa"/>

                        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                        <h2
                            className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Welcome to Mzansi</h2>
                        <p className="leading-relaxed text-base">{`${lagos}`}</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-2">
                    <div
                        className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
                        <Image className="h-40 rounded w-full object-cover object-center mb-6" 
                        src="/images/destinations/accra.jpg" 
                        width="721" 
                        height="401" 
                        alt="Accra, Ghana"/>
                        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                        <h2
                            className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Best of Accra</h2>
                        <p className="leading-relaxed text-base">{`${accra}`}</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-2">
                    <div
                        className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">

                        <Image className="h-40 rounded w-full object-cover object-center mb-6" 
                        src="/images/destinations/banjul.jpg" 
                        width="721" 
                        height="401" 
                        alt="Banjul, Gambia"/>

                        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                        <h2
                            className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">White Sands Beach</h2>
                        <p className="leading-relaxed text-base">{`${banjul}`}</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-2">
                    <div
                        className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">

                        <Image className="h-40 rounded w-full object-cover object-center mb-6"
                        src="/images/destinations/abidjan.jpg" 
                        width="721" 
                        height="401" 
                        alt="Abidjan. Ivory Coast"/>

                        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">African Destination</h3>
                        <h2
                            className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Ready for Abidjan?</h2>
                        <p className="leading-relaxed text-base">{`${abidjan}`}</p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    </>
  )
}

export default AfricanDestinations