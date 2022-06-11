import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'



import styles from '../styles/Home.module.css'

export default function About() 
{
  return (

    <>
      <Head>
        <title>About Excel Travel Services</title>
      </Head>
    <main className='flex justify-center items-center h-screen w-full bg-black md:mx-auto  px-4'>
     <div className='flex justify-center items-center text-4xl  text-center capitalize  text-pink-600 font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 font-bold  md:text-6xl  lg:text-8xl '>Welcome <br />
    to About World!</div>
  </main>
  </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}