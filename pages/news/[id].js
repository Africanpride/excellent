import React from 'react'
import Heading from '../components/Heading';


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(post => {
      return {
        params: { id: post.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (paths) => {
    const id = paths.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` );
    const post = await res.json();
  
    return {
      props: { post: post }
    }
  }
  
  const Details = ({ post }) => {
    const subtitle = 'Discover fascinating information about culture, identity, food, history, heritage, archaeology, nature, and environmental sustainability, as well as thrilling global events, opulent travel specials, and safety advice. '

    return (
      <>
        <Heading title={'Travel News'} subtitle={subtitle} imageSrc={'/static/airplane.jpg'}  />  
        <h1>{ post.title }</h1>
        <p>{ post.body }</p>

      </>
    );
  }
  
  export default Details;