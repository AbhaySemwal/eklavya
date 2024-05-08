import Image from 'next/image'
import React from 'react'

const Vision = () => {
  return (
    <div className='w-4/6 mx-auto flex justify-between py-10'>
        <div className='flex flex-col gap-3'>
            <h4 className='text-lg text-blue-400'>Our Vision</h4>
            <h2 className='text-4xl font-semibold'>User from all over the world</h2>
            <p>Magna esse irure minim magna dolore ex labore proident duis esse commodo. Exercitation ea pariatur do elit culpa aliqua irure qui esse duis consectetur minim aute amet.</p>
        </div>
        <div>
            <Image height={1000} width={1000} src={"/laser.jpg"}></Image>
        </div>
    </div>
  )
}

export default Vision