import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen bg-[#000000] text-white font-bold text-[30px] z-[2000] fixed w-screen flex justify-center items-center'>
      <video autoPlay muted loop  preload="auto">
      <source src="/Project IMG/logoanime.webm" type="video/webm" />
      
      </video>
    
    </div>
  )
}

export default Loader;
