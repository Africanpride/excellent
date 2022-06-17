import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'
import bgImage from '../public/assets/404.svg'




const NotFound = () => {
    return ( 
        <>
<div className="bg-yellow-600 dark:bg-gray-800 overflow-hidden relative flex flex-col xl:flex-row shadow hover:shadow-md w-full ">

<Image
    src={bgImage}
    className="absolute w-full h-full max-w-1/2 hidden lg:block right-0 top-0"
    alt="bg-Image"
    width={842}

  />

  <div className="text-start  py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 flex flex-col justify-center items-center">
    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
      <span className="block">Want to be millionaire ?</span>
      <span className="block text-indigo-500">{`It's today or never.`}</span>
    </h2>
    <div className="lg:mt-0 lg:flex-shrink-0">
      <div className="mt-12 inline-flex rounded-md shadow">
        <button
          type="button"
          className=" py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Get started
        </button>
      </div>
    </div>
  </div>

</div>


      

        </>
     );
}
 
export default NotFound;