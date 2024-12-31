import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeDiv>
      <div className="video-div">
        <video muted loop autoplay="autoplay">
          <source src="/SOHAIB SHOWREEL_4.mp4" type="video/mp4"></source>
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
