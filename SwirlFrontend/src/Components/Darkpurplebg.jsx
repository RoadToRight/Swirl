import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Darkpurplebg = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

 

  return (
    <DarkPurplediv>
      <div className=" ">
        <div className="img ">
          <img
            src="/Project IMG/darkpurple2.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="">
        <div className="text textttD">
          <div className="big text-white font-bold leading-[55px]]">
            Top-tier animation that stands out from the rest
          </div>
          <div className="font-normal leading-[25px] text-white small">
            Effectively convey technical concepts and bridge the gap with your
            audience. Our team will manage the entire process for you, ensuring
            a seamless experience from start to finish. We'll begin with the
            initial concept, carefully crafting a storyboard that outlines the
            flow and key points of your message. Next, we'll develop a unique
            style that aligns with your brand and resonates with your audience.
          </div>
        </div>
        <br />
        <div className="buttondiv ">
          <Link to={"/pricing"} onClick={scrollToTop}>
            <Button
              color={"#0D0D0D"}
              text={"Get an estimate"}
              width={"212px"}
              height={"48px"}
              textcolor={"white"}
            />
          </Link>
        </div>
      </div>
    </DarkPurplediv>
  );
};

export default Darkpurplebg;

const DarkPurplediv = styled.div`
  min-height: 662px;
  background-image: url("/Project IMG/darkpurplebg.png");
  background-repeat: no-repeat;
  box-sizing: border-box;

  background-position: center center;
  background-size: cover;

  display: grid;
  grid-template-columns: 45% 38%;
  place-items: center;
  gap: 20px;
  padding: 0px 50px;
  box-sizing: border-box;

  @media (max-width: 1355px) {
    grid-template-columns: 45% 46%;
  }

  @media (max-width: 1060px) {
    grid-template-columns: 50% 46%;
  }

  @media (max-width: 900px) {
    padding: 30px 50px;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 900px) {
      text-align: center; /* Center text on small screens */
    }
    @media (max-width: 500px) {
      width: 90vw;

      margin-left: -28px;
    }
  }

  .big {
    font-size: 3vw; /* Responsive font size */
    /* background-color: red; */
    @media (max-width: 1355px) {
      font-size: 3.4vw;
    }
    @media (max-width: 900px) {
      font-size: 5vw;
    }
    @media (max-width: 500px) {
      font-size: 6vw;
      width: 100%;
    }
    @media (max-width: 468px) {
      font-size: 6.2vw;
      width: 100%;
    }
  }

  .small {
    font-size: 14.5px;
    @media (max-width: 1060px) {
      font-size: 13.5px;
    }
    @media (max-width: 900px) {
      font-size: 12.5px;
    }
    @media (max-width: 500px) {
      font-size: 10.5px;
    }
  }

  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 900px) {
      justify-content: center;
    }
    @media (max-width: 500px) {
      width: 90vw;

      margin-left: -28px;
    }
  }

  .buttondiv {
    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 500px) {
      width: 90vw;

      margin-left: -28px;
    }
  }
`;
