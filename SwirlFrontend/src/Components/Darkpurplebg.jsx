import React, { } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { scrollToTop } from "../Functions";

const Darkpurplebg = () => {
  return (
    <DarkPurplediv>
      <div className=" ">
        <div className="img ">
          <LazyLoadImage
            src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214501/darkpurple2_1_rjlttr.webp"
            alt=""
            className="img-fluid"
            effect="blur"
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
          <Link to={"/pricing"} onClick={scrollToTop} aria-label="Get an estimate">
          <span className="d-none">Get an estimate</span>
            <Button
              color={"#0D0D0D"}
              text={"Get an estimate"}
              width={"212px"}
              height={"48px"}
              textcolor={"white"}
              arialabel={"Get an estimate"}
              href={"/pricing"}
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
  background-image: url("https://res.cloudinary.com/diyha1kd9/image/upload/v1741214502/darkpurplebg_xlajmp.webp");
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
