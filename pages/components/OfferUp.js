/* eslint-disable @next/next/no-img-element */
// next js arrow function:
import react from 'react'
import Image from 'next/image'
import biker from '../../public/assets/biker.png'

const serviceTextPlaceholder = "Detail is not an obsession, it is the very essence of perfection.";

const OfferUp = ({serviceAmount = '$499',serviceImage, serviceIntro  = 'Service Name', serviceText }) => {
return (
<>


    <div className="overflow-hidden shadow-lg rounded-2xl w-64 p-4 bg-white relative ">

        <div className="w-4/6 relative">
            <p className="text-gray-800 text-lg font-medium mb-2 ">
           {serviceIntro}
            </p>
            <p className="text-gray-400 text-xs">
            {serviceText ?? serviceTextPlaceholder}
            </p>
            <p className="text-indigo-500 text-xl font-medium ">
            {serviceAmount}
            </p>
        </div>
        <div className="absolute" style={{ right:'-88px', top: '-24px', width: '71%' }} >
            <Image 
                src={biker}
                layout='intrinsic'
                width={200}
                height={200}
                alt="moto"
                />
        </div>

    </div>
</>

)
}

export default OfferUp
