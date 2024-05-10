import Image from 'next/image'
import React from 'react'

const Card1 = ({data}) => {
  return (
    <div className='border-[1px] border-[#353535] bg-[#030B15] rounded-xl px-4 py-6 flex flex-col gap-5'>
        <h3 className='font-semibold text-2xl'>{data.title}</h3>
        <p className='text-base'>{data.desc}</p>
    </div>
  )
}

export default Card1