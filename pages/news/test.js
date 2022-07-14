
import React from 'react'

const test = props => {
  return (
    <div>future data aggregator</div>
  )
}

export default test

//Cookies are small files that are stored on your browser. We use cookies and similar technologies to ensure our website works properly.
// import React from 'react'
// import Heading from '../components/Heading';
// import NewsCard from '../components/NewsCard';
// import Link from 'next/link';

// export async function getStaticPaths() {


//     const res = await fetch(`https://newsapi.org/v2/everything?q=travel&apiKey=d22f185d192547418b8aaf99068fb09b`)
//     const data = await res.json()

   
//     const paths = data.map(post => {
//       return {
//         params: { id: post.id.toString() }
//       }
//     })
  
//     return { 
//         paths,
//         fallback: false
//     }

//   }


// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`https://newsapi.org/v2/everything?q=travel&id=${id}&apiKey=d22f185d192547418b8aaf99068fb09b`)
//     const data = await res.json()

//     return { 
//       props:{ post: data }
//     }


// }


// const index = ({post}) => {



// const subtitle = 'Discover fascinating information about culture, identity, food, history, heritage, archaeology, nature, and environmental sustainability'

//   return (
//     <>
//     <Heading title={'Travel News'} subtitle={subtitle} imageSrc={'/images/cards/holiday5.jpg'}  /> 
    
//     <div className='container md:px-10 mx-auto flex flex-wrap justify-evenly m-2  cursor-pointer '  >
//     <h1>{post.title}</h1>
//     </div>
//     </>
//   )
// }

// export default index