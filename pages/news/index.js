import React from 'react'
import BigCard from '../components/BigCard';
import Heading from '../components/Heading';
import SmallCard from '../components/SmallCard';
import NewsCard from '../components/NewsCard';
import Link from 'next/link';

export const getStaticProps = async () => {
  // Fetch data from external API
    // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d22f185d192547418b8aaf99068fb09b`)
    const res = await fetch(`https://newsapi.org/v2/everything?q=travel&pageSize=20&apiKey=d22f185d192547418b8aaf99068fb09b`)
    const data = await res.json()
    return { props:{ posts: data }}
}


const NewsItems = ({posts}) => {

const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}
const cards = posts.articles.map(post => {
    // return only post with image and description and title.
    if ((post.id !== null) && (post.urlToImage !== null) && (post.description !== null) && (post.title !== null)) {      
      return <NewsCard key={generateKey} title={post.title} description={post.description} imgSrc={post.urlToImage} author={post.author} source={post.source.name} url={post.url} />
    }
  }
)

const subtitle = 'Discover fascinating information about culture, identity, food, history, heritage, archaeology, nature, and environmental sustainability'

  return (
    <>
    <Heading title={'Travel News'} subtitle={subtitle} imageSrc={'/images/cards/holiday5.jpg'}  /> 
    
    <div className='container md:px-10 mx-auto flex flex-wrap justify-evenly m-2  cursor-pointer '  >
    {cards}
    </div>
    </>
  )
}

export default NewsItems