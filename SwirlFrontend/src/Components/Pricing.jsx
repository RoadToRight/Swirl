import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";
import Button from "./Button";
import Context1 from "../Context/Context1";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {Helmet} from "react-helmet";
let SpacemenPopup = lazy(()=>import("./SpacemenPopup"))
const Pricing = () => {
  const [windowidth, setwindowidth] = useState(window.innerWidth);
  const [btnwidth, setbtnwidth] = useState("325px");
  const [YoutubeVideo, setYoutubeVideo] = useState(false);
  const [YoutubeUrl, setYoutubeUrl] = useState();

  const { DarkLight,SpaceMen, setSpaceMen,PlanFromPopUp, setPlanFromPopUp } = useContext(Context1);

  let Textcolor = DarkLight ? "black" : "white";
  let Textcolor2 = DarkLight ? "text-[#b3a9a9]" : "text-[#b3a9a9]";
  let hrcolor = DarkLight ? "bg-[#360f4f]" : "bg-white";

  let bgcolor = DarkLight ? "white" : "black";
  let bgcolor2 = DarkLight ? "bg-[#ffffff84]" : "bg-[#360F4F99]";
  
  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setwindowidth(window.innerWidth);
    };
    // Add event listener on component mount
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowidth <= 466) {
      setbtnwidth("280px");
    } else {
      setbtnwidth("325px");
    }
  }, [windowidth]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const PlayYouTube = () => {
    setYoutubeVideo((props) => !props);
  };
  const canonicalUrl = `https://swirl365.com${location.pathname}`;
  return (
    <PricingDiv className={`bg-${bgcolor}`}>
      
     <Suspense >{SpaceMen &&  <SpacemenPopup />}</Suspense>
     <Helmet>
  <title>Swirl365 | Pricing Plans</title>
  <link rel="canonical" href={canonicalUrl} />
  <meta 
    name="description" 
    content="Explore our flexible pricing plans for high-quality animation services. Get 30-second animations with AI voiceover, custom illustrations, HD & 4K quality, licensed music, multiple revisions, and dedicated support – all at competitive rates." 
  />

  <meta 
    property="og:title" 
    content="Swirl365 | Pricing Plans – Affordable Animation Services" 
  />
  <meta 
    property="og:description" 
    content="Looking for high-quality animation at the right price? Swirl365 offers flexible pricing plans tailored to your needs. From 2D and motion graphics to custom character animations, get professional videos at competitive rates with HD & 4K quality, scriptwriting, revisions, and more!" 
  />

  <meta property="og:type" content="website" />
</Helmet>

      
      {YoutubeVideo ? (
        <div className="video-container">
          <IoCloseOutline
            className="absolute top-2 right-6 text-[50px] text-white font-extrabold cursor-pointer"
            onClick={PlayYouTube}
          />
          <iframe
            width="90%"
            height="80%"
            src={`${YoutubeUrl}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}
      <div className="imgDiv absolute balldiv">
        <img
          src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
          alt=""
        />
      </div>
      <div className="imgDiv absolute balldiv2">
        <img
          src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
          alt=""
        />
      </div>
      <div className="text flex flex-col items-center justify-center">
        <div
          className={`big font-bold text-[38px] leading-[57.6px] text-center mb-3 text-${Textcolor}`}
        >
          Pricing Plans
        </div>

        <div
          className={`small1 font-bold leading-[24px] text-center text-${Textcolor}`}
        >
          Our Plans includes:
        </div>
        <br />
        <div className="small2 smallt flex gap-6 flex-wrap items-center justify-center px-8">
          <div
            className={`one font-light text-center flex items-center gap-1 text-${Textcolor} text-one`}
          >
            <FaCheck />
            Custom Illustrations & Custom Characters
          </div>
          <div
            className={`two font-light text-center flex items-center gap-1 text-${Textcolor}`}
          >
            <FaCheck />
            Unlimited number of projects
          </div>
          <div
            className={`three font-light text-center flex items-center gap-1 text-${Textcolor}`}
          >
            <FaCheck />
            Music library
          </div>
        </div>
        <br />
        <div className="small3 smallt flex gap-6 flex-wrap px-8 items-center justify-center">
          <div
            className={`one font-light text-center flex items-center gap-1 text-${Textcolor}`}
          >
            <FaCheck />
            Upto 4K Resolution
          </div>
          <div
            className={`two font-light text-center flex items-center gap-1 text-${Textcolor}`}
          >
            <FaCheck />
            Download as MP4
          </div>
        </div>

        <br />
      </div>

      <div className="Plans">
        <div>
          <div className={`basic plan ${bgcolor2}`}>
            <div
              className={`head font-bold leading-[26.4px]  text-${Textcolor} text-[22px] flex flex-col gap-2 pt-4`}
            >
              Basic
              <div className="text-[26px] font-extrabold">$299.00</div>
            </div>

            <div className={`hr ${hrcolor}`}></div>

            <div className="ul list-none">
              <li
                className={`flex items-center gap-2 text-[#002632] text-[15px] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                30 second duration
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Ai Voiceover
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Licensed free music and sfx
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                HD Quality
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                {" "}
                <FaCheck />5 revisions
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Dedicated support
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                4K Quality
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                Custom Illustration
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                Custom Characters
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                Script Writing
              </li>
            </div>
          </div>
          <div className="Examples mt-4 text-center">
            <div className={`text ex text-${Textcolor}`}>For Examples</div>
            <div className={`hr3 mt-3 ${hrcolor}`}></div>

            <div className="images mt-2 flex gap-2 relative">
              <div>
                <img
                className="w-[95px]"
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214490/Haive_sel5ey.webp"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/kncsl7USwPs?si=n6qgynph9-0MWCdk"
                    );
                  }}
                  alt=""
                  className="pricingeexplay1 cursor-pointer absolute top-4 left-[13%]
                "
                />
              </div>
              <div>
                <img
                className="w-[95px]"
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214461/property_wrspil.webp"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/vnC6P0Sx5Z8?si=SHPwOU5rRf7IkxRd"
                    );
                  }}
                  alt=""
                  className="pricingeexplay2 cursor-pointer absolute top-4 left-[48%]
                "
                />
              </div>
              <div>
                <img
                className="w-[95px]"
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214461/promise_qgqcum.webp"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/HLmJZaNWgs8?si=30Bbjy5oDSwxbO7G"
                    );
                  }}
                  alt=""
                  className="pricingeexplay3 cursor-pointer absolute top-4 left-[82%]
                "
                />
              </div>
            </div>
            <div className="flex items-start justify-start mt-2">
              <div
                
                onClick={() => {scrollToTop(); setSpaceMen(true);setPlanFromPopUp("From Basic")}}
                state={{ location: "From Basic Plan" }}
              >
                <Button
                  text={"Get Started"}
                  color={"#360F4F"}
                  width={btnwidth}
                  height={"40px"}
                  textcolor={"white"}
                  translateZ={"16px"}
                  MinustranslateZ={"-18px"}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="Standard plan2">
            <div className="best absolute right-0 top-0 bg-[#be28cc] text-white">
              Best Choice
            </div>
            <div className="head font-bold leading-[26.4px]  text-[#ffffff] pt-4 text-[22px] flex flex-col gap-2">
              Standard
              <div className="text-[26px] font-extrabold">$599.00</div>
            </div>

            <div className="hr bg-white"></div>

            <div className="ul list-none">
              <li className="flex items-center gap-2 text-[#ffffff] text-[15px] leading-[48px]">
                <FaCheck />
                60 second duration
              </li>
              <li className="flex items-center gap-2 text-[#ffffff] leading-[48px]">
                <FaCheck />
                Ai Voiceover
              </li>
              <li className="flex items-center gap-2 text-[#ffffff] leading-[48px]">
                <FaCheck />
                Licensed Free music and sfx
              </li>
              <li className="flex items-center gap-2 text-[#ffffff] leading-[48px]">
                <FaCheck />
                HD Quality
              </li>
              <li className="flex items-center gap-2 text-[#ffffff] leading-[48px]">
                {" "}
                <FaCheck />8 revisions
              </li>
              <li className="flex items-center gap-2 text-[#ffffff] leading-[48px]">
                <FaCheck />
                Dedicated support
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                4K Quality
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                Custom Illustration
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                Custom Characters
              </li>
              <li
                className={`flex items-center gap-2 text-[14px] ${Textcolor2} leading-[48px] `}
              >
                <RxCross2 />
                Script Writing
              </li>
            </div>
          </div>
          <div className="Examples mt-4 text-left ">
            <div className={`text ex text-${Textcolor}`}>For Examples</div>
            <div className={`hr3 mt-3 ${hrcolor}`}></div>

            <div className="images mt-2 flex gap-2 relative">
              <div>
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214487/zycada_cjhnxp.webp"
                          className="w-[95px]"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/Nn-0oKmNsG0?si=9FBFEnP5xPi5vMZ_"
                    );
                  }}
                  alt=""
                  className="pricingeexplay1 cursor-pointer absolute top-4 left-[13%]
                "
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214469/sprinto_xeam6h.webp"
                          className="w-[95px]"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/QOJI12yDgFk?si=QLGOz4-GERJMeZuV"
                    );
                  }}
                  alt=""
                  className="pricingeexplay2 cursor-pointer absolute top-4 left-[48%]
                "
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214489/game_kup6oi.webp"
                          className="w-[95px]"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/se_6p5mOO2g?si=4e7tjHJuBFKbcF81"
                    );
                  }}
                  alt=""
                  className="pricingeexplay3 cursor-pointer absolute top-4 left-[82%]
                "
                />
              </div>
            </div>
            <div className="flex items-start justify-start mt-2">
              <div
                
                onClick={() => {scrollToTop(); setSpaceMen(true);setPlanFromPopUp("From Standard")}}
                state={{ location: "From Standard Plan" }}
              >
                <Button
                  text={"Get Started"}
                  color={"#360F4F"}
                  width={btnwidth}
                  height={"40px"}
                  textcolor={"white"}
                  translateZ={"16px"}
                  MinustranslateZ={"-18px"}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`Premium plan3 plan ${bgcolor2} `}>
            <div
              className={`head font-bold leading-[26.4px] text-[22px] text-${Textcolor} pt-4 flex flex-col gap-2`}
            >
              Premium
              <div className="text-[26px] font-extrabold">$999.00</div>
            </div>

            <div className={`hr ${hrcolor}`}></div>

            <div className="ul list-none">
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                90 second duration
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Ai Voiceover
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Licensed Free music and sfx
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                HD Quality
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                {" "}
                <FaCheck />
                Unlimited Revisions
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Dedicated Support
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                4K Quality
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Custom Illustration
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Custom Character
              </li>
              <li
                className={`flex items-center gap-2 text-[#002632] leading-[48px] text-${Textcolor}`}
              >
                <FaCheck />
                Script Writing
              </li>
            </div>
          </div>

          <div className="Examples mt-4 text-center">
            <div className={`text ex text-${Textcolor}`}>For Examples</div>
            <div className={`hr3 mt-3 ${hrcolor}`}></div>

            <div className="images mt-2 flex gap-2 relative">
              <div>
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214482/trust_quay_y4nmch.webp"
                   className="w-[95px]"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/-wJjmguH_oU?si=ENmbCOaV95tCjQXw"
                    );
                  }}
                  alt=""
                  className="pricingeexplay1 cursor-pointer absolute top-4 left-[13%]
                "
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214486/zoomprop_hw6uqk.webp"
                   className="w-[95px]"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/iM7WKPX2tQg?si=uABZu3rHRcnCXeuX"
                    );
                  }}
                  alt=""
                  className=" pricingeexplay2 cursor-pointer absolute top-4 left-[48%]
                "
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214498/commitment_1_zx1rsv.webp"
                   className="w-[95px]"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214460/pricingexplay_kmubax.webp"
                  onClick={() => {
                    PlayYouTube();
                    setYoutubeUrl(
                      "https://www.youtube.com/embed/SBHs42FB3vc?si=khawvSses1e_jpxi"
                    );
                  }}
                  alt=""
                  className="pricingeexplay3 cursor-pointer absolute top-4 left-[82%]
                "
                />
              </div>
            </div>
            <div className="flex items-start justify-start mt-2">
              <div
                
                onClick={() => {scrollToTop(); setSpaceMen(true);setPlanFromPopUp("From Premium")}}
                state={{ location: "From Premium Plan" }}
              >
                <Button
                  text={"Get Started"}
                  color={"#360F4F"}
                  width={btnwidth}
                  height={"40px"}
                  textcolor={"white"}
                  translateZ={"16px"}
                  MinustranslateZ={"-18px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-crafted container  bg-[#681291] flex justify-around items-center">
        <div className="custo-div flex gap-3 ">
          <div className=" text font-extrabold leading-[26.4px] text-[35px] text-white pt-4 pl-2 ">
            <span className=""> Custom Crafted</span>
          </div>
          <div className="hr2 bg-white mt-2"></div>
          <div className="small text-white ">
            Want every pixel customized to perfection? Contact us today to
            schedule a call and bring your vision to life!
          </div>
        </div>

        <div className="button">
          <Link
            
            onClick={scrollToTop}
            state={{ location: "From Custom Craft" }}
          >
            <Button
              text={"Contact Now"}
              color={"white"}
              width={"200px"}
              height={"45px"}
              textcolor={"black"}
              translateZ={"16px"}
              MinustranslateZ={"-18px"}
            />
          </Link>
        </div>
      </div>
    </PricingDiv>
  );
};

