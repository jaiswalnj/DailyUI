import React from 'react'

const Card = ({color,height,title}) => {
  return (
    <div className={`mt-${height} mx-2 w-32 h-44 pt-3 rounded-2xl shadow-xl ${color}`}>
      <div className='flex justify-end'>
      <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' viewBox="0 0 256 256" id="dots-three-vertical"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="12"></circle><circle cx="128" cy="64" r="12"></circle><circle cx="128" cy="192" r="12"></circle></svg>
      </div>
        <h1 className='w-20 mx-4 mt-2 text-indigo-900 font-semibold'>{title}</h1>
        <div className='flex justify-between items-center  mx-4 mt-10'>
        <span className='text-xs font-thin'>5 tests</span>
        <div className='px-1 py-1 w-6 h-6 rounded-md bg-indigo-800'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 fill-white' viewBox='0 0 30 80' id="chevron-small-right"><path d="M30.304 41.712 1.823 10.704a6.3 6.3 0 0 1 0-8.868 6.17 6.17 0 0 1 8.783 0L45.332 37.27a6.31 6.31 0 0 1 0 8.874L10.607 81.577a6.155 6.155 0 0 1-8.783 0 6.3 6.3 0 0 1 0-8.868Z"></path></svg>
        </div>
        </div>
    </div>
  )
}

export default Card