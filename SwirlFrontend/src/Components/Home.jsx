import React from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";

const Home = () => {

  return (
    <HomeDiv>
<Helmet>
  <title>Swirl365 | Home</title>

  <meta 
    name="description" 
    content="Bring your ideas to life with expert animation and motion graphics. Swirl365 creates engaging 2D & 3D animations, explainer videos, and motion graphics that captivate and inspire. Let’s turn your vision into reality!" 
  />

  <meta 
    property="og:title" 
    content="Swirl365 | Professional Animation & Motion Graphics" 
  />
  <meta 
    property="og:description" 
    content="Looking for top-tier animation services? Swirl365 specializes in 2D animation, motion graphics, whiteboard videos, and more. Elevate your brand with stunning visuals and engaging storytelling!" 
  />

  <meta property="og:type" content="website" />
</Helmet>

      <div className="video-div">
       
        <video
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          width="100%" // Adjust this based on your layout
          height="auto"
          poster="https://res.cloudinary.com/diyha1kd9/image/upload/v1741374063/donkey_v5kqkv.webp"
        >
          <source
            src="https://res.cloudinary.com/diyha1kd9/video/upload/v1741212763/Swirl_Starting_Video_1_gyku2k.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/diyha1kd9/video/upload/v1741212763/Swirl_Starting_Video_1_gyku2k.webm"
            type="video/webm"
          />
          Sorry, your browser doesn't support embedded videos.
        </video>
 

        <div className="background"></div>
        <div className="text z-1 absolute flex justify-center items-center w-full h-full">
          {/* <div className="hr"></div> */}
          <div className="sec">
            <div className="sec-1 font-bold text-[54px] text-center leading-[70px] text-white"></div>
            <div className="sec-2 font-bold text-[54px] text-center leading-[70px] text-white"></div>
          </div>
          {/* <div className="hr"></div> */}
        </div>
      </div>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`

min-height: 100vh;

.video-div {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
 
 .video-div video {
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100vw;
    min-height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  z-index: -1;
  object-fit: cover;
} 

.background{
    position: absolute;
    top: 0px;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0.6;

}
.hr{
  width: 200px;
  height:2px;
  background-color: white;
  @media (max-width:992px) {
      width: 100px;
  }
  @media (max-width:680px) {
      width: 80px;
      height: 4px;
      margin-top: -80px;
  }
  @media (max-width:538px) {
      width: 60px;
      height: 4px;
      margin-top: -120px;
    
  }
}

.sec-1{
  @media (max-width:680px) {
      font-size: 40px;
      margin-top: -80px;
  }
  @media (max-width:538px) {
    font-size: 30px;
    font-weight: 1000;
    margin-top: -120px;
  }
}
.sec-2{
  @media (max-width:680px) {
      font-size: 40px;
  }
  @media (max-width:538px) {
    font-size: 30px;
    font-weight: 1000;
  }
} 
`;
