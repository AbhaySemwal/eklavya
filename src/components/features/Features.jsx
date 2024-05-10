import React from 'react'
import Card2 from '../card2/Card2';
const data=[
    {
        id:0,
        title:"Traditional Security Measures",
        desc:"Unlike traditional security measures relying solely on passive surveillance, our laser-based system offers an active deterrent, reducing the likelihood of intrusions."
    },
    {
        id:1,
        title:"Motion-Activated Alarms",
        desc:"While motion-activated alarms provide detection, they often rely on passive deterrents like sirens. Our solution offers a more direct and immediate response with the use of lasers."
    },
    {
        id:2,
        title:"Guard Patrols",
        desc:"Guard patrols are subject to human error and can have limitations in coverage and response time. Our system provides continuous monitoring and rapid response capabilities, enhancing overall security effectiveness."
    },
    {
        id:3,
        title:"Sustainability",
        desc:"Compared to traditional systems, our laser turret provides a greener, more sustainable alternative, reducing reliance on fossil fuels and grid-based power. It maintains high security levels while being modular and scalable for diverse needs."
    },
];
const Features = () => {
  return (
    <div className='w-5/6 flex flex-col items-center justify-center gap-10 mx-auto py-32'>
        <div className='flex flex-col items-center gap-3'>
            {/* <h3 className='text-lg text-blue-400'>Our Features</h3> */}
            <h5 className='text-4xl font-semibold'>Comparison with Existing Solutions</h5>
            {/* <p className='text-sm w-3/6 text-center'>Laboris et aliquip laboris proident aliquip eu eu voluptate aute. Minim esse culpa anim cupidatat deserunt consectetur.</p> */}
        </div>
        <div className='grid grid-cols-2 gap-5'>
            {
              data.map((d)=>(
                <Card2 key={d.id} data={d}/>
              ))
            }
        </div>
    </div>
  )
}

export default Features