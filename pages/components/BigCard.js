// next js component with tailwind css:
 import React from 'react'
import Image from 'next/image'
import biker from '../../public/assets/biker.png'

   let myDate = new Date();
    
    const BigCard = (
      {
        packageImage = 'https://mdbootstrap.com/img/new/ecommerce/vertical/126.jpg', 
        gallery=[],
        heading, 
        price ='$100.00',
        date = myDate.toLocaleDateString(),
        itinerary=[]
      }) => {

      return (
<>              
<section className='overflow-hidden w-auto flex flex-col md:flex-row  '>

  <div className=' bg-cover w-screen md:w-1/2 '>
      <Image 
        src={packageImage}
        alt="Picture of the author"
        layout='responsive'
        width='100%'
        height='100%'
        objectFit='cover'
      />
  </div>
  <div className='bg-gray-300 w-screen flex justify-center items-center h-screen md:h-auto'>
    <div>
      <h1 className='text-3xl font-bold text-pink-500 '>
        {`Hello, I'm a full-stack developer.`} {price}{" "} {date}
      </h1>
    </div>
  </div>

</section>
</>
)

}
export default BigCard