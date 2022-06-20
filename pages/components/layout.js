import Head from 'next/head'
import Navbar from './Navbar'
// import FooterOne from './FooterOne'
import Footer from './Footer'
import react from 'react';

export default function Layout({ children }) {
  return (
    <> 
      <Navbar />
      <>{children}</>
      <Footer/>
    </>
  )
}