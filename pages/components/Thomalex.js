import React from 'react'
import Script from 'next/script'

// style the component with tailwindcss and styled-components to make it look like a component
export default function Thomalex() {
  return (
  <>

    <div className=' p-10'>
      <Script
              async
              type="text/javascript"
              id="thomalex-widget"
              data-type="dotdash-tool"
              data-vertical=""
              src="https://exceltravel.resvoyage.com/scripts/thomalex-integration.js"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: 
                `

                `,
              }}
        />

        <div 
        className='' 
        dangerouslySetInnerHTML={{ __html: 
        
        `
        <div class="w-full pt-5 mt-5 " style="margin-top: 20px; max-heigh: 700px; display: flex; justify-content: center; max-width:100%; margin: auto;">

        <iframe 
        width="100%" 
        height="600px" 
        border="none"
        max-height="auto"
        src="https://exceltravel.resvoyage.com/widget/index?widgetId=f869c080-41a0-4c25-a7ce-f464f9e2bf64">
        </iframe>
        </div>

        `      
        }} 
        />    
    </div>
  </>

  )
}
