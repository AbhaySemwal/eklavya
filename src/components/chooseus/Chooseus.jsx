import React from 'react'
import Card1 from '../card1/Card1'

const data=[
    {
        id:0,
        title:"Safe and Secure",
        desc:"Veniam aliqua dolore aliquip eiusmod sit mollit commodo ipsum ea. Aliqua proident fugiat cupidatat aliquip ex magna labore qui fugiat magna cillum nulla reprehenderit."
    },
    {
        id:1,
        title:"Safe and Secure",
        desc:"Veniam aliqua dolore aliquip eiusmod sit mollit commodo ipsum ea. Aliqua proident fugiat cupidatat aliquip ex magna labore qui fugiat magna cillum nulla reprehenderit."
    },
    {
        id:2,
        title:"Safe and Secure",
        desc:"Veniam aliqua dolore aliquip eiusmod sit mollit commodo ipsum ea. Aliqua proident fugiat cupidatat aliquip ex magna labore qui fugiat magna cillum nulla reprehenderit."
    },
];
const Chooseus = () => {
  return (
    <div className='flex flex-col gap-5 py-5'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold'>Safe, Guaranteed, and easy to use</h1>
            <p>Labore ullamco exercitation proident deserunt deserunt laboris.</p>
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