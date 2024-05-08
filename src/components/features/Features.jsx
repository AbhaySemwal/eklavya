import React from 'react'
import Card2 from '../card2/Card2';
const data=[
    {
        id:0,
        title:"Free trial Account",
        desc:"Veniam aliqua dolore aliquip eiusmod sit mollit commodo ipsum ea. Aliqua proident fugiat cupidatat aliquip ex magna labore qui fugiat magna cillum nulla reprehenderit."
    },
    {
        id:1,
        title:"Free trial Account",
        desc:"Veniam aliqua dolore aliquip eiusmod sit mollit commodo ipsum ea. Aliqua proident fugiat cupidatat aliquip ex magna labore qui fugiat magna cillum nulla reprehenderit."
    },
    {
        id:2,
        title:"Free trial Account",
        desc:"Veniam aliqua dolore aliquip eiusmod sit mollit commodo ipsum ea. Aliqua proident fugiat cupidatat aliquip ex magna labore qui fugiat magna cillum nulla reprehenderit."
    },
    {
        id:3,
        title:"Free trial Account",
        desc:"Veniam aliqua dolore aliquip eiusmod sit mollit commodo ipsum ea. Aliqua proident fugiat cupidatat aliquip ex magna labore qui fugiat magna cillum nulla reprehenderit."
    },
];
const Features = () => {
  return (
    <div className='w-5/6 flex flex-col gap-5 mx-auto py-10'>
        <div className='flex flex-col items-center gap-3'>
            <h3 className='text-lg text-blue-400'>Our Features</h3>
            <h5 className='text-4xl font-semibold'>All you need is here</h5>
            <p className='text-sm w-3/6 text-center'>Laboris et aliquip laboris proident aliquip eu eu voluptate aute. Minim esse culpa anim cupidatat deserunt consectetur.</p>
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