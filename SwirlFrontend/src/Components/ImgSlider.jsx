import { useGSAP } from "@gsap/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import Context1 from "../Context/Context1";
import { Link } from "react-router-dom";
let images1 = [
  "/Project IMG/img1(2).png",
  "/Project IMG/img1(2).png",
  "/Project IMG/img1(2).png",
  "/Project IMG/img1(2).png",
  "/Project IMG/img1(2).png",
  "/Project IMG/img1(2).png",

];
let images1Url = [
  
  "https://www.youtube.com/embed/rpQFuuoAxTc?si=nQ9Zd6BEtJ1b7P7Y",
"https://www.youtube.com/embed/8yo54j7DLp0?si=wvMHk7NKOXJhWqB-",
"https://www.youtube.com/embed/naWQJpsbPFM?si=ivOW_Z_-yPSAGJDL",
  
]
let images2 = [
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
  "/Project IMG/img1(1).png",
];
let images2Url = [
  
  "https://www.youtube.com/embed/rpQFuuoAxTc?si=nQ9Zd6BEtJ1b7P7Y",
"https://www.youtube.com/embed/8yo54j7DLp0?si=wvMHk7NKOXJhWqB-",
"https://www.youtube.com/embed/naWQJpsbPFM?si=ivOW_Z_-yPSAGJDL",
  
]
let images3 = [
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
  "/Project IMG/img1(3).png",
 
];
let images3Url = [
  "https://www.youtube.com/embed/rpQFuuoAxTc?si=nQ9Zd6BEtJ1b7P7Y",
"https://www.youtube.com/embed/8yo54j7DLp0?si=wvMHk7NKOXJhWqB-",
"https://www.youtube.com/embed/naWQJpsbPFM?si=ivOW_Z_-yPSAGJDL",
  
]



const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SmallImg = useRef();
  const SmallImg2 = useRef();
  const [Small2, setSmall2] = useState(false);
  const {PlayYouTubeCard,setYoutubeUrl,ProjectSlider} = useContext(Context1)

  // Set up the interval to update the image every 3 seconds (3000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length); // Loop back to the first image after the last
    }, 3000); // Change image every 3 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  console.log(Small2);

  useGSAP(() => {
    gsap.fromTo(
      SmallImg.current,
      {
        x: 0, // Starting position (right side)
      },
      {
        x: -1000, // Ending position (left side)
        delay: 1,
        duration: 28,
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Reverse the animation after each cycle
      }
    );

    gsap.fromTo(
      SmallImg2.current,
      {
        x: -1500, // Starting position (left side)
      },
      {
        x: 0, // Ending position (right side)
        delay: 1,
        duration: Small2 ? 0 : 35,
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Reverse the animation after each cycle
        ease: "linear",
      }
    );
  });

