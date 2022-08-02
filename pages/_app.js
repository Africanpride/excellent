import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Layout from './components/layout'
import Script from 'next/script';
import Head from 'next/head';
import * as gtag from '../lib/ga/gtag'
 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";

 import { DefaultSeo } from 'next-seo'
 import SEO from '../next-seo.config'


 // Dark Mode
 import { ThemeProvider } from "next-themes";


 config.autoAddCss = true;


export default function MyApp({ Component, pageProps }) {
  
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  const getLayout = Component.getLayout || ((page) => page)
  
  return (
    <>
    <DefaultSeo {...SEO} />
    <ThemeProvider enableSystem={true} attribute="class">  
    <Layout>
     <Component {...pageProps} />
    </Layout>
    </ThemeProvider>


    <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-FKG8VZG7HL`}
      /> 
     <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FKG8VZG7HL', {
              page_path: window.location.pathname,
            });
          `,
        }} 
      />
      
    </>
  )
}


