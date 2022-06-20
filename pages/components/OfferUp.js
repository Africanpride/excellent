/* eslint-disable @next/next/no-img-element */
// next js arrow function:
import react from 'react'
import Image from 'next/image'
import biker from '../../public/assets/biker.png'



const OfferUp = () => {
return (
<>

<div className='block mt-16 py-16 px-5 container mx-auto'>

    <div className="overflow-hidden shadow-lg rounded-2xl w-64 p-4 bg-white relative ">

        <div className="w-4/6 relative">
            <p className="text-gray-800 text-lg font-medium mb-2 ">
            Avg
            </p>
            <p className="text-gray-400 text-xs">
            Detail is not an obsession, it is the very essence of perfection.
            </p>
            <p className="text-indigo-500 text-xl font-medium ">
            $399
            </p>
        </div>
        <div className="absolute   " style={{ right:'-88px', top: '-24px', width: '71%' }} >
            <Image 
                src={biker}
                layout='intrinsic'
                width={200}
                height={200}
                alt="moto"
                />
        </div>

    </div>
</div>

</>

)
}

export default OfferUp
