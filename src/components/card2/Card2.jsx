import React from 'react'

const Card2 = ({data}) => {
  return (
    <div className='flex flex-col bg-[#081627] items-center border-[#00ADD8] border-4 gap-6 p-5 rounded-lg text-center'>
       <h1 className='font-semibold text-2xl'>{data.title}</h1>
       <p className='text-sm'>{data.desc}</p>
    </div>
  )
}

export default Card2