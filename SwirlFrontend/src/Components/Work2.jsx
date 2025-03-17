import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Context1 from "../Context/Context1";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";
import { data, Alldata, balls } from "../creationsImg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import {Helmet} from "react-helmet";
const Work2 = () => {
  //useState
  const [isOpen2, setIsOpen2] = useState(false);
  const [btnWidth, setbtnWidth] = useState("20vw");
  const [LargeVideosHover, setLargeVideosHover] = useState([]);
  const [SmallVideosHover, setSmallVideosHover] = useState([]);
  const [LargeVideoExtraHover, setLargeVideoExtraHover] = useState([]);
  const [TypeOfVideo, setTypeOfVideo] = useState("All");
  const [TypeOfVideoToPrint, setTypeOfVideoToPrint] = useState("All");
  const [DataToVideo, setDataToVideo] = useState([]);
  const [LargeVideoData, setLargeVideoData] = useState();
  const [YoutubeVideo, setYoutubeVideo] = useState(false);
  const [YoutubeUrl, setYoutubeUrl] = useState();
  const [smallvideosAnimationState, setsmallvideosAnimationState] =
    useState(true);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  //----------------------------------------------------------------------------useContext-----------------------------------------
  const { DarkLight } = useContext(Context1);
  //----------------------------------------------------------------------------------variables-------------------------
  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "white" : "black";
  let bgcolor3 = DarkLight ? "bg-white" : "bg-[#17121e84]";
  let bgcolor2 = DarkLight ? "white" : "white";
  //---------------------------------------------------------------------useNavigate--------------------------------------
  let Navigate = useNavigate();
  //--------------------------------------------------------------------uselocation-------------------------------------
  let location = useLocation();
  //---------------------------------------------------------------useRef--------------------------------------------------------
  let work = useRef(null);
  const videoRefs = useRef([]);
  const videoRefs2 = useRef([]);
  const videoRefs3 = useRef([]);
  //----------------------------------------------------------useEffect---------------------------------------------------------
  useEffect(() => {
    let decodedString = decodeURIComponent(location.pathname);
    let updatedString = decodedString.replace(/%/g, " ").split("/")[2];
    handleSelectOption2(updatedString);
    SearchVideoType2(updatedString);
  }, [location]);

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 1024) {
      setsmallvideosAnimationState(false);
    } else {
      setsmallvideosAnimationState(true);
    }
    if (windowWidth <= 992) {
    }

    if (windowWidth <= 468) {
      setbtnWidth("90vw"); // This will apply when the width is 468px or less
    } else if (windowWidth <= 900) {
      setbtnWidth("41vw"); // This will apply for widths between 469px and 900px
    } else {
      setbtnWidth("20vw"); // This will apply for widths larger than 900px
    }
  }, [windowWidth]);

  // -------------------------------------------------------------------functions-------------------------------------------
  const handleToggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleSelectOption2 = (value) => {
    setTypeOfVideo(value);
    setIsOpen2(false);
  };
  const SearchVideoType2 = (TypeOfVideoParams) => {
    setTypeOfVideoToPrint(TypeOfVideoParams ? TypeOfVideoParams : TypeOfVideo);
    if (!TypeOfVideoParams) {
      Navigate(`/creations/${TypeOfVideo}`);
    }
    let Filter = data.find((x) => {
      let Keys = Object.keys(x)[0];
      if (TypeOfVideoParams !== "All") {
        return Keys === TypeOfVideoParams;
      }
    });
    if (Filter) {
      let Values = Object.values(Filter)[0];
      let Values2 = Object.values(Filter)[0][0];
      setLargeVideoData([Values2]);
      let smallData = Values.filter((c, i) => {
        return i !== 0;
      });
      setDataToVideo(smallData);
    } else {
      setDataToVideo([]);
      setLargeVideoData([]);
    }
  };
  const SearchVideoType = (TypeOfVideoParams) => {
    setTypeOfVideoToPrint(TypeOfVideoParams ? TypeOfVideoParams : TypeOfVideo);
    if (!TypeOfVideoParams) {
      Navigate(`/creations/${TypeOfVideo}`);
    }
    let Filter = data.find((x) => {
      let Keys = Object.keys(x)[0];
      let Values = Object.values(x)[0];
      if (TypeOfVideo !== "All") {
        return Keys === TypeOfVideo;
      }
    });
    if (Filter) {
      let Values = Object.values(Filter)[0];
      let Values2 = Object.values(Filter)[0][0];
      setLargeVideoData([Values2]);
      let smallData = Values.filter((c, i) => {
        return i !== 0;
      });
      setDataToVideo(smallData);
    } else {
      setDataToVideo([]);
      setLargeVideoData([]);
    }
  };
  const PlayYouTube = () => {
    setYoutubeVideo((props) => !props);
  };

  const AnimationOnClick = () => {
    window.gsap.from(work.current, {
      y: 1000,
      opacity: 0,
    });
  };
  let arr = [];
  const handleVideoRef = (el, index) => {
    if (el !== null) {
      // videoRefs2.current[index] = el;

      arr.push(el);
      videoRefs2.current = arr;
    }

    // console.log(arr)
  };
  const handleVideoRef2 = (el, index) => {
    if (el !== null) {
      // videoRefs2.current[index] = el;

      arr.push(el);
      videoRefs3.current = arr;
    }
  };
  //-------------------------------GSAP Work--------------------------------------------------
  if (!setsmallvideosAnimationState) {
    console.log("dsad");
    useGSAP(() => {
      videoRefs.current.forEach((el, index) => {
        gsap.from(el, {
          duration: 1,
          y: 50,
          scrollTrigger: {
            trigger: el,
            scrub: 5,
            start: "top 80%",
            end: "bottom 20%",
          },
        });
      });
      videoRefs2.current.forEach((el, index) => {
        gsap.from(el, {
          opacity: 1,
          duration: 1,
          y: 50,
          scrollTrigger: {
            trigger: el,
            scrub: 2,
            start: "top 80%",
            end: "bottom 20%",
          },
        });
      });
    });
  }
  const canonicalUrl = `https://swirl365.com${location.pathname}`;
  return (
    <Workdiv className={`bg-${bgcolor}`}>
    
      {/* --------------------------------------------------- Youtube  ----------------------------------------------------*/}
      <Helmet>
  <title>Swirl365 | Our Animation Work</title>
  <link rel="canonical" href={canonicalUrl} />
  <meta name="description" content="Find the perfect style for your video. Explore our award-winning live-action, animation, and motion graphics projects to inspire your next creative video." />

  <meta property="og:title" content="Swirl365 | Award-Winning Animation Work" />
  <meta property="og:description" content="Discover high-quality animation, motion graphics, whiteboard animation, cel animation, 2D animation, line art explainer videos, isometric videos, and more. Get inspired for your next video project!" />
  
  <meta property="og:type" content="website" />
</Helmet>

      {YoutubeVideo ? (
        <div className="video-container">
          <IoCloseOutline
            className="absolute top-2 right-6 text-[50px] text-white font-extrabold cursor-pointer"
            onClick={PlayYouTube}
          />
          <iframe
            width="92%"
            height="95%"
            src={`${YoutubeUrl}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}

      {/* --------------------------------------------------- Ball Work   ----------------------------------------------------*/}
      <div className="ball absolute left-0 top-28">
        <LazyLoadImage
        effect="blur"
          src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
          alt=""
        />
      </div>
      <div className="ball-right absolute right-0 top-28">
        <LazyLoadImage
        effect="blur"
          src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
          alt=""
        />
      </div>

      {TypeOfVideoToPrint === "All" ? (
        balls?.map((x) => {
          return (
            <div className={`${x.class} absolute ${x.align} ${x.top}`}>
              <LazyLoadImage
              effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
                alt=""
              />
            </div>
          );
        })
      ) : (
        <div>
          <div className="ball2 absolute right-36 top-[100%]">
            <LazyLoadImage
            effect="blur"
              src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
              alt=""
            />
          </div>
          <div className="ball2 absolute left-26 top-[120%]">
            <LazyLoadImage
            effect="blur"
              src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
              alt=""
            />
          </div>
        </div>
      )}
      {/* --------------------------------------------------- Selection  ----------------------------------------------------*/}
      <div className="text container text-center">
        <div className={`head-top font-bold text-[39px] text-${Textcolor}`}>
          Find the right style for your video.
        </div>
        <div className={`small font-bold mt-3 text-${Textcolor}`}>Our work</div>
        <div className={`font-light mt-3 text-${Textcolor}`}>
          Browse through our award-winning work for both live-action and
          animation, motion graphics and get your creative juices flowing for
          your next video project.
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div
          className={`selection flex items-center justify-around gap-8 ${bgcolor3} z-10`}
        >
          <div className="select-box flex items-center gap-4">
            <div className={`flex flex-col gap-2 `}>
              <label className={`text-${Textcolor}`}>
                Choose a type of video{" "}
              </label>
              <div className={`relative w-[23vw] select2 bg-${bgcolor2} ]`}>
                <button
                  className="w-full px-4 py-2 text-left rounded-md focus:outline-none"
                  onClick={handleToggleDropdown2}
                >
                  <span>{TypeOfVideo || "Select an option"}</span>
                  <svg
                    className={`inline-block ml-2 transform transition-transform duration-200 absolute right-4 top-1/2 transform -translate-y-1/2 ${
                      isOpen2 ? "rotate-180" : ""
                    }  }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="20"
                    height="20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen2 && (
                  <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-0 z-[4]  h-56 overflow-y-scroll ">
                    {[
                      "All",
                      "2D Explainer",
                      "Isometric",
                      "SAAS Explainer",
                      "Line Art Explainer",
                      "Motion Graphics",
                      "Whiteboard",
                      "Education and Training",
                      "Cel Animation",
                    ].map((option) => (
                      <li
                        key={option}
                        onClick={() => handleSelectOption2(option)}
                        className={`px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#EBE1F9] focus:outline-none`}
                      >
                        <span
                          className={`${
                            TypeOfVideo === option ? "font-bold" : ""
                          } block px-4 py-2`}
                        >
                          {option}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div
            className=" w-full button mt-8 flex items-center justify-center "
            onClick={() => {
              SearchVideoType();
              AnimationOnClick();
            }}
          >
            <Button
              text={"Search Portfolio"}
              color={"#C707E4"}
              width={btnWidth}
              height={"50px"}
              textcolor={"white"}
            />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------- IMAGES SECTION  ----------------------------------------------------*/}

      <div className={`All-Images-Parent `} ref={work}>
        {/* ---------------------------------------------------ALL IMAGES SECTION  ----------------------------------------------------*/}
        {TypeOfVideoToPrint === "All"
          ? Alldata.map((item, index) => {
              const videos = Object.values(item)[0];
              let videoElements = [];

              if (videos.length >= 2) {
                videoElements.push(
                  <div
                    className="large-videos relative "
                    ref={(el) => (videoRefs.current[index] = el)}
                    onMouseEnter={() => {
                      setLargeVideosHover((prev) => ({
                        ...prev,
                        [index]: true,
                      }));
                    }}
                    onMouseLeave={() => {
                      setLargeVideosHover((prev) => ({
                        ...prev,
                        [index]: false,
                      }));
                    }}
                  >
                    <LazyLoadImage
                    effect="blur"
                      src={`${videos[0].poster}`}
                      alt=""
                      className={`w-[1120px] h-[470px]`}
                    />

                    <div
                      className="bg-b w-[1120px] h-[470px] cursor-pointer"
                      style={{ opacity: LargeVideosHover[index] ? 0.6 : 0 }}
                    ></div>

                    <div
                      className={`text  text-[28px] font-semibold text-white absolute pt-8 pl-12 `}
                      style={{
                        opacity: LargeVideosHover[index] ? 1 : 0,
                        top: LargeVideosHover[index] ? "0px" : "-100px",
                        zIndex: LargeVideosHover[index] ? "3" : "-1",
                      }}
                    >
                      <div className="text1 text-white ">{videos[0].text1}</div>
                      <div className="text2 text-white small font-extralight text-[14px]">
                        {videos[0].type}
                      </div>
                    </div>
                    <div
                      className="play1 text-white z-3 flex gap-2 items-center   absolute top-[79%] text-black font-medium pt-4 pl-3 left-[82%] "
                      style={{
                        opacity: LargeVideosHover[index] ? 1 : 0,
                        top: LargeVideosHover[index] ? "79%" : "0px",
                      }}
                    >
                      {" "}
                      <div className="text-[18px] text">Quick Play</div>
                      <FaRegCirclePlay
                        className="text-[34px] cursor-pointer playIcon"
                        onClick={() => {
                          PlayYouTube();
                          setYoutubeUrl(
                            videos[0].video
                              ? videos[0].video
                              : videos[0].largevideo
                          );
                        }}
                      />
                    </div>
                  </div>
                );

                videoElements.push(
                  <div className="small-videos relative ">
                    {videos
                      .slice(
                        1,
                        videos.slice(1).length % 2 !== 0
                          ? videos.length - 1
                          : videos.length
                      )
                      .map((x, idx) => {
                        return (
                          <div
                            className={`relative`}
                            ref={(el) => handleVideoRef(el, index)}
                            onMouseEnter={() => {
                              setSmallVideosHover((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: true,
                              }));
                            }}
                            onMouseLeave={() => {
                              setSmallVideosHover((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: false,
                              }));
                            }}
                          >
                            <LazyLoadImage
                            effect="blur"
                              src={`${x.poster}`}
                              alt=""
                              className={`w-[550px] h-[370px]`}
                            />

                            <div
                              className="bg-b w-[550px] h-[370px]  cursor-pointer"
                              style={{
                                opacity: SmallVideosHover[`${index}-${idx}`]
                                  ? 0.6
                                  : 0,
                              }}
                            ></div>

                            <div
                              className={`text absolute text-[28px] font-semibold text-white absolute pt-8 pl-10`}
                              style={{
                                opacity: SmallVideosHover[`${index}-${idx}`]
                                  ? 1
                                  : 0,
                                top: SmallVideosHover[`${index}-${idx}`]
                                  ? "0px"
                                  : "-100px",
                                zIndex: SmallVideosHover[`${index}-${idx}`]
                                  ? "3"
                                  : "-1",
                              }}
                            >
                              <div className="text1 text-white ">{x.text1}</div>
                              <div className="text2 text-white small font-extralight text-[14px]">
                                {x.type}
                              </div>
                            </div>
                            <div
                              className="play1 text-white z-3 flex gap-2 items-center   absolute top-[79%] text-black font-medium pt-4 pl-3 left-[70%]"
                              style={{
                                opacity: SmallVideosHover[`${index}-${idx}`]
                                  ? 1
                                  : 0,
                                top: SmallVideosHover[`${index}-${idx}`]
                                  ? "79%"
                                  : "0px",
                              }}
                            >
                              {" "}
                              <div className="text text-[18px]">Quick Play</div>
                              <FaRegCirclePlay
                                className="text-[34px] cursor-pointer"
                                onClick={() => {
                                  PlayYouTube();
                                  setYoutubeUrl(x.video);
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );

                if (videos.length % 2 == 0) {
                  videoElements.push(
                    ...videos.slice(-1).map((x, index2) => {
                      {
                        return (
                          <div
                            className="large-videos relative"
                            ref={(el) => handleVideoRef2(el, index)}
                            onMouseEnter={() => {
                              setLargeVideoExtraHover((prev) => ({
                                ...prev,
                                [`${index} + ${index2}`]: true,
                              }));
                            }}
                            onMouseLeave={() => {
                              setLargeVideoExtraHover((prev) => ({
                                ...prev,
                                [`${index} + ${index2}`]: false,
                              }));
                            }}
                          >
                            <LazyLoadImage
                            effect="blur"
                              src={`${x.poster}`}
                              alt=""
                              className={`w-[1120px] h-[470px]`}
                            />

                            <div
                              className="bg-b w-[1120px] h-[470px] cursor-pointer"
                              style={{
                                opacity: LargeVideoExtraHover[
                                  `${index} + ${index2}`
                                ]
                                  ? 0.6
                                  : 0,
                              }}
                            ></div>

                            <div
                              className={`text absolute text-[28px] font-semibold text-white absolute pt-8 pl-12`}
                              style={{
                                opacity: LargeVideoExtraHover[
                                  `${index} + ${index2}`
                                ]
                                  ? 1
                                  : 0,
                                top: LargeVideoExtraHover[
                                  `${index} + ${index2}`
                                ]
                                  ? "0px"
                                  : "-100px",
                              }}
                            >
                              <div className="text1 text-white ">{x.text1}</div>
                              <div className="text2 text-white small font-extralight text-[14px]">
                                {x.type}
                              </div>
                            </div>
                            <div
                              className="play1 text-white z-3 flex gap-2 items-center   absolute top-[79%] text-black font-medium pt-4 pl-3 left-[82%]"
                              style={{
                                opacity: LargeVideoExtraHover[
                                  `${index} + ${index2}`
                                ]
                                  ? 1
                                  : 0,
                                top: LargeVideoExtraHover[
                                  `${index} + ${index2}`
                                ]
                                  ? "79%"
                                  : "0px",
                              }}
                            >
                              {" "}
                              <div className="text text-[18px]">Quick Play</div>
                              <FaRegCirclePlay
                                className="text-[34px] cursor-pointer"
                                onClick={() => {
                                  PlayYouTube();
                                  setYoutubeUrl(x.video);
                                }}
                              />
                            </div>
                          </div>
                        );
                      }
                    })
                  );
                }
              }
              return videoElements;
            })
          : null}
        {/* ---------------------------------------------------LARGE ALONE IMAGES SECTION  ----------------------------------------------------*/}
        {TypeOfVideoToPrint !== "All"
          ? LargeVideoData?.map((x, index) => {
              return (
                <div
                  className="large-videos relative"
                  onMouseEnter={() => {
                    setLargeVideosHover((prev) => ({
                      ...prev,
                      [index]: true,
                    }));
                  }}
                  onMouseLeave={() => {
                    setLargeVideosHover((prev) => ({
                      ...prev,
                      [index]: false,
                    }));
                  }}
                >
                  <LazyLoadImage
                  effect="blur"
                    src={`${x.poster}`}
                    alt=""
                    className={`w-[1120px] h-[470px]`}
                  />

                  <div
                    className="bg-b w-[1120px] h-[470px] cursor-pointer"
                    style={{ opacity: LargeVideosHover[index] ? 0.6 : 0 }}
                  ></div>

                  <div
                    className={`text absolute text-[28px] font-semibold text-white absolute pt-8 pl-12`}
                    style={{
                      opacity: LargeVideosHover[index] ? 1 : 0,
                      top: LargeVideosHover[index] ? "0px" : "-100px",
                      zIndex: LargeVideosHover[index] ? "3" : "-1",
                    }}
                  >
                    <div className="text1 text-white ">{x.text1}</div>
                    <div className="text2 text-white small font-extralight text-[14px]">
                      {x.type}
                    </div>
                  </div>
                  <div
                    className="play1 text-white z-3 flex gap-2 items-center   absolute top-[79%] text-black font-medium pt-4 pl-3 left-[82%] "
                    style={{
                      opacity: LargeVideosHover[index] ? 1 : 0,
                      top: LargeVideosHover[index] ? "79%" : "0px",
                    }}
                  >
                    {" "}
                    <div className="text-[18px] text">Quick Play</div>
                    <FaRegCirclePlay
                      className="text-[34px] cursor-pointer playIcon"
                      onClick={() => {
                        PlayYoutube();
                        setYoutubeUrl(x.largevideo);
                      }}
                    />
                  </div>
                </div>
              );
            })
          : null}
        {/* ---------------------------------------------------SMALL ALONE IMAGES SECTION  ----------------------------------------------------*/}
        <div className="small-videos relative">
          {TypeOfVideoToPrint !== "All"
            ? DataToVideo?.map((x, index, arr) => {
                return (
                  <>
                    {arr.length % 2 === 0 ? (
                      <div
                        className={`relative`}
                        onMouseEnter={() => {
                          setSmallVideosHover((prev) => ({
                            ...prev,
                            [index]: true,
                          }));
                        }}
                        onMouseLeave={() => {
                          setSmallVideosHover((prev) => ({
                            ...prev,
                            [index]: false,
                          }));
                        }}
                      >
                        <LazyLoadImage
                        effect="blur"
                          src={`${x.poster}`}
                          alt=""
                          className={`w-[550px] h-[370px]`}
                        />

                        <div
                          className="bg-b w-[550px] h-[370px]  cursor-pointer"
                          style={{
                            opacity: SmallVideosHover[index] ? 0.6 : 0,
                          }}
                        ></div>

                        <div
                          className={`text absolute text-[28px] font-semibold text-white absolute pt-8 pl-10`}
                          style={{
                            opacity: SmallVideosHover[index] ? 1 : 0,
                            top: SmallVideosHover[index] ? "0px" : "-100px",
                            zIndex: SmallVideosHover[index] ? "3" : "-1",
                          }}
                        >
                          <div className="text1 text-white ">Trust Quay</div>
                          <div className="text2 text-white small font-extralight text-[14px]">
                            Explainer Video
                          </div>
                        </div>
                        <div
                          className="play1 text-white z-3 flex gap-2 items-center   absolute top-[79%] text-black font-medium pt-4 pl-3 left-[70%]"
                          style={{
                            opacity: SmallVideosHover[index] ? 1 : 0,
                            top: SmallVideosHover[index] ? "79%" : "0px",
                          }}
                        >
                          {" "}
                          <div className="text text-[18px]">Quick Play</div>
                          <FaRegCirclePlay
                            className="text-[34px] cursor-pointer"
                            onClick={() => {
                              PlayYouTube();
                              setYoutubeUrl(x.video);
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      LargeVideoData.push(...arr.splice(-1))
                    )}
                  </>
                );
              })
            : null}
        </div>
      </div>
    </Workdiv>
  );
};
export default Work2;

const Workdiv = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0px;
  min-height: 750px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  .selection {
    width: 50vw;
    border-radius: 9px;
    height: auto;
    padding: 20px;
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.15);
    @media (max-width: 992px) {
      width: 90vw;
    }
    @media (max-width: 620px) {
      width: 95vw;
    }
    @media (max-width: 468px) {
      flex-direction: column;
      gap: 5px;
    }
  }
  .select2 {
    border: 1px solid black;
    border-radius: 2px;
    @media (max-width: 992px) {
      width: 40vw;
    }
    @media (max-width: 468px) {
      width: 90vw;
    }
  }
  .ball {
    @media (max-width: 992px) {
      top: 25%;
      right: 30%;
    }
    @media (max-width: 546px) {
      top: 25%;
      right: 3%;
    }
    @media (max-width: 410px) {
      top: 25%;
      right: 3%;
    }
  }
  .ball-right {
    @media (max-width: 992px) {
      display: none;
    }
  }
  .ball2 {
    width: 200px;
  }
  .extraball {
    @media (max-width: 1150px) {
      display: none;
    }
  }
  .multi-balls {
    @media (max-width: 992px) {
      display: none;
    }
  }
  .All-Images-Parent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .large-videos {
    margin-top: 25px;
    img {
      object-fit: cover;
      object-position: 20% 80%;
      box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
      @media (max-width: 1150px) {
        width: 96vw;
        height: 470px;
      }
      @media (max-width: 820px) {
        object-fit: fill;
        object-position: center;
      }
      @media (max-width: 706px) {
        height: 400px;
      }
      @media (max-width: 620px) {
        width: 97vw;
        height: 360px;
      }
      @media (max-width: 490px) {
        width: 97vw;
        height: 58vw;
      }
      @media (max-width: 420px) {
        height: 80vw;
      }
    }
  }
  .small-videos {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 25px;
    width: 1200px;

    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1150px) {
      flex-wrap: nowrap;
      flex-direction: column;
    }
    img {
      object-fit: cover;
      object-position: 20% 80%;
      box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
      @media (max-width: 1150px) {
        width: 96vw;
        height: 470px;
      }
      @media (max-width: 820px) {
        object-fit: fill;
        object-position: center;
      }
      @media (max-width: 706px) {
        height: 400px;
      }
      @media (max-width: 620px) {
        width: 97vw;
        height: 360px;
      }
      @media (max-width: 490px) {
        width: 97vw;
        height: 58vw;
      }
      @media (max-width: 420px) {
        height: 80vw;
      }
    }
  }
  .text {
    z-index: 3;
    top: 0px;
    transition: all 400ms ease-in-out;
    pointer-events: none;
    @media (max-width: 490px) {
      padding-left: 20px !important;
    }
    @media (max-width: 440px) {
      padding-left: 14px !important;
    }
  }
  .bg-b {
    background: linear-gradient(135deg, black, #535353);
    position: absolute;
    z-index: 3;

    top: 0px;
    transition: all 400ms ease-out;
    @media (max-width: 1150px) {
      width: 96vw;
      height: 470px;
    }

    @media (max-width: 706px) {
      height: 400px;
    }
    @media (max-width: 620px) {
      width: 97vw;
      height: 360px;
    }
    @media (max-width: 490px) {
      width: 97vw;
      height: 58vw;
    }
    @media (max-width: 420px) {
      height: 80vw;
    }
  }
  .play1 {
    transition: all 400ms ease;
    @media (max-width: 1150px) {
      left: 78%;
    }
    @media (max-width: 768px) {
      left: 74%;
    }
    @media (max-width: 648px) {
      left: 68%;
      top: 70% !important;
    }
    @media (max-width: 530px) {
      left: 63%;
      top: 70% !important;
    }
    @media (max-width: 440px) {
      left: 55%;
      top: 65% !important;
    }
    @media (max-width: 375px) {
      left: 46%;
      top: 68% !important;
    }
    @media (max-width: 345px) {
      left: 44%;
      top: 68% !important;
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
