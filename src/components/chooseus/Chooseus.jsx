import React from 'react'
import Card1 from '../card1/Card1'

const data=[
    {
        id:0,
        title:"Lazer Detection System",
        desc:"Deploy laser sensors along the boundary to create a virtual perimeter. When an intruder crosses this boundary, the laser detection system triggers an alert"
    },
    {
        id:1,
        title:"Joystick Controlled Laser",
        desc:"A joystick interface helps to precisely control the laser's direction and intensity, offering flexibility in targeting intruders while mitigating collateral damage risks."
    },
    {
        id:2,
        title:"Integration with Survelliance",
        desc:"The system can integrate with existing surveillance cameras to provide visual confirmation of intrusions and improve response coordination.        "
    },
];
const Chooseus = () => {
  return (
    <div id='strategy' className='flex flex-col gap-10 py-10'>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text-4xl font-semibold'>What We Offer?</h1>
        </div>
        <div className='flex mx-auto w-11/12 gap-4'>
            {
                data.map((d)=>(
                    <Card1 key={d.id} data={d}/>
                ))
            }
        </div>
    </div>
  )
}

export default Chooseus