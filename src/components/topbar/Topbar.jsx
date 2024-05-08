import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <div>
        <div className='mx-auto w-4/6'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-semibold text-6xl leading-normal'>Eklavya: The Silent Killer</h1>
                    <p className='text-sm'>Velit dolor ullamco non enim dolor velit occaecat. Nostrud laborum esse pariatur et non cillum aliqua.</p>
                    <div className='flex gap-2'>
                        <button className='p-5 border-2 bg-blue-500 text-white'>Get Started</button>
                        <button className='p-5 border-2'>Watch Tutorials</button>
                    </div>
                </div>
                <div>
                    <Image width={1000} height={1000} src={"/laser.jpg"}></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar