import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'
import { AboutCTA } from './components/AboutCTA'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function About() 
{
  return (

    <>
        <AboutCTA />

  </>
  )
}

