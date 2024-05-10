import Image from 'next/image'
import React from 'react'

const Solution = () => {
  return (
    <div className='w-10/12 mx-auto flex gap-6 items-center py-10'>
        <div className='w-9/12 flex flex-col gap-3'>
            <h4 className='text-lg text-blue-400'>Our Solution</h4>
            <h2 className='text-4xl font-semibold'>How do we stand out?</h2>
            <p>In response to the multifaceted challenges posed by modern security needs and environmental sustainability, our innovative solution emerges. We propose the implementation of a cutting-edge laser-based security system meticulously controlled by a joystick interface. This advanced system epitomizes a proactive stance toward security, empowered by its ability to swiftly detect intrusions and execute deterrent actions in real-time. </p>
        </div>
        <div className='w-5/12 p-3 border-[1px] border-gray-400'>
            <Image className='h-[250px] w-full' height={1000} width={1000} src={"/laser.jpg"}></Image>
        </div>
    </div>
  )
}

export default Solution