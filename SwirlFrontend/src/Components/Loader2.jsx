import React from 'react'
import { Helmet } from 'react-helmet';
const Loader2 = () => {
  return (
<div className='bg-blue'>
<div className='h-screen bg-[#000000] text-white font-bold text-[30px] z-[2000] fixed w-screen flex justify-center items-center top-0'>
   <Helmet>
        <link rel="preload" href="/Project IMG/logoanime.webm" as="video" type="video/webm" />
      </Helmet>
      <video autoPlay muted loop  preload="auto">
      <source src="/Project IMG/logoanime.webm" type="video/webm" />
      
      </video>
    
    </div>

</div>
  )
}

export default Loader2;
