import React from 'react'
import SmallCard from './components/SmallCard'

const test = () => {
  return (
    <>
    <div className="w-full bg-gray-200 dark:bg-navy-900">
    <div className="py-5 px-5 container mx-auto flex flex-wrap justify-evenly "  >
    <SmallCard />
    <SmallCard />
    <SmallCard />
    <SmallCard />
    </div>
    </div>
    </>
  )
}

export default test