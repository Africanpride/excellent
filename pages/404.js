import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'
import bgImage from '../public/assets/404.svg'
import { ChevronRightIcon } from "@heroicons/react/solid";




const NotFound = () => {
    return ( 
        <>



<div className="w-full h-screen min-h-5 bg-blue-200 dark:bg-indigo-900 md:m-auto  md:flex justify-center items-center md:px-14 px-5">
  <div className="md:border-r border-blue-500 dark:border-indigo-800 dark:border-opacity-60 py-6  border-opacity-40  md:pr-6 text-7xl md:flex-1 md:text-right ">404</div>
  <div className="md:pl-6 md:flex-1 "> Sorry. Wrong turn! But you can still travel by returning to the <br />
    <Link href="/"><a className="text-indigo-800 capitalize dark:text-gray-500"><span className="inline-flex items-center justify-center uppercase">Homepage<ChevronRightIcon className="w-5 h-5" /></span></a></Link>
  </div> 
</div>


      

        </>
     );
}
 
export default NotFound;