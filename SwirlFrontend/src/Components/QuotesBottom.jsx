import React, { useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import CloudAnimation from "./CloudAnimation";

const QuotesBottom = () => {
  const { DarkLight } = useSelector((state) => state.Custom);
  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor2 = DarkLight ? "white" : "black";
  // useEffect(() => {
  //   // GSAP animation using the global `gsap` from the window object
  //   window.gsap.from(".animation", {
  //     y: 250, // Start from 200px below the element's initial position
  //     opacity: 0, // Start from 0 opacity
  //     duration: 1, // Duration for the animation
  //     ease: "power3.out", // Easing function to smooth the transition
  //     scrollTrigger: {
  //       trigger: ".animation", // The element to trigger the animation
  //       start: "-25% 80%", // Start animation when the top of the element reaches 80% from the top of the viewport
  //       end: "top 30%", // End when the top of the element reaches 30% from the top of the viewport
  //       scrub: 1, // Smoothly scrub the animation based on scroll position
  //       // markers: true,  // Show scroll trigger markers for debugging (you can remove it once you're done debugging)
  //     },
  //   });
  // }, []);

  return (
    <div className={`animation ${DarkLight ? "bg-white" : "bg-black"} `}>
      <br />
      <CloudAnimation className={`left-[45%] absolute `} />
      <br />
      <br />
      <QBottom className={`bg-${bgcolor2}`}>
        <div className="Qdiv">
          <div className="text font-bold text-[36px] leading-[55px] text-center container flex items-center justify-center">
            <div className={`w-[750px] break-words text-${Textcolor}`}>
              Relied upon by global brands whose products you use daily
            </div>
          </div>

          <div className="cards">
            <Cards
              img={
                "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/Compassion_Video_av0lvl.webp"
              }
              title={"Adam Harder"}
              text={"Senior Video Operations Manager"}
              img2={""}
              text2={
                "The ROI we were getting, the cost per acquisition and the ARPU just"
              }
              url={
                "https://www.youtube.com/embed/NVtrZI31G2k?si=nk2DTg7V8FDhpC0t"
              }
            />

            <Cards
              img={
                "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/health_vxkd5x.webp"
              }
              title={"Shonal Narayan"}
              text={"Marketing Manager"}
              img2={""}
              text2={
                "The ROI we were getting, the cost per acquisition and the ARPU just"
              }
              url={
                "https://www.youtube.com/embed/E01MegVNVJo?si=_dzx_-eKs5qN0EMH"
              }
            />

            <Cards
              img={
                "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp"
              }
              title={"Ron Schniedermann"}
              text={"CEO"}
              img2={""}
              text2={
                "The ROI we were getting, the cost per acquisition and the ARPU just"
              }
              url={
                "https://www.youtube.com/embed/HdvVRbJNuYM?si=_KaFDPYj0kA_ZUOL"
              }
            />
          </div>
        </div>
      </QBottom>
    </div>
  );
};

export default QuotesBottom;

const QBottom = styled.div`
  padding: 55px 0px;
  overflow: hidden;
  .Qdiv {
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media (max-width: 725px) {
      gap: 25px;
    }
    .text {
      @media (max-width: 767px) {
        font-size: 30px;
      }
      @media (max-width: 528px) {
        font-size: 26px;
        font-weight: 800;
      }
      @media (max-width: 400px) {
        font-size: 25px;
        font-weight: 800;
      }
    }
    .cards {
      display: grid;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 90px;
      flex-wrap: wrap;
      padding: 10px 30px;
      @media (max-width: 725px) {
        gap: 20px;
      }
    }
  }
`;
