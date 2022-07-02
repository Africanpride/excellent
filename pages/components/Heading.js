import react, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Heading({ title, subtitle, imageSrc = '/static/beach.jpg' }) {

    const router = useRouter();
    const pathname = router.pathname.substring(1);

    return (
        <>

            <div className="relative p-5 bg-navy-100  border-white dark:border-navy-800  dark:border-0 h-auto py-[80px] flex justify-center items-center ">


            <div className="container flex flex-wrap px-16 py-[32px] mx-auto items-center z-10 text-white" >
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 ">
                    <h1 className="text-6xl text-center md:text-right md:text-7xl  uppercase font-extrabold  title-font mb-2  font-sans bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 ">{ title ?? pathname}</h1>

                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12 py-5">
                <p className=" text-xl md:italic">{ subtitle ?? `The trip of your dreams doesn’t need a Hollywood-sized budget or years of planning.  Simply join a small group of like-minded travelers, and start to experience all the things that make our world worth exploring.`}</p>

                </div>
                </div>


                <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                    src={imageSrc} 
                    layout='fill'
                    objectFit='cover'
                    alt="Excel travel Services Holiday Destination"
                    />

                    <div className="absolute inset-0 bg-navy-900 opacity-70"></div>

                {/* <div className="absolute bottom-0 left-0 w-full  h-10 flex justify-start items-center">

                    <div 
                    className="text-xl bg-gray-400 w-fit h-10 text-white flex justify-center items-center px-5
                    
                    ">
                        toLocaleDateString     
                    </div>
                    <div className="text-xl bg-navy-900 w-fit h-10  text-white flex justify-center items-center px-5">

                    </div>

                </div> */}
                </div>

            </div>

            </>
    )
    }


