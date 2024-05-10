"use client"
import React, { useState } from 'react';

const Topbar = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div style={{backgroundImage: "url('/laser.jpg')"}} className='bg-cover'>
        <div className='mx-auto w-5/6 py-16'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-16 w-5/12 px-8'>
              <div className='flex flex-col gap-2 py-10'>
                <h1 className='font-semibold text-6xl leading-normal'>Eklavya: The Silent Killer</h1>
                <p className='text-sm'>Achieving precise security while minimizing environmental impact.</p>
              </div>
              <div className='flex gap-5'>
                <button className='p-2.5 border-2 bg-blue-500 text-white'>Get Started</button>
                {/* Button to open the modal */}
                <button className='p-2.5 border-2' onClick={toggleModal}>Watch Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#2b213b] p-8 rounded-lg">
            {/* Video player */}
            {/* <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=Evut8BfrZ2U&" // Replace with your video URL
              title="Demo Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe> */}
            <iframe width="815" height="567" src="https://www.youtube.com/embed/Evut8BfrZ2U" title="Eminem - Doomsday 2 (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="mt-4 p-2.5 border-2 border-white text-white" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;
