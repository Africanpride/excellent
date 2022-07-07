import React from 'react'

const packageDetails = { packageName: 'Single Occupancy', packagePrice: '2,799' };


const TourPackageWithPrice = ({packageName,packagePrice}) => {
  return (
    <>
    
  <div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6">
    <div className="flex items-start w-full justify-between">
      <p className="flex-grow w-full text-2xl text-gray-700">
        <span className="text-gray-400 font-light text-md">
          $
        </span>
        {packagePrice}
      </p>
      <span className="px-3 py-1 flex-none text-sm rounded-full text-blue-500 border border-blue-500">
        { packageName}
      </span>
    </div>
  </div>
    </>
  )
}

export default TourPackageWithPrice