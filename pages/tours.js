import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Layout from './components/layout'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Destinations from './components/Destinations';
import useTranslation from 'next-translate/useTranslation';
import Heading from './components/Heading';


export default function Tours() {
  const { t } = useTranslation('common');

  return (
      <> 
      <Heading title={'Tour Packages'} />
        {/* <h1>{t('title')}</h1>
        <p>{t('description')}</p> */}
      <div className="w-full bg-gray-100 dark:bg-gray-900">
        <div className="py-10 px-5 container mx-auto flex flex-wrap justify-evenly "  >
        <Destinations />
        <Destinations />
        </div>
    </div>

    </>


  )
}