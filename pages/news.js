import React from 'react'
import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';


export default function News({title = 'News & Articles'}) {
    return (
        <>      
        <div className="w-full bg-gray-200 dark:bg-navy-900">
        <div className="py-10 px-5 container mx-auto flex flex-wrap justify-evenly "  >
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
 

        </div>
        </div>
        </>       
    );
}