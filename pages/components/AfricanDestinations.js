import React from 'react'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://dummyimage.com/${src}}`
  }

function AfricanDestinations() {
  return (
    <>
    <section className="text-gray-600 body-font bg-blue-50 dark:bg-gray-900">
  <div className="container px-5 py-36 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900 dark:text-white">Top African Travel Destinations</h1>
        <div className="h-1 w-20 bg-blue-900 dark:bg-blue-700 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed dark:text-gray-400 text-opacity-90">From Banjul to Johannesburg, Africa boasts more World Heritage Sites than any other continent in the world. This Mediterranean gem offers one of the most famous and delicious cuisines in the world. Every city you travel to will give you an entirely different experience, with unique aspects to topography, cuisine, and scenery!</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-2">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
        <Image 
          className="h-40 rounded w-full object-cover object-center mb-6" 
          loader={myLoader}
          src="720x400" 
          width="720"
          height="400"
          alt="content"
          />

          <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-2">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
          <Image 
          className="h-40 rounded w-full object-cover object-center mb-6" 
          loader={myLoader}
          src="721x401" 
          width="721"
          height="401"
          alt="content"
          />
          <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-2">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">
          
        <Image 
          className="h-40 rounded w-full object-cover object-center mb-6"           
          src="722x402"
          loader={myLoader}
          width="722"
          height="402"
          alt="content"
          />

          <h3 className="tracking-widest text-blue-800 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-2">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-40">

        <Image 
          className="h-40 rounded w-full object-cover object-center mb-6" 
          loader={myLoader}
          src="721x401"
          width="721"
          height="401"
          alt="content"
          />

          <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default AfricanDestinations