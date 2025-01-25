import React from 'react'

const Loader2 = () => {
  return (
<div className='bg-blue'>
<div className='h-screen bg-[#000000] text-white font-bold text-[30px] z-[2000] fixed w-screen flex justify-center items-center top-0'>
      <video autoPlay muted loop  preload="auto">
      <source src="/Project IMG/logoanime.webm" type="video/webm" />
      
      </video>
    
    </div>

</div>
  )
}

export default Loader2;
