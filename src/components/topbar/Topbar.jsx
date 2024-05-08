import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <div>
        <div style={{backgroundImage:"url(" + "/laser.jpg" + ")"}} className='bg-cover'>
            <div  className='mx-auto w-5/6 py-16'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-16 w-5/12 px-8'>
                        <div className='flex flex-col gap-2 py-10'>
                            <h1 className='font-semibold text-6xl leading-normal'>Eklavya: The Silent Killer</h1>
                            <p className='text-sm'>Velit dolor ullamco non enim dolor velit occaecat. Nostrud laborum esse pariatur et non cillum aliqua.</p>
                        </div>
                        <div className='flex gap-5'>
                            <button className='p-2.5 border-2 bg-blue-500 text-white'>Get Started</button>
                            <button className='p-2.5 border-2'>Watch Tutorials</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar