import React from 'react'

const LoadMore = ( {handleClick}) => {
  return (
 
        <button onClick={handleClick} className={'bg-indigo-500 dark:bg-indigo-300 text-white font-bold rounded-md py-2 px-6 mt-3 ml-48 mb-10 lg:ml-[700px] lg:mb-10 md:ml-96 md:mt-4 '}>
            Load More</button>
   
  )
}

export default LoadMore