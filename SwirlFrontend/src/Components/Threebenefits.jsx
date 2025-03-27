import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { TbTargetArrow } from "react-icons/tb";
import Card from "react-bootstrap/Card";
import { FaVideo } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { scrollToTop } from "../Functions";

const Threebenefits = () => {
  // const { DarkLight } = useContext(Context1);
  const { DarkLight } = useSelector((state) => state.Custom);

  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "white" : "black";
  let three = useRef();

  useEffect(() => {
    window.gsap.from(three.current, {
      x: -300, // Start from 200px below the element's initial position
      opacity: 0, // Start from 0 opacity
      duration: 1.5, // Duration for the animation
      ease: "power3.out", // Easing function to smooth the transition
      scrollTrigger: {
        trigger: three.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <ThreeBeneDiv className={`bg-${bgcolor} `}>
        <div
          className="flex justify-center items-center three-card-parent"
          ref={three}
        >
          <div className="cards">
            <Card className={`Card bg-${bgcolor}`} style={{ border: "none" }}>
              <div className="flex items-center mt-3 ml-4 icon">
                <Card.Title className="bg-[#F4E8FF] w-[72px] h-[72px] rounded-full py-2 flex items-center justify-center">
                  <TbTargetArrow color="#7700BC" size={"38px"} />
                </Card.Title>
              </div>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <span className={`font-bold text-${Textcolor}`}>
                    Maximize every dollar
                  </span>{" "}
                </Card.Title>
                <Card.Text className={`text-${Textcolor}`}>
                  Don’t rely on a single video. We can easily turn each video
                  into multiple assets—customized for different channels,
                  resized for social platforms, and repurposed into shorter
                  clips or visuals. You’ll get the most out of your budget with
                  a high-quality bank of branded assets.
                </Card.Text>
                <Card.Title className="flex items-center gap-2 pink-head">
                  <Link
                    to={"/contactus"}
                    state={{ location: "From Message us In AboutUs" }}
                    className="text-[#C707E4] no-underline flex gap-2 items-center"
                    onClick={scrollToTop}
                  >
                    <span className="text-[#C707E4]">Message us</span>{" "}
                    <FaArrowRight className="text-[#C707E4]cursor-pointer arrow" />
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card className={`Card bg-${bgcolor}`} style={{ border: "none" }}>
              <div className="flex items-center mt-3 ml-4 icon">
                <Card.Title className="bg-[#F4E8FF] w-[72px] h-[72px] rounded-full py-2 flex items-center justify-center">
                  <FaVideo color="#7700BC" size={"38px"} />
                </Card.Title>
              </div>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <span className={`font-bold text-${Textcolor}`}>
                    Creative built for results
                  </span>{" "}
                </Card.Title>
                <Card.Text className={`text-${Textcolor}`}>
                  We’ve achieved the perfect blend of creative, production and
                  marketing strategy across hundreds of projects. Join our
                  strategy calls for guidance on your video marketing plan, or
                  our creative idea jams so you can see us in action.
                </Card.Text>
                <Card.Title className="flex items-center gap-2 pink-head">
                  <Link
                    to={"/contactus"}
                    state={{ location: "From Book strategy call In AboutUs" }}
                    className="text-[#C707E4] no-underline flex gap-2 items-center"
                    onClick={scrollToTop}
                  >
                    <span className="text-[#C707E4]">Book strategy call</span>{" "}
                    <FaArrowRight className="text-[#C707E4] arrow" />
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card className={`Card bg-${bgcolor}`} style={{ border: "none" }}>
              <div className="flex items-center mt-3 ml-4 icon">
                <Card.Title className="bg-[#F4E8FF] w-[72px] h-[72px] rounded-full py-2 flex items-center justify-center">
                  <IoMdPlayCircle color="#7700BC" size={"38px"} />
                </Card.Title>
              </div>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <span className={`font-bold text-${Textcolor}`}>
                    Flexible pricing models
                  </span>{" "}
                </Card.Title>
                <Card.Text className={`text-${Textcolor}`}>
                  Whether it’s a single project or a long-term plan, we provide
                  flexible pricing options. We’ll help you find the perfect fit
                  for your budget and goals—making high-quality video content
                  accessible and maximizing the value of your investment.
                </Card.Text>
                <Card.Title className="flex items-center gap-2 pink-head">
                  <Link
                    to={"/contactus"}
                    state={{ location: "From Get Pricing In AboutUs" }}
                    className="text-[#C707E4] no-underline flex gap-2 items-center"
                    onClick={scrollToTop}
                  >
                    <span className="text-[#C707E4]"> Get pricing</span>{" "}
                  </Link>
                  <FaArrowRight className="text-[#C707E4] arrow cursor-pointer" />
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </ThreeBeneDiv>
      {/* <div className="flex justify-center items-center">
    <div className="hr w-[90vw] h-[0.3px] bg-[#525252] "></div>
    </div> */}
    </>
  );
};

export default Threebenefits;

const ThreeBeneDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 60px 20px;
  .three-card-parent {
    gap: 20px;
    @media (max-width: 1168px) {
      flex-wrap: wrap;
      text-align: center;
      .pink-head {
        justify-content: center;
      }
      .icon {
        justify-content: center;
      }
    }
  }
  .arrow:hover {
    scale: 1.2;
    transition: transform 300ms ease;
    transform: translateX(7px);
  }
  .Card {
    width: 23rem;
    @media (max-width: 765px) {
      width: 90vw;
    }
  }
`;
