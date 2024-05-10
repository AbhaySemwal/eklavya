import Image from 'next/image'
import React from 'react'

const Impl = () => {
  return (
    <div className='flex flex-col gap-5 items-center py-10 w-5/6 mx-auto'>
        <h1 className='text-5xl font-semibold'>Implementation Strategy</h1>
        <p>Create a laser turret using Arduino, two servo motors, and a joystick.
        Similar to a previous laser pointer project.</p>
        <div className='flex gap-5'>
            <div className='p-5 items-center w-4/6 border-gray-500 border-[1px] flex flex-col gap-5'>
                <h3 className='text-center'>Horizontal movement is controlled by the base servo.
                Vertical movement controlled by the second servo with a laser pointer.</h3>
                <h1 className='font-semibold text-2xl'>SERVO MECHANISM</h1>
            </div>
            <div className='p-5 items-center w-4/6 border-gray-500 border-[1px] flex flex-col gap-5'>
                <h3 className='text-center'>Two-axis joystick with an in-built pushbutton.
                SW pin: Provides pushbutton status (used for laser on/off).
                VRx and VRy: X and Y coordinates from the joystick.
                Other pins for supply and ground.</h3>
                <h1 className='font-semibold text-2xl'>JOYSTICK FEATURE</h1>
            </div>
            <div className='p-5 items-center w-4/6 border-gray-500 border-[1px] flex flex-col gap-5'>
                <h3 className='text-center'>Using a separate power supply for the servos (not Arduino’s 5V).
                Servos were unresponsive when powered directly from Arduino. Therefore External 5V supply from an adapter is recommended.</h3>
                <h1 className='font-semibold text-2xl'>POWER SUPPLY</h1>
            </div>
        </div>
    </div>
  )
}

export default Impl