export default Pricing;

const PricingDiv = styled.div`
  background-image: url("https://res.cloudinary.com/diyha1kd9/image/upload/v1741214459/pricingbg2_dyrrje.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0px;
  overflow: hidden;
  /* background-color: black; */
  /* height: 100vh; */
  .imgDiv {
    width: 374.01px;
    height: 393.19px;
  }
  .Plans {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 40px 40px;
    flex-wrap: wrap;

    @media (max-width: 1084px) {
      gap: 40px;
    }
  }
  .plan {
    width: 328px;
    height: auto;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    backdrop-filter: blur(10px);
    /* background-color: #ffffff81; */
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 3px 4px 12px 1px rgba(183, 178, 178, 0.25);
    transition: all 300ms ease;
    padding: 10px 15px;
    @media (max-width: 466px) {
      width: 280px;
    }
  }
  .plan:hover{

    box-shadow:  3px 4px 40px 1px #360f4f;
  }
  .plan2 {
    width: 388px;
    height: auto;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    backdrop-filter: blur(20px);
    background: rgba(20, 0, 50, 0.589);
    background: linear-gradient(
      135deg,
      rgba(20, 0, 50, 0.85),
      rgba(20, 0, 50, 1)
    );
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 3px 4px 18px 1px rgba(20, 0, 50, 0.8);
    padding: 10px 15px;
    color: #ffffff;
    transition: all 300ms ease;
    box-shadow:  13px 14px 100px 3px #360f4f;
    @media (max-width: 466px) {
      width: 300px; 
    }
  }
  .plan2:hover{
    box-shadow:  13px 14px 150px 3px #360f4f;
  }
  .text-one {
    @media (max-width: 334px) {
      font-size: 12px;
    }
  }
  .best {
    border-top-right-radius: 11px;
    border-bottom-left-radius: 13px;
    padding: 10px;
  }
  .hr {
    height: 1px;
    width: 200px;
  }
  .hr3 {
    height: 1px;
    width: 240px;
    @media (max-width: 767px) {
      /* margin-left: 60px; */
      width: 90%;
    }
  }
  .hr2 {
    background-color: #360f4f;
    height: 60px;
    width: 2px;
    @media (max-width: 767px) {
      height: 2px;
      width: 100%;
    }
    height: 2px;
    width: 100%;
  }
  .ex {
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  .Examples {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
  }
  .custom-crafted {
    background-image: url("https://res.cloudinary.com/diyha1kd9/image/upload/v1741214499/customcraft_qnkhat.webp");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 65vw;
    height: 80px;
    border-radius: 13px;
    box-shadow: 3px 4px 12px 1px rgba(103, 17, 143, 0.782);
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px 0px;
    @media (max-width: 920px) {
      width: 90%;
    }
    @media (max-width: 767px) {
      width: 90%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 25px 0px;
    }

    .small {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 40vw;
      font-size: 18px;
      @media (max-width: 767px) {
        text-align: center;
      }

      text-align: center;
      @media (max-width: 924px) {
        width: 80%;
      }
      @media (max-width: 768px) {
        width: 80%;
        font-size: 14px;
      }
    }
    @media (max-width: 767px) {
      .custo-div {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .custo-div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .smallt {
    @media (max-width: 400px) {
      font-size: 14px;
    }
    @media (max-width: 353px) {
      font-size: 14px;
    }
  }

  .balldiv {
    position: absolute;
    top: 30%;
    left: 15%;

    @media (max-width: 1085px) {
      left: 30%;
    }
    @media (max-width: 776px) {
      left: 25%;
    }
    @media (max-width: 530px) {
      left: 8%;
      width: 300px;
      height: 300px;
      img {
        width: 300px;
        height: 300px;
      }
    }

    @media (max-width: 430px) {
      left: 20%;
      top: 40%;
      width: 250px;

      img {
        width: 250px;
        height: 250px;
      }
    }

    @media (max-width: 400px) {
      left: 15%;
      top: 40%;
      width: 250px;

      img {
        width: 250px;
        height: 250px;
      }
    }
  }

  .balldiv2 {
    position: absolute;
    top: 30%;
    right: 15%;

    @media (max-width: 1085px) {
      display: none;
    }
  }

  .images {
    @media (max-width: 767px) {
      align-items: center;
      justify-content: center;

      .pricingeexplay1 cursor-pointer {
        left: 36px;
      }

      .pricingeexplay2 cursor-pointer {
        left: 113px;
      }
      .pricingeexplay3 cursor-pointer {
        left: 195px;
      }
    }
  }
  .video-container {
    position: fixed;
    top: 0%;
    z-index: 1000;
    background-color: #0000005d;
    backdrop-filter: blur(20px);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
