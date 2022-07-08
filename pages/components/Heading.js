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

            <div className="relative bg-transparent m-2 h-auto py-[90px] md:py-[15vh] flex justify-center items-center ">


            <div className="container flex flex-wrap px-4 md:px-16 py-[32px] mx-auto items-center z-10 text-white" >
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-5 md:mb-0 md:pb-10 pb-5 border-b border-gray-200 ">
                    {/* <h1 className="md:text-4xl md:text-right text-2xl uppercase font-extrabold   font-sans bg-clip-text text-white">{ title ?? pathname}</h1> */}
                    <h1 className="text-2xl md:text-right md:text-4xl  uppercase font-extrabold  title-font font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100 ">{ title ?? pathname}</h1>

                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12 md:py-10 ">
                <p className=" text-xl md:italic">{ subtitle ?? `The trip of your dreams doesn’t need a Hollywood-sized budget or years of planning.  Simply join a small group of like-minded travelers, and start to experience all the things that make our world worth exploring.`}</p>

                </div>
                </div>


                <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                    src={imageSrc} 
                    className = ' rounded-xl'
                    layout='fill'
                    objectFit='cover'
                    alt="Excel travel Services Holiday Destination"
                    />

                    <div className="absolute inset-0 bg-gray-900 opacity-70  rounded-xl"></div>
                </div>

            </div>

            </>
    )
    }


