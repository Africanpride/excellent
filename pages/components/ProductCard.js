import React from 'react'
import Image from 'next/image'
import biker from '../../public/assets/biker.png'

const ProductCard = ({productName, productImage, productPrice, productDescription}) => {
    
    return (
        <>
            <div className="overflow-hidden shadow-lg rounded-2xl w-64 p-4 bg-white relative ">
            <div className="w-4/6 relative">
                <p className="text-gray-800 text-lg font-medium mb-2 ">
                {productName}
                </p>
                <p className="text-gray-400 text-xs">
                {productDescription}
                </p>
                <p className="text-indigo-500 text-xl font-medium ">
                {productPrice}
                </p>
            </div>
            <div className="absolute" style={{ right:'-88px', top: '-24px', width: '71%' }} >
                <Image
                    src={productImage}
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

export default ProductCard