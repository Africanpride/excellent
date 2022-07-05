import React from 'react'

const TourCardIntro = () => {
  return (

    <>   
            <div className="container mx-auto py-2 ">
            <div className="relative  mx-auto px-4 sm:px-6 lg:px-4 ">
        <div className="pricing-box max-w-lg mx-auto rounded-lg shadow overflow-hidden lg:max-w-none">

            <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">

    <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
                Frequently Asked Questions

                </h4>
                <div className="flex-1 border-t-2 border-gray-200">
                </div>
    </div>
    <div className="my-10">

    <div className="space-y-4">
  <details className="p-6 rounded-lg bg-blue-100 dark:bg-slate-900 group" open>
    <summary className="flex items-center justify-between cursor-pointer">
      <h5 className="font-medium text-gray-900 dark:text-white">
      Does this tour include meals?
      </h5>
      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    </summary>
    <p className="mt-4 leading-relaxed text-gray-900 dark:text-white">
    Yes, it does! The meals offered on this tour are 13 breakfasts, 2 lunches and 5 dinners. With the meals that are not included in the tour price, your tour guide may be able to assist you in locating specific restaurants. Because this is a tour of <span className=' text-blue-600 text-bold'>Togo &amp; Ghana</span>, the meals are likely to be cuisine from the particular destination you are in at the time. Dietary requests can be added for the included meals.
    </p>
  </details>
  <details className="p-6 rounded-lg bg-blue-100 dark:bg-slate-900 group">
    <summary className="flex items-center justify-between cursor-pointer">
      <h5 className="font-medium text-gray-900 dark:text-white">
      What is the group size?
      </h5>
      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    </summary>
    <p className="mt-4 leading-relaxed text-gray-900 dark:text-white">
    Depending on when you would like to go, the group size on this tour can include up to a maximum of 51 people.
    </p>
  </details>
</div>



</div>

    </div>
    </div>
    </div>
    </div>
    </>
    



  )
}

export default TourCardIntro