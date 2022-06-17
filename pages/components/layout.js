import Head from 'next/head'
import Navbar from './Navbar'
import FooterOne from './FooterOne'
import react from 'react';

export default function Layout({ children }) {
  return (
    <> 
      <Navbar />
      <>{children}</>
      <FooterOne />
    </>
  )
}