import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Context1 from "../Context/Context1";
import { Link, useLocation } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const ReadyTomakeVideo = () => {
  const { DarkLight } = useContext(Context1);
  let ready = useRef();
  let readyparent = useRef()
  let location = useLocation()
  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "bg-lightpurple" : "bg-[#230646]";
  let bgcolor2 = DarkLight ? "white" : "black";





  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Ready className="ReadyPa" ref={readyparent}>
      <div className={`whitebox bg-white`} ref={ready}>
        <div className="text">
          <div className={`big font-bold text-[26px] leading-[38px] `}>
            Ready to make a video? 🎉
          </div>
          <div className={`smalll font-normal leading-[30px] `}>
            New to swril365? You can try us out before formal engagement.
            Really!
          </div>
        </div>

        <div className="button">
          <Link to={"/contactus"} onClick={scrollToTop}>
            <Button
              text={"Lets’ Talk"}
              color={"#C707E4"}
              width={"122px"}
              height={"38px"}
              textcolor={"white"}
              translateZ={"18px"}
              MinustranslateZ={"-18px"}
            />
          </Link>
        </div>
      </div>
    </Ready>
  );
};

export default ReadyTomakeVideo;

const Ready = styled.div`
  /* margin-top: 100px; */

  height: 220px;
  background-color: #230646;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .whitebox {
    height: 140px;
    width: 800px;
    border-radius: 16px;
    position: absolute;
    margin-top: -200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
    @media (max-width: 830px) {
      flex-direction: column;
      text-align: center;
      width: 90vw;
      height: 160px;
      padding: 15px 0px;
      height: 180px;
      .big {
        font-size: 24px;
      }
    }

    @media (max-width: 440px) {
      height: 200px;
      padding: 20px 0px;
    }
    @media (max-width: 380px) {
      height: 230px;
      padding: 20px 10px;
    }
  }

  .smalll {
    @media (max-width: 830px) {
      font-size: 15px;
      padding: 10px 20px;
    }
    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;
