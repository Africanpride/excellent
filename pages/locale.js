import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Destinations from './components/Destinations';
import useTranslation from 'next-translate/useTranslation';


export default function Home() {
  const { t } = useTranslation('common');

  return (
      <> 
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <Destinations />
      </>
  )
}