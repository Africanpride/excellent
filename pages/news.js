import React from 'react'
import BigCard from './components/BigCard';
import Heading from './components/Heading';
import SmallCard from './components/SmallCard';


export default function News({title = 'News & Articles'}) {

    const subtitle = 'Discover fascinating information about culture, identity, food, history, heritage, archaeology, nature, and environmental sustainability, as well as thrilling global events, opulent travel specials, and safety advice. '
    return (
        <>    
        <Heading title={'Travel News'} subtitle={subtitle} imageSrc={'/images/cards/holiday5.avif'}  />  
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