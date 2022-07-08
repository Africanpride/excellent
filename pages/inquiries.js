// Nextjs app for inquiries
import React from 'react';
import CarouselCard from './components/FooterCarousel';
import Heading from './components/Heading';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router'
import BigCard from './components/BigCard';

export default function Inquiries() {

  const router = useRouter();
  const { t } = useTranslation('inquiries');

  return (

    <>
    <Heading title={'Help & Inquiries'}  imageSrc={'/images/cards/holiday3.jpg'} />
    
<div className=''  >

</div>
    <section className="dark:text-gray-400 text-gray-600 dark:bg-navy-900 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-gray-600"><span className='capitalize '>We are very eager to hear from you! </span> <br />
         </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{`No matter when and where you want to be, and at any time in the world, you can depend on us. Travel provides us with our most memorable stories, most treasured memories, and countless irreplaceable experiences that we can choose to pass on to others. It teaches us about ourselves and each other, broadens our horizons, and forces us to refocus on what truly matters, much like a reset button.  `}</p>
        </div>
<div className='mb-5 pb-5 mx-auto ' >
<BigCard darkBgColor='dark:bg-navy-800' txtColor='text-white' packageImage='/images/cards/airplaneWindow.jpg' />
</div>

        <div className="flex flex-wrap  text-center">
          <div className="p-4 md:w-1/3 w-full"  >
            <div className="border-2 dark:border-navy-800 border-gray-300 px-4 py-6 rounded-lg" >
              <Image 
                src='/static/mail142.svg'
                alt="mail-142"
                className="w-full  cursor-pointer"
                width={55}
                height={55}
                objectfit="contain"
                onClick={() => router.push('mailto:info@ExcelTravelServices.com')}
              />
              <h2 className="text-xl dark:text-white text-gray-400" >info@ExcelTravelServices.com</h2>
              {/* <p className="leading-relaxed">Downloads</p> */}
            </div>
          </div>

          <div className="p-4 md:w-1/3 w-full"  >
            <div className="border-2 dark:border-navy-800 border-gray-300 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-green-500 w-12 h-12 mb-3 inline-block  cursor-pointer" viewBox="0 0 24 24"  onClick={() => router.push('https://wa.me/15164619526')} >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
              </svg>
              <h2 className=" text-xl dark:text-white text-gray-400">Live Chat</h2>
              {/* <p className="leading-relaxed">Users</p> */}
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="border-2 dark:border-navy-800 border-gray-300 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-yellow-500 w-12 h-12 mb-3 inline-block  cursor-pointer " viewBox="0 0 24 24"    onClick={() => router.push('tel:+15164619526')}>
                <path d="M3 18v-6a9 9 0 0118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
              </svg>
              <h2 className=" text-xl dark:text-white text-gray-400">+1 516 461 9526</h2>
              {/* <p className="leading-relaxed">+1 516 461 9526</p> */}
            </div>
          </div>

        </div>
      </div>
    </section>

    </>

  );
} 
