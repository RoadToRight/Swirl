import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Context1 from "../Context/Context1";
import TopBrandsWithCircle from "./TopBrandsWithCircle";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
  const { DarkLight } = useContext(Context1);

  let Textcolor = DarkLight ? "black" : "white";
  let Textcolor2 = DarkLight ? "white" : "black";
  let bgcolor = DarkLight ? "#C707E4" : "white";
  let Logo = DarkLight
    ? "/Project IMG/navblack-wtbg.png"
    : "/Project IMG/Layer_8.png";

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [tilts, setTilts] = useState({
    firstCircle: { rotateX: 0, rotateY: 0 },
    secondCircle: { rotateX: 0, rotateY: 0 },
    thirdCircle: { rotateX: 0, rotateY: 0 },
    fourthCircle: { rotateX: 0, rotateY: 0 },
  });
  const handleMouseMove = (e, circle) => {
    const box = e.target.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / box.height) * 20;
    const rotateY = -(mouseX / box.width) * 20;

    // Update the tilt state for the specific circle
    setTilts((prev) => ({
      ...prev,
      [circle]: { rotateX, rotateY },
    }));
  };

  // Function to reset tilt on mouse leave
  const handleMouseLeave = (circle) => {
    setTilts((prev) => ({
      ...prev,
      [circle]: { rotateX: 0, rotateY: 0 },
    }));
  };
  return (
    <ParentCircle $darkLight={DarkLight}>
      <TopBrandsWithCircle />
      <CircleDiv>
        <div className="Circle-div">
          <div className="flex justify-center items-center ">
            <div className="imgDiv relative w-[450px]">
              {/* First Circle */}
              <div
                className="absolute -top-10 z-1 first-parent box_item tilt p-3"
                style={{
                  transform: `perspective(150px) rotateX(${tilts.firstCircle.rotateX}deg) rotateY(${tilts.firstCircle.rotateY}deg)`,
                }}
                onMouseMove={(e) => handleMouseMove(e, "firstCircle")}
                onMouseLeave={() => handleMouseLeave("firstCircle")}
              >
                <div
                  className="text-bg absolute first-circle z-1 w-[145px]"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.firstCircle.rotateX}deg) rotateY(${tilts.firstCircle.rotateY}deg)`,
                  }}
                ></div>
                <div className="text-onbg absolute first-circle z-1 w-[145px]">
                  Motion Graphics
                </div>
                <img
                  src="/Project IMG/img1(2).png"
                  alt=""
                  className="first-circle z-1 w-[145px] circle"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.firstCircle.rotateX}deg) rotateY(${tilts.firstCircle.rotateY}deg)`,
                  }}
                />
              </div>

              {/* Second Circle */}
              <div
                className="absolute -bottom-10 z-1 second-parent box_item tilt p-3"
                style={{
                  transform: `perspective(150px) rotateX(${tilts.secondCircle.rotateX}deg) rotateY(${tilts.secondCircle.rotateY}deg)`,
                }}
                onMouseMove={(e) => handleMouseMove(e, "secondCircle")}
                onMouseLeave={() => handleMouseLeave("secondCircle")}
              >
                <div
                  className="text-bg absolute first-circle z-1 w-[145px]"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.secondCircle.rotateX}deg) rotateY(${tilts.secondCircle.rotateY}deg)`,
                  }}
                ></div>
                <div className="text-onbg absolute first-circle z-1 w-[145px]">
                  Video Editing
                </div>
                <img
                  src="/Project IMG/img1(1).png"
                  alt=""
                  className="first-circle z-1 w-[145px]"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.secondCircle.rotateX}deg) rotateY(${tilts.secondCircle.rotateY}deg)`,
                  }}
                />
              </div>

              <div
                className="absolute -left-10 z-1 third-parent box_item tilt p-3"
                style={{
                  transform: `perspective(150px) rotateX(${tilts.thirdCircle.rotateX}deg) rotateY(${tilts.thirdCircle.rotateY}deg)`,
                }}
                onMouseMove={(e) => handleMouseMove(e, "thirdCircle")}
                onMouseLeave={() => handleMouseLeave("thirdCircle")}
              >
                <div
                  className="text-bg absolute first-circle z-1 w-[145px]"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.thirdCircle.rotateX}deg) rotateY(${tilts.thirdCircle.rotateY}deg)`,
                  }}
                ></div>
                <div className="text-onbg absolute first-circle z-1 w-[145px]">
                  Video Editing
                </div>
                <img
                  src="/Project IMG/about1.png"
                  alt=""
                  className="first-circle z-1 w-[145px]"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.thirdCircle.rotateX}deg) rotateY(${tilts.thirdCircle.rotateY}deg)`,
                  }}
                />
              </div>

              {/* Fourth Circle */}
              <div
                className="absolute -right-8 z-1 fourth-parent box_item tilt p-3"
                style={{
                  transform: `perspective(150px) rotateX(${tilts.fourthCircle.rotateX}deg) rotateY(${tilts.fourthCircle.rotateY}deg)`,
                }}
                onMouseMove={(e) => handleMouseMove(e, "fourthCircle")}
                onMouseLeave={() => handleMouseLeave("fourthCircle")}
              >
                <div
                  className="text-bg absolute first-circle z-1 w-[145px]"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.fourthCircle.rotateX}deg) rotateY(${tilts.fourthCircle.rotateY}deg)`,
                  }}
                ></div>
                <div className="text-onbg absolute first-circle z-1 w-[145px]">
                  Whiteboard Video
                </div>
                <img
                  src="/Project IMG/img1(3).png"
                  alt=""
                  className="first-circle z-1 w-[145px]"
                  style={{
                    transform: `perspective(150px) rotateX(${tilts.fourthCircle.rotateX}deg) rotateY(${tilts.fourthCircle.rotateY}deg)`,
                  }}
                />
              </div>

              {/* Background Elements */}
              <img
                src={`${Logo}`}
                alt=""
                className="absolute z-1 circleLogo w-[150px]"
              />
              <img src="/Project IMG/circle.png" alt="" className="absolute" />
              <img
                src="/Project IMG/ball.png"
                alt=""
                className="absolute ball"
              />
            </div>
          </div>

          <div className="text textttC">
            <div
              className={`head font-bold leading-[55px] text-[43px] text-${Textcolor}`}
            >
              Ignite Creativity with Expert Animation Video Services
            </div>
            <div className={`small mt-6 text-${Textcolor}`}>
              What makes our custom video animation services unique? It's
              straightforward! Our video animation company is passionate about
              storytelling and committed to delivering top-notch animation video
              services. We believe that every animation should not only look
              fantastic but also resonate with your audience. That's why we
              invest time in understanding your brand, message, and audience to
              create tailored animation video services.
            </div>
            <div className="button mt-4 ">
              <Link to="/pricing" onClick={scrollToTop}>
              <Button
                text={"Get an estimate"}
                textcolor={"white"}
                color={"#C707E4"}
                width={"180px"}
                height={"52px"}
              />
              </Link>
            </div>
          </div>
        </div>
      </CircleDiv>
    </ParentCircle>
  );
};

export default Circle;

const CircleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  padding: 50px 20px;
  padding-bottom: 100px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .circleLogo {
    @media (max-width: 568px) {
      width: 50%;
    }
  }
  .Circle-div {
    display: grid;
    grid-template-columns: 40% 33%;
    place-items: center;

    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (max-width: 1320px) {
      grid-template-columns: 50% 40%;
      gap: 20px;
    }
    @media (max-width: 1100px) {
      gap: 50px;
    }
    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 416px) {
      gap: 0px;
    }
  }
  .imgDiv {
    min-height: 450px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 568px) {
      width: 330px;
      height: 330px;
    }

    @media (max-width: 416px) {
      width: 250px;
      height: 250px;
    }
    @media (max-width: 416px) {
      width: 220px;
      height: 220px;
    }
    .first-circle {
      border-radius: 8000px;

      height: 145px;
      @media (max-width: 568px) {
        height: 110px;
        width: 110px;
      }
      @media (max-width: 416px) {
        height: 100px;
        width: 100px;
      }
      @media (max-width: 416px) {
        height: 80px;
        width: 80px;
      }
    }
  }

  .first-parent {
    @media (max-width: 568px) {
      top: 0px;
    }
    @media (max-width: 416px) {
      top: 40px;
    }
    @media (max-width: 416px) {
      top: 60px;
    }
  }
  .second-parent {
    @media (max-width: 568px) {
      bottom: 0px;
    }
    @media (max-width: 416px) {
      bottom: 40px;
    }
    @media (max-width: 416px) {
      bottom: 60px;
    }
  }
  .third-parent {
    @media (max-width: 568px) {
      left: -40px;
    }
    @media (max-width: 416px) {
      left: -60px;
    }
  }
  .fourth-parent {
    @media (max-width: 568px) {
      right: -40px;
    }
    @media (max-width: 416px) {
      right: -60px;
    }
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 992px) {
      text-align: center;
      padding: 60px 50px;
    }
    @media (max-width: 568px) {
      text-align: center;
      padding: 60px 10px;
    }
    @media (max-width: 416px) {
      padding: 0px 10px;
    }
    .head {
      @media (max-width: 1100px) {
        font-size: 37px;
      }
      @media (max-width: 416px) {
        font-size: 30px;
      }
      @media (max-width: 370px) {
        font-size: 27px;
        font-weight: 900;
      }
      @media (max-width: 350px) {
        font-size: 25px;
        font-weight: 900;
      }
    }
    .small {
      @media (max-width: 416px) {
        font-size: 13px;
      }
    }
  }

  .text-bg {
    background-color: #00000083;
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-onbg {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 23px;
    text-align: center;
    line-height: 26px;
    @media (max-width: 568px) {
      font-size: 16px;
      font-weight: 1000;
    }
    @media (max-width: 416px) {
      font-size: 12px;
      font-weight: 1000;
    }
  }

  /* TiltEffect.css */
  .ball {
    transform: rotate(200deg);
  }

  .box_item {
    /* width: 300px;
  height: 300px;
  position: relative;
  margin: 100px auto;
  background-color: #f0f0f0;
  border-radius: 10px; */
    overflow: hidden;
    transition: transform 0.1s ease-out;
    /* display: flex;
  justify-content: center;
  align-items: center; */
  }
  .box_item:hover {
    transform: scale(1.05); /* Slight scaling effect for extra realism */
  }
`;

const ParentCircle = styled.div`
  background: ${(props) =>
    props.$darkLight
      ? "white"
      : "linear-gradient(135deg, #3b0a45, #2f1d3f, #4b1f6f)"};
`;
