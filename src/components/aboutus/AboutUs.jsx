import React from 'react'
import Image from 'next/image'
import Navbar from '../navbar/Navbar'
import Card3 from '../card3/Card3'
import Footer from '../footer/Footer'

const data=[
  {
    id:0,
    name:"Priyanshu Nautiyal",
    contact:"8923088417",
    email:"priyanshunautiyal023@gmail.com",
    role:"Arduino and web developer",
  },
  {
    id:1,
    name:"Khushi Lingwal",
    contact:"7060349781",
    email:"khushilingwal6@gmail.com",
    role:"Designer and Web Developer",
  },
  {
    id:2,
    name:"Kritesh Purohit",
    contact:"7505753608",
    email:"kriteshpurohit151021@gmail.com",
    role:"opencv and hardware configuration",
  },
]
// {
//   id:0,
//   name:"Priyanshu Nautiyal",
//   contact:"8923088417",
//   email:"priyanshunautiyal023@gmail.com",
//   role:"Designer and Arduino Programmer",
// },
// {
//   id:1,
//   name:"Prachi Bhatt",
//   contact:"9350348377",
//   email:"bprachi443@gmail.com",
//   role:"Designer and Web Developer",
// },
// {
//   id:2,
//   name:"Nitin Negi",
//   contact:"9761113757",
//   email:"gammaactive576@gmail.com",
//   role:"Arduino Programmer and Specialist",
// },
// {
//   id:3,
//   name:"Abhay Semwal",
//   contact:"6396430288",
//   email:"shbhtsemwal@gmail.com",
//   role:"Arduino Programmer and Web Developer",
// },

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div  className="text-white flex items-center mx-auto w-5/6 p-10">
      <div>
        <Image height={1000} width={1000} src={'/lazer1.png'}></Image>
      </div>
      <div className='m-11 flex flex-col gap-4'>
      <div>
        <h2 className='font-semibold text-5xl leading-normal'>Eklavya : The Silent Killer</h2>
        <h1 className="text-[#00C4F4] text-2xl">About Us</h1>
        <h4 className='text-m'>At Eklavya, we&apos;re passionate about laser turret technology and its applications. Our mission is to provide you with comprehensive information, resources, and products to explore and understand the fascinating world of laser turrets.</h4>
      </div>
      <div>
      <h1 className="text-[#00C4F4] text-2xl">Our Vision</h1>
        <h4>Our vision is to revolutionize the way laser turret technology is understood and utilized. We strive to empower enthusiasts, hobbyists, professionals, and curious minds alike to unleash the full potential of laser turret technology in various fields.</h4>
      </div>
       <div>
        <h1 className="text-[#00C4F4] text-2xl">Who We Are</h1>
          <h4 className='text-m'>Eklavya is founded by a team of passionate engineers, researchers, and enthusiasts with a shared love for lasers and turrets. With years of experience in laser technology, robotics, and engineering, we&apos;re dedicated to sharing our expertise and knowledge with you</h4>
       </div>
      </div>
    </div>
    <div className='w-11/12 mx-auto flex flex-col items-center gap-8 text-white py-5'>
      <h2 className='text-5xl font-semibold text-center'>Team Members</h2>
      <div className='grid grid-cols-3 gap-5'>
        {
          data.map((d)=>(
            <Card3 key={d.id} data={d}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default AboutUs
