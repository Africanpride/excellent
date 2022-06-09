import Link from "next/link";
import Navbar from "./components/Navbar";
import Layout from './components/layout'


export default function Flights({name, description, language}) {

    return (
<>

    <main className='flex justify-center items-center h-screen w-full bg-black md:mx-auto  px-4'>
     <div className='  text-4xl  text-center capitalize  text-pink-600 font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 font-bold  md:text-2xl  lg:text-5xl'>
       Welcome to  <br /> 
       <div className="text-md">{description}</div> 
     {language}
    </div>
   </main>

    </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/freeCodeCamp/freeCodeCamp')
    const freeCodeCamp = await res.json()
  
    return { 
      props: 
      { 
        name: freeCodeCamp.name, 
        description: freeCodeCamp.description,
        language: freeCodeCamp.language
    } 
  }
  }


