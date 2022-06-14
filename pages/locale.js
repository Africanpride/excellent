import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Destinations from './components/Destinations';

export default function Home() {
  const router = useRouter()
  const { locale } = router

  return (
<> 
<Destinations />

</>
  )
}