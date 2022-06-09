import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


function Navbar() {
  return (
    <>
    <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

      <span className="ml-3 text-xl">Excel Travel Services</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" ><a className="mr-5 hover:text-white">Home</a></Link>     
      <Link href="/about" ><a className="mr-5 hover:text-white">About</a></Link>     
      <Link href="/flights" ><a className="mr-5 hover:text-white">Flights</a></Link>     

    </nav>
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Book Now
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    
    
    
    </>
  )
}

export default Navbar;