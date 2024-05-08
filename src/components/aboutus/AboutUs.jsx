import React from 'react'
import Image from 'next/image'
import Navbar from '../navbar/Navbar'
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div  className="text-white flex items-center mx-auto w-5/6 p-10">
      <div>
        <Image height={1000} width={1000} src={'/lazer1.png'}></Image>
      </div>
      <div className='m-8 flex flex-col gap-4'>
      <div>
        <h2 className='font-semibold text-6xl leading-normal'>Eklavya : The Silent Killer</h2>
        <h1 className="text-[#00C4F4] text-2xl">About Us</h1>
        <h4 className='text-m'>At Eklavya, we're passionate about laser turret technology and its applications. Our mission is to provide you with comprehensive information, resources, and products to explore and understand the fascinating world of laser turrets.</h4>
      </div>
      <div>
      <h1 className="text-[#00C4F4] text-2xl">Our Vision</h1>
        <h4>Our vision is to revolutionize the way laser turret technology is understood and utilized. We strive to empower enthusiasts, hobbyists, professionals, and curious minds alike to unleash the full potential of laser turret technology in various fields.</h4>
      </div>
       <div>
        <h1 className="text-[#00C4F4] text-2xl">Who We Are</h1>
          <h4 className='text-m'>Eklavya is founded by a team of passionate engineers, researchers, and enthusiasts with a shared love for lasers and turrets. With years of experience in laser technology, robotics, and engineering, we're dedicated to sharing our expertise and knowledge with you</h4>
       </div>
      </div>
    </div>
    </>
    
  )
}

export default AboutUs
