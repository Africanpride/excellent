import react from 'react'
import { Card, Carousel } from 'flowbite-react'
import clip from 'text-clipper'
import Link from 'next/link'

const NewsCard = (props) => {

 
        return (
          <> 
  
          {/* <Link href={`/news/${props.id}`} key={props.id}><div className="mx-auto bg-teal-50 dark:bg-navy-900 text-navy-800 dark:text-white md:rounded-lg shadow-md overflow-hidden md:w-full my-2 p-2 md:my-5"> */}
          <Link href={`${props.url}`}><div className="mx-auto bg-teal-50 dark:bg-navy-900 text-navy-800 dark:text-white md:rounded-lg shadow-md overflow-hidden md:w-full my-2 p-2 md:my-5">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-72 w-full object-cover md:h-full md:w-72 md:rounded-l-lg  "  src={props.imgSrc} alt={props.imgAlt ?? "Man looking at item at a store"} />
              </div>
              <div className="p-8 md:rounded-r-lg flex flex-col items-start justify-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 mb-8" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <p className="text-lg  bold">{ clip(`${props.description ?? 'Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.'}`, 230)}</p>
                    <span className="inline-block h-1 w-16 rounded bg-cyan-300 mt-8 mb-6" />
                    <h2 className=" text-gray-400 dark:text-slate-400 font-extrabold title-font tracking-wider uppercase">{props.author ?? `Mark Twain`}</h2>
                    <p className="text-teal-700 dark:text-teal-200 italic"> {props.source ?? `American writer, humorist, entrepreneur, publisher, and lecturer.`} </p>
              </div>
            </div>
          </div>
          </Link>
  
  
          </>
)
}

export default NewsCard