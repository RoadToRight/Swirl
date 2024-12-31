import React, { useState } from 'react'
import Loader from './Loader'
import { toast } from 'react-toastify'

const Img = () => {
    const [Loading, setLoading] = useState(true)

  const chalo = () => {
    toast(`Some Error Occured Kindly Please Try Later!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
      
  }

  return (
    <div>
        {/* {Loading && <Loader/>}
        <video poster='/Project IMG/about1.png' onLoad={() => setLoading(false)}></video> */}
        <button onClick={chalo}>clickme</button>
    </div>
  )
}

export default Img