const YoutubeUrlSetterLarge = (index) =>{
  images1Url.forEach((x,i) => {
    if(index === i){
      setYoutubeUrl(x)
    }
 
  })

}
const YoutubeUrlSetterSmall1 = (index) =>{
  images2Url.forEach((x,i) => {
    if(index === i){
      setYoutubeUrl(x)
    }
 
  })

}
const YoutubeUrlSetterSmall2 = (index) =>{
  images3Url.forEach((x,i) => {
    if(index === i){
      setYoutubeUrl(x)
    }
 
  })

}
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

  return (
    <SliderDiv ref={ProjectSlider}>
      
      <div className="text mt-16 container">
        <div className="big  text-white font-bold leading-[55px] text-center text-[46px]">
          Powerful videos crafted through a tried-and-true creative production
          process
        </div>
        <br />
        <div className="small1 font-light text-white text-center text-[14px]">
          Creating great content repeatedly can be challenging and
          time-consuming. With swirl365, you get a team of creative strategists
          and video professionals who have perfected their craft through
          hundreds of projects. We'll be your comprehensive creative partner,
          managing everything from start to finish.
        </div>
      </div>
      <br />
      <br />
      <div className="sec1-parent flex gap-4 w-full overflow-hidden relative">
        {/* Add the images with smooth transition */}
        <div
          className="flex transition-all duration-[1500ms] ease-in-out gap-4 cursor-pointer"
          style={{ transform: `translateX(-${currentIndex * 30}vw)` }}
        >
          {images1.map((image, index) => (
           
            <div className="relative flex-shrink-0 imgL-parent rounded-3xl">
              { 
              console.log(...images1Url)}
              <FaPlay className={`play  text-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer flex-shrink-0`} onClick={() =>{ PlayYouTubeCard(); YoutubeUrlSetterLarge(index)}} />
            <img
              key={index}
              src={image}
              className="img1 bg-red-800 w-[55vw] h-[475px] object-cover object-cover flex-shrink-0 rounded-3xl"
              alt={`image-${index}`}
            />
            </div>
            
          ))}


        </div>
      </div>
      <br />
      <div
        ref={SmallImg2}
        className="sec2-parent  flex gap-4 w-full relative"
        onMouseEnter={() => setSmall2(true)}
        onMouseLeave={() => setSmall2(false)}
      >
        {images2.map((x,index) => {
          return (
            <div className="relative flex-shrink-0 img2-parent rounded-lg">
            <FaPlay className={`play  text-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer flex-shrink-0`}  onClick={() =>{ PlayYouTubeCard(); YoutubeUrlSetterSmall1(index)}} />
            <img src={x} className="img2 bg-red-800 w-[500px] h-[240px] object-cover flex-shrink-0 rounded-lg" />
            </div>
          );
        })}
      </div>
      <br />

      <div className="sec3-parent flex gap-4 w-full relative" ref={SmallImg}>
        {images3.map((x, index) => {
          return (
            <div className="relative flex-shrink-0 img2-parent rounded-lg">
            <FaPlay className={`play  text-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer flex-shrink-0`} onClick={() =>{ PlayYouTubeCard(); YoutubeUrlSetterSmall2(index)}} />
            <img src={x} className="img2 bg-red-800 w-[500px] h-[240px] object-cover flex-shrink-0 rounded-lg" />
            </div>
          );
        })}
      </div>

      <div className="bottom container flex items-center flex-col justify-center mt-12 px-4">
        <div className="button">
          <Link to={"/creations/All"} onClick={scrollToTop}>
          <Button
            text={"See Portfolio"}
            color={"#C707E4"}
            width={"169px"}
            height={"52px"}
            textcolor={"white"}
          />
          </Link>
        </div>
        <div className="text-bott text-white text-center  w-[450px] my-4 ">
          Discover a world of creativity in our videos, designs, and
          illustrations. Find the perfect spark for your next project!
        </div>
      </div>
    </SliderDiv>
  );
};

export default ImgSlider;

const SliderDiv = styled.div`
  background-image: url("/Project IMG/Sliderbg.png");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;

  .img1 {
    transition: all 300ms ease-in-out;
    @media (max-width: 1200px) {
      width: 70vw;
    }
    @media (max-width: 900px) {
      width: 90vw;
    }
    @media (max-width: 800px) {
      width: 100vw;
    }
    @media (max-width: 510px) {
      width: 100vw;
      height: auto;
    }
  }

  .img2 {
    cursor: pointer;
    transition: all 300ms ease-in-out;
    @media (max-width: 600px) {
      height: auto;
      width: 70vw;
    }
  }
  .play{
  opacity: 0;
  transition: all 300ms ease-in-out;
  color:white;
}
.play:hover{
color: #c813e498;

}
.imgL-parent {
  transition: all 300ms ease-in-out;
}
.imgL-parent:hover{
  scale: 1.01;
    box-shadow: 3px 4px 12px 1px rgba(199,19,228,1);

    .img1{
      opacity: 0.8;
      
    }
    .play{
  opacity: 1;
}
}
.img2-parent{
  transition: all 300ms ease-in-out;
}
  .img2-parent:hover{
    scale: 1.05;
    box-shadow: 3px 4px 12px 1px rgba(199,19,228,1);
 
    .img2{
      opacity: 0.8;
      
    }
    .play{
  opacity: 1;
}
  }
  .img3 {
    @media (max-width: 600px) {
      height: auto;
      width: 50vw;
    }
  }

  .big {
    @media (max-width: 1010px) {
      font-size: 36px;
    }
    @media (max-width: 767px) {
      font-size: 28px;
    }
    @media (max-width: 553px) {
      font-size: 24px;
      font-weight: 1000;
      line-height: 30px;
    }
    @media (max-width: 360px) {
      font-size: 21px;
      font-weight: 900;
    }
  }
  .small1 {
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  .text-bott {
    @media (max-width: 450px) {
      font-size: 3.5vw;
    }
    @media (max-width: 395px) {
      font-size: 14px;
      width: 100vw;
      padding: 0px 10px;
    }
  }
`;
