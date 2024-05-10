import React from 'react'

const Card3 = ({data}) => {
  return (
    <div className='border-[1px] border-blue-400 flex flex-col gap-5 p-4'>
      <div className='flex gap-1'>
        <h3 className='font-semibold'>Name: </h3>
        <h5>{data.name}</h5>
      </div>
      <div className='flex gap-1'>
        <h3 className='font-semibold'>Role: </h3>
        <h5>{data.role}</h5>
      </div>
      <div className='flex gap-1'>
        <h3 className='font-semibold'>Contact: </h3>
        <h5>{data.contact}</h5>
      </div>
      <div className='flex gap-1'>
        <h3 className='font-semibold'>Email: </h3>
        <h5>{data.email}</h5>
      </div>
    </div>
  )
}

export default Card3