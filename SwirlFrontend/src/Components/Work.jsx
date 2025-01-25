import React, { useContext, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Context1 from "../Context/Context1";
import Loader from "./Loader";
import { useLocation, useNavigate } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [TypeOfVideo, setTypeOfVideo] = useState("All");
  const [btnWidth, setbtnWidth] = useState("20vw");
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [DataToVideo, setDataToVideo] = useState([]);
  const [LargeVideoData, setLargeVideoData] = useState();
  const [hoverStates, setHoverStates] = useState({});
  const [hoverbg1smallWidth, sethoverbg1smallWidth] = useState("30vw");
  const [hoverbg1bigWidth, sethoverbg1bigWidth] = useState("59.6vw");
  const [largeVideoHoverStates, setLargeVideoHoverStates] = useState({});
  const [TextPosition, setTextPosition] = useState("23%");
  const [smallVideoHoverStates, setSmallVideoHoverStates] = useState({});
  const [TypeOfVideoToPrint, setTypeOfVideoToPrint] = useState("All");
  const [YoutubeVideo, setYoutubeVideo] = useState(false);
  const [YoutubeUrl, setYoutubeUrl] = useState();
  const [videoHoverStates, setVideoHoverStates] = useState({});
  const [controlHoverStates, setControlHoverStates] = useState({}); // To handle control hover
  const { DarkLight } = useContext(Context1);

  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "white" : "black";
  let bgcolor3 = DarkLight ? "bg-white" : "bg-[#17121e84]";
  let bgcolor2 = DarkLight ? "white" : "white";
  let Navigate = useNavigate();
  let location = useLocation()
  console.log(location)
  let work = useRef(null);


  useEffect(() => {
    // Decode the URL and then replace all '%' characters with a space
    let decodedString = decodeURIComponent(location.pathname);
    let updatedString = decodedString.replace(/%/g, " ").split("/")[2]
    console.log(updatedString);
    // setTypeOfVideo(updatedString);
    handleSelectOption2(updatedString)
    SearchVideoType2(updatedString)
    console.log("ma useEffect chala")
  }, [location]);

  const AnimationOnClick = () => {
    gsap.from(work.current, {
      y: 1000,
      opacity: 0,
    })
  }

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = "/Project IMG/contactbg.png"; // Path to your background image
    link.as = "image";
    document.head.appendChild(link);

    return () => {
      // Clean up the link element on unmount
      document.head.removeChild(link);
    };
  }, []);

  const handleToggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  let Alldata = [
    {
      "2D Character Explainer": [
        {
          largevideo:
            "https://www.youtube.com/embed/-wJjmguH_oU?si=ENmbCOaV95tCjQXw",
          text1: "Trust Quay",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/trust quay.png"
        },
        {
          video:
            "https://www.youtube.com/embed/aTexngJxhHE?si=KySph3KgS-U0lpSX",
          text1: "Rixious",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/rixius.png"
        },

        {
          video:
            "https://www.youtube.com/embed/_w7RCCjtMdI?si=gyuP0D5UyZc7L8Va",
          text1: "Quick Vila",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/quickvila.png"
        },


      ],
    },

    {
      "SAAS Explainer": [
        {
          largevideo:
            "https://www.youtube.com/embed/iM7WKPX2tQg?si=uABZu3rHRcnCXeuX",
          text1: "Westerman",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/westermann.png"
        },
        {
          video:
            "https://www.youtube.com/embed/I382yokt2A8?si=TyjnnqWAELBsJed8",
          text1: "Zoom Prop",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/zoomprop.png"
        },
        {
          video:
            "https://www.youtube.com/embed/NzVM9PU0CvI?si=OvwebdSh6jpBq_ex",
          text1: "The Straw Boss",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/straw boss.png"
        },

      ],
    },

    {
      "Line Art Explainer": [
        {
          largevideo:
            "https://www.youtube.com/embed/dRzZ3eKy29Q?si=0ILZfG9cEUluZqNH",
          text1: "Websites",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/website.png"
        },
        {
          video:
            "https://www.youtube.com/embed/0MoCR68sqJQ?si=4SYBEUHc0BfGulHH",
          text1: "Recycling",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/recycle.png"
        },

      ],
    },

    {
      "Motion Graphics": [
        {
          largevideo:
            "https://www.youtube.com/embed/_R0AEQCs_-w?si=XsGZLsA17JMPFQgv",
          text1: "Extend Files",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/extentfiles.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ncVpiYwFBg4?si=eQveQp9g0Gyg1fY_",
          text1: "Olampia",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/uncle.png"
        },
        {
          video:
            "https://www.youtube.com/embed/Br0x3dmyM0A?si=PiaHMZ13avfeU8Xf",
          text1: "TAG",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/tag.png"
        },
      ],
    },

    {
      "Whiteboard": [
        {
          largevideo:
            "https://www.youtube.com/embed/NVtrZI31G2k?si=nk2DTg7V8FDhpC0t",
          text1: "Compassion",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/Compassion Video.png"
        },
        {
          video:
            "https://www.youtube.com/embed/UGRD0k_SC_I?si=UPmw-O0dRJ7FPgvR",
          text1: "Mojo Naaz",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/ai.png"
        },
        {
          video:
            "https://www.youtube.com/embed/Nn-0oKmNsG0?si=9FBFEnP5xPi5vMZ_",
          text1: "Zycada",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/zycada.png"
        },
      ],
    },

    {
      "Education and Training": [
        {
          largevideo:
            "https://www.youtube.com/embed/irgaeMl9fvQ?si=t8HU6ElKACDMTGeV",
          text1: "Tiger Finance",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/tiger finance.png"
        },
        {
          video:
            "https://www.youtube.com/embed/Bm0lHD9stfs?si=c_d3rBnzryMbwWSC",
          text1: "North Point",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/northpoint.png"
        },
        {
          video:
            "https://www.youtube.com/embed/SBHs42FB3vc?si=khawvSses1e_jpxi",
          text1: "Commitment",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/commitment.png"
        },
      ],
    },

    {
      "Cel Animation": [
        {
          largevideo:
            "https://www.youtube.com/embed/QOJI12yDgFk?si=QLGOz4-GERJMeZuV",
          text1: "Sprinto",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/sprinto.png"
        },
        {
          video:
            "https://www.youtube.com/embed/se_6p5mOO2g?si=4e7tjHJuBFKbcF81",
          text1: "Game Providers",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/game.png"
        },
        {
          video:
            "https://www.youtube.com/embed/kncsl7USwPs?si=n6qgynph9-0MWCdk",
          text1: "Haive",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/Haive.png"
        },
        {
          video:
            "https://www.youtube.com/embed/qextxBCf1tg?si=MDO23N3WRaUSRWvu",
          text1: "Honey",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/white.png"
        },


      ],


    },
    {
      animation: [
        {
          video:
            "https://www.youtube.com/embed/I9L5hG2psIo?si=5dT3sxztQ4XyalVU",
          text1: "RDP Store",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/store.png"
        },
        {
          video:
            "https://www.youtube.com/embed/VuIxarvKIQ0?si=-FeC-tR-PoLB_2c3",
          text1: "We Love Our Pets",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/pet.png"
        },
        {
          video:
            "https://www.youtube.com/embed/otePY-mmumA?si=6sFxqP83YNT5uuTG",
          text1: "Zen Marketing",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/zen market.png"
        },
        {
          video:
            "https://www.youtube.com/embed/HdvVRbJNuYM?si=_KaFDPYj0kA_ZUOL",
          text1: "Burners",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/burners.png"
        },
        {
          video:
            "https://www.youtube.com/embed/mf789YBsUFo?si=cLGEahZWMO7MUKts",
          text1: "OLX",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/olx.png"
        },
        {
          video:
            "https://www.youtube.com/embed/LIMwCtLpnao?si=rn5D4MgSlLMFe9GP",
          text1: "Cyber X",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/cyber.png"
        },

      ]

    }
    ,
    {
      animtion2: [
        {
          video:
            "https://www.youtube.com/embed/vnC6P0Sx5Z8?si=SHPwOU5rRf7IkxRd",
          text1: "The Property Finance",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/property.png"
        },
        {
          video:
            "https://www.youtube.com/embed/HLmJZaNWgs8?si=30Bbjy5oDSwxbO7G",
          text1: "Daddy Promise Foundation",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/promise.png"
        },
        {
          video:
            "https://www.youtube.com/embed/E01MegVNVJo?si=_dzx_-eKs5qN0EMH",
          text1: "Health Section",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/health.png"
        },
      ]
    }

  ];
  let data = [
    {
      "2D Character Explainer": [
        {
          largevideo:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },

        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
      ],
    },

    {
      "SAAS Explainer": [
        {
          largevideo:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
      ],
    },

    {
      "Line Art Explainer": [
        {
          largevideo:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/ball.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/ball.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/ball.png"
        },
      ],
    },

    {
      "Motion Graphics": [
        {
          largevideo:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
      ],
    },

    {
      "Whiteboard": [
        {
          largevideo:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
      ],
    },

    {
      "Education and Training": [
        {
          largevideo:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
      ],
    },

    {
      "Cel Animation": [
        {
          largevideo:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
        {
          video:
            "https://www.youtube.com/embed/ly36kn0ug4k?si=BUqMDpm5ng53dbUi",
          text1: "Intent Connect",
          text2: "Next-gen audience intelligence",
          type: "Explainer Video",
          poster: "/Project IMG/about1.png"
        },
      ],
    },

  ];

  const handleSelectOption2 = (value) => {
    setTypeOfVideo(value);

    setIsOpen2(false);
  };
  const SearchVideoType2 = (TypeOfVideoParams) => {
    setTypeOfVideoToPrint(TypeOfVideoParams ? TypeOfVideoParams : TypeOfVideo);
    // const String = TypeOfVideo.split(" ").join("")
    if (!TypeOfVideoParams) {
      Navigate(`/creations/${TypeOfVideo}`)
    }
    let Filter = data.find((x) => {
      let Keys = Object.keys(x)[0];
      let Values = Object.values(x)[0];
      // console.log(TypeOfVideo)


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
      console.log(smallData);
      setDataToVideo(smallData);
    } else {
      setDataToVideo([]);
      setLargeVideoData([]);
    }
  };
  const SearchVideoType = (TypeOfVideoParams) => {
    setTypeOfVideoToPrint(TypeOfVideoParams ? TypeOfVideoParams : TypeOfVideo);
    // const String = TypeOfVideo.split(" ").join("")
    if (!TypeOfVideoParams) {
      Navigate(`/creations/${TypeOfVideo}`)
    }
    let Filter = data.find((x) => {
      let Keys = Object.keys(x)[0];
      let Values = Object.values(x)[0];
      // console.log(TypeOfVideo)


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
      console.log(smallData);
      setDataToVideo(smallData);
    } else {
      setDataToVideo([]);
      setLargeVideoData([]);
    }
  };

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth <= 1230) {
      sethoverbg1smallWidth("100%");
      sethoverbg1bigWidth("95vw");
      setTextPosition("5%");
    } else {
      sethoverbg1bigWidth("60.6vw");
      setTextPosition("23%");
      sethoverbg1smallWidth("30vw");
    }
    if (windowWidth <= 992) {
      sethoverbg1smallWidth("97.8%");
    }
    // else{
    //   sethoverbg1smallWidth("97.3%");
    // }


    if (windowWidth <= 468) {
      setbtnWidth("90vw"); // This will apply when the width is 468px or less
    } else if (windowWidth <= 900) {
      setbtnWidth("41vw"); // This will apply for widths between 469px and 900px
    } else {
      setbtnWidth("20vw"); // This will apply for widths larger than 900px
    }
  }, [windowWidth]);

  const PlayYouTube = () => {
    setYoutubeVideo((props) => !props);
  };


  return (
    <WorkDiv className={`bg-${bgcolor}`}>
      <div className="ball absolute left-0 top-28">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball-right absolute right-0 top-28">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
   {TypeOfVideoToPrint === "All" ? <div className="multi-balls">
    <div className="ball absolute right-0 top-28">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute right-36 top-[100%]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute right-36 top-[2200px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute left-10 top-[1600px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute left-36 top-[2500px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute right-10 top-[2800px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute left-10 top-[3200px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute right-10 top-[3700px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>   
         <div className="ball absolute left-10 top-[4100px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>   
         <div className="ball absolute right-10 top-[4500px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>    
        <div className="ball absolute left-10 top-[4800px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute right-10 top-[5200px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute left-10 top-[5600px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute right-10 top-[6000px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>   <div className="ball absolute left-10 top-[6400px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>   <div className="ball absolute right-10 top-[6800px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>   <div className="ball absolute left-10 top-[7200px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute right-10 top-[7600px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute left-10 top-[8000px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute right-10 top-[8400px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute left-10 top-[8800px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute right-10 top-[9200px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball absolute left-10 top-[9600px]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>

   </div> : <div>
   <div className="ball2 absolute right-36 top-[100%]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>
      <div className="ball2 absolute left-26 top-[120%]">
        <img src="/Project IMG/ball.png" alt="" />
      </div>


      </div>}


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
          className={`selection flex items-center justify-around gap-8 ${bgcolor3}`}
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
                    className={`inline-block ml-2 transform transition-transform duration-200 absolute right-4 top-1/2 transform -translate-y-1/2 ${isOpen2 ? "rotate-180" : ""
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
                  <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-0 z-1  h-56 overflow-y-scroll ">
                    {["All", "2D Character Explainer", "Isometric", "SAAS Explainer", "Line Art Explainer", "Motion Graphics", "Whiteboard", "Education and Training", "Cel Animation"].map(
                      (option) => (
                        <li
                          key={option}
                          onClick={() => handleSelectOption2(option)}
                          className={`px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#EBE1F9] focus:outline-none`}
                        >
                          <span
                            className={`${TypeOfVideo === option ? "font-bold" : ""
                              } block px-4 py-2`}
                          >
                            {option}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div
            className=" w-full button mt-8 flex items-center justify-center "
            onClick={() => { SearchVideoType(); AnimationOnClick() }}
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

      <div className="mt-8" ref={work}>
        <div className="video-small-All gap-2 flex flex-wrap "  >
          {TypeOfVideoToPrint === "All"
            ? Alldata.map((x, index) => {
              // Extracting the list of videos
              const videos = Object.values(x)[0];
              // console.log(videos);
              let videoElements = [];

              // Check if there are enough videos to display a large one and two small ones
              if (videos.length >= 2) {
                // First, handle the large video (appears alone)
                videoElements.push(
                  <div
                    className="video-large flex justify-center items-center mt-6 relative w-full"

                    key={`large-video-${index}`}

                  >
                    {/* Large video container with hover effects */}
                    <div
                      className="bg1 l-bg-1 absolute"
                      style={{
                        background: hoverStates[index]
                          ? "black"
                          : "transparent",

                        width: hoverStates[index]
                          ? `${hoverbg1bigWidth}`
                          : "0",
                        height: hoverStates[index] ? "100%" : "0",
                        transition: "opacity 300ms ease-in",
                        opacity: hoverStates[index] ? "0.6" : "0",
                      }}
                    ></div>
                    <div
                      className="bg2 l-bg-2 absolute"
                      style={{
                        background: hoverStates[index]
                          ? "black"
                          : "transparent",
                        height: hoverStates[index] ? "97%" : "0",
                        transition: "all 300ms ease-in",
                        opacity: hoverStates[index] ? "0.6" : "0",
                      }}
                    ></div>
                    <div
                      className={`text Thisis left-[${TextPosition}] text-[28px] font-semibold text-white absolute pt-4 pl-3`}
                      style={{
                        opacity: hoverStates[index] ? "1" : "0",
                        transition: "all 200ms ease-in",
                        top: hoverStates[index] ? "2%" : "0",
                      }}
                    >
                      <div>
                        {videos[0].text1}
                        <div className="small font-extralight text-[14px]">
                          {videos[0].type}
                        </div>
                      </div>
                    </div>
                    <div
                      className="text viewpro top-[80%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                      style={{
                        opacity: hoverStates[index] ? "1" : "0",
                        transition: "all 200ms ease-in",
                        left: hoverStates[index] ? `${TextPosition}` : "0",
                      }}
                    >
                      <div className="small font-extralight text-[13px] flex items-center justify-center gap-2">
                        <span className="text-[14px]"> </span>{" "}

                      </div>
                    </div>
                    <div
                      className="play z-1 flex gap-2 items-center  top-[80%] absolute text-white font-medium pt-4 pl-3"
                      style={{
                        opacity: hoverStates[index] ? "1" : "0",
                        transition: "all 200ms ease-in",
                        right: hoverStates[index] ? `${TextPosition}` : "0",
                      }}
                      onMouseEnter={(e) => {
                        console.log(videos[0].largevideo);
                        setHoverStates((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      onMouseLeave={(e) => {
                        setHoverStates((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                      }}
                    >
                      <div className="text text-[18px]">Quick Play</div>
                      <FaRegCirclePlay
                        className="text-[28px] cursor-pointer"
                        onClick={() => {
                          PlayYouTube();
                          setYoutubeUrl(videos[0].largevideo);
                        }}
                      />
                    </div>
                    <div
                      className="play2 z-1 items-center absolute text-white font-medium"
                      onMouseEnter={(e) => {
                        setHoverStates((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      onMouseLeave={(e) => {
                        setHoverStates((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                      }}
                    >
                      <FaRegCirclePlay
                        className="text-[55px] cursor-pointer"
                        onClick={() => {
                          PlayYouTube();
                          setYoutubeUrl(videos[0].largevideo);
                        }}
                      />
                    </div>
                    <video
                      className="large-vi cursor-pointer"
                      muted
                      loop

                      poster={videos[0].poster}
                      onMouseEnter={(e) => {
                        setHoverStates((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      onMouseLeave={(e) => {
                        setHoverStates((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                      }}
                    ></video>
                  </div>
                );
                videoElements.push(
                  <div

                    className="small-videos flex items-center justify-center flex-wrap w-full mt-6 "
                    key={`small-videos-${index}`}
                  >
                    {videos
                      .slice(
                        1,
                        videos.slice(1).length % 2 !== 0
                          ? videos.length - 1
                          : videos.length
                      )
                      .map((item, idx) => (
                        <div
                          className="video-small flex justify-center items-center relative"
                          key={`small-video-${idx}`}
                        >
                          {/* Small video container with hover effects */}
                          <div
                            className="bg1 absolute"
                            style={{
                              background: hoverStates[`${index}-${idx}`]
                                ? "black"
                                : "transparent",

                              width: hoverStates[`${index}-${idx}`]
                                ? `${hoverbg1smallWidth}`
                                : "0",
                              height: hoverStates[`${index}-${idx}`]
                                ? "100%"
                                : "0",
                              transition: "opacity 300ms ease-in",
                              opacity: hoverStates[`${index}-${idx}`]
                                ? "0.6"
                                : "0",
                            }}
                          ></div>
                          <div
                            className="bg2 s-bg-2 absolute"
                            style={{
                              background: hoverStates[`${index}-${idx}`]
                                ? "black"
                                : "transparent",
                              transition: "all 300ms ease-in",
                              opacity: hoverStates[`${index}-${idx}`]
                                ? "0.6"
                                : "0",
                            }}
                          ></div>
                          <div
                            className="text Thisis left-[5%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                            style={{
                              opacity: hoverStates[`${index}-${idx}`]
                                ? "1"
                                : "0",
                              transition: "all 200ms ease-in",
                              top: hoverStates[`${index}-${idx}`]
                                ? "2%"
                                : "0",
                            }}
                          >
                            <div>
                              {item.text1}
                              <div className="small font-extralight text-[14px]">
                                {item.type}
                              </div>
                            </div>
                          </div>
                          <div
                            className="text viewpro top-[66%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                            style={{
                              opacity: hoverStates[`${index}-${idx}`]
                                ? "1"
                                : "0",
                              transition: "all 200ms ease-in",
                              left: hoverStates[`${index}-${idx}`]
                                ? "5%"
                                : "0",
                            }}
                          >
                            <div className="small font-extralight text-[13px] flex items-center justify-center gap-2">
                              <span className="text-[14px]">
                                {" "}

                              </span>{" "}

                            </div>
                          </div>
                          <div
                            className="play z-1 flex gap-2 items-center top-[66%] absolute text-white font-medium pt-4 pl-3"
                            style={{
                              opacity: hoverStates[`${index}-${idx}`]
                                ? "1"
                                : "0",
                              transition: "all 200ms ease-in",
                              right: hoverStates[`${index}-${idx}`]
                                ? "5%"
                                : "0",
                            }}
                            onMouseEnter={(e) => {

                              setHoverStates((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: true,
                              }));
                            }}
                            onMouseLeave={(e) => {
                              setHoverStates((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: false,
                              }));
                            }}
                          >
                            <div className="text text-[18px]">Quick Play</div>
                            <FaRegCirclePlay
                              className="text-[28px] cursor-pointer"
                              onClick={() => {
                                PlayYouTube();
                                console.log(item.video, "madsga")
                                setYoutubeUrl(item.video);
                              }}
                            />
                          </div>
                          <div
                            className="play2 z-1 items-center absolute text-white font-medium"
                            onMouseEnter={(e) => {
                              setHoverStates((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: true,
                              }));
                            }}
                            onMouseLeave={(e) => {
                              setHoverStates((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: false,
                              }));
                            }}
                          >
                            <FaRegCirclePlay
                              className="text-[55px] cursor-pointer"
                              onClick={() => {
                                PlayYouTube();
                                setYoutubeUrl(item.video);
                              }}
                            />
                          </div>
                          <video
                            className="small-vi cursor-pointer"
                            muted
                            loop
                            poster={item.poster}
                            onMouseEnter={(e) => {
                              setHoverStates((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: true,
                              }));
                            }}
                            onMouseLeave={(e) => {
                              setHoverStates((prev) => ({
                                ...prev,
                                [`${index}-${idx}`]: false,
                              }));
                            }}
                          ></video>
                        </div>
                      ))}
                  </div>
                );

                if (videos.length % 2 == 0) {
                  videoElements.push(
                    ...videos.slice(-1).map((x, idx) => (
                      <div
                        className="video-large flex justify-center items-center mt-8 relative w-full"
                        key={`large-video-s${index}`}
                      >
                        {/* Large video container with hover effects */}
                        <div
                          className="bg1 l-bg-1 absolute"
                          style={{
                            background: controlHoverStates[index]
                              ? "black"
                              : "transparent",
                            width: controlHoverStates[index]
                              ? `${hoverbg1bigWidth}`
                              : "0",
                            height: controlHoverStates[index] ? "100%" : "0",
                            transition: "opacity 300ms ease-in",
                            opacity: controlHoverStates[index] ? "0.6" : "0",
                          }}
                        ></div>
                        <div
                          className="bg2 l-bg-2 absolute"
                          style={{
                            background: controlHoverStates[index]
                              ? "black"
                              : "transparent",
                            transition: "all 300ms ease-in",
                            opacity: controlHoverStates[index] ? "0.6" : "0",
                          }}
                        ></div>
                        <div
                          className={`text Thisis left-[${TextPosition}] text-[28px] font-semibold text-white absolute pt-4 pl-3`}
                          style={{
                            opacity: controlHoverStates[index] ? "1" : "0",
                            transition: "all 200ms ease-in",
                            top: controlHoverStates[index] ? "2%" : "0",
                          }}
                        >
                          <div>
                            {x.text1}
                            <div className="small font-extralight text-[14px]">
                              {x.type}
                            </div>
                          </div>
                        </div>
                        <div
                          className="text viewpro top-[80%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                          style={{
                            opacity: controlHoverStates[index] ? "1" : "0",
                            transition: "all 200ms ease-in",
                            left: controlHoverStates[index]
                              ? `${TextPosition}`
                              : "0",
                          }}
                        >
                          <div className="small font-extralight text-[13px] flex items-center justify-center gap-2">
                            <span className="text-[14px]"> </span>{" "}

                          </div>
                        </div>
                        <div
                          className="play z-1 flex gap-2 items-center top-[80%] absolute text-white font-medium pt-4 pl-3"
                          style={{
                            opacity: controlHoverStates[index] ? "1" : "0",
                            transition: "all 200ms ease-in",
                            right: controlHoverStates[index]
                              ? `${TextPosition}`
                              : "0",
                          }}
                          onMouseEnter={(e) => {
                            setControlHoverStates((prev) => ({
                              ...prev,
                              [index]: true,
                            }));
                          }}
                          onMouseLeave={(e) => {
                            setControlHoverStates((prev) => ({
                              ...prev,
                              [index]: false,
                            }));
                          }}
                        >
                          <div className="text text-[18px]">Quick Play</div>
                          <FaRegCirclePlay
                            className="text-[28px] cursor-pointer"
                            onClick={() => {
                              PlayYouTube();


                              setYoutubeUrl(x.video);
                            }}
                          />
                        </div>
                        <div
                          className="play2 z-1 items-center absolute text-white font-medium"
                          onMouseEnter={(e) => {
                            setControlHoverStates((prev) => ({
                              ...prev,
                              [index]: true,
                            }));
                          }}
                          onMouseLeave={(e) => {
                            setControlHoverStates((prev) => ({
                              ...prev,
                              [index]: false,
                            }));
                          }}
                        >
                          <FaRegCirclePlay
                            className="text-[55px] cursor-pointer"
                            onClick={() => {
                              PlayYouTube();
                              setYoutubeUrl(x.video);
                            }}
                          />
                        </div>
                        <video
                          className="large-vi cursor-pointer"
                          muted
                          loop
                          poster={x.poster}
                          onMouseEnter={(e) => {
                            setControlHoverStates((prev) => ({
                              ...prev,
                              [index]: true,
                            }));
                          }}
                          onMouseLeave={(e) => {
                            setControlHoverStates((prev) => ({
                              ...prev,
                              [index]: false,
                            }));
                          }}
                        ></video>
                      </div>
                    ))
                  );
                }

              }
              return videoElements;
            })
            : null}
        </div>

        {TypeOfVideoToPrint !== "All"
          ? LargeVideoData?.map((X, index) => {
            return (
              <div
                className="video-large flex justify-center items-center mt-16 relative"
                key={index}
              >
                {/* Hover background (bg1) for large video */}
                <div
                  className="bg1 l-bg-1 absolute"
                  style={{
                    background: largeVideoHoverStates[index]
                      ? "black"
                      : "transparent",
                    width: largeVideoHoverStates[index]
                      ? `${hoverbg1bigWidth}`
                      : "0",
                    height: largeVideoHoverStates[index] ? "100%" : "0",
                    transition: "opacity 300ms ease-in",
                    opacity: largeVideoHoverStates[index] ? "0.6" : "0",
                  }}
                ></div>

                {/* Additional background (bg2) for large video */}
                <div
                  className="bg2 l-bg-2 absolute"
                  style={{
                    background: largeVideoHoverStates[index]
                      ? "black"
                      : "transparent",
                    transition: "all 300ms ease-in",
                    opacity: largeVideoHoverStates[index] ? "0.6" : "0",
                  }}
                ></div>

                {/* Text for large video */}
                <div
                  className="text Thisis left-[23%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                  style={{
                    opacity: largeVideoHoverStates[index] ? "1" : "0",
                    transition: "all 200ms ease-in",
                    top: largeVideoHoverStates[index] ? "2%" : "0",
                  }}
                >
                  <div className="small font-extralight text-[14px]">
                    Explainer Video
                  </div>
                </div>

                {/*  button */}
                <div
                  className="text viewpro top-[80%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                  style={{
                    opacity: largeVideoHoverStates[index] ? "1" : "0",
                    transition: "all 200ms ease-in",
                    left: largeVideoHoverStates[index] ? "23%" : "0",
                  }}
                >
                  <div className="small font-extralight text-[13px] flex items-center justify-center gap-2">
                    <span className="text-[14px]"> </span>

                  </div>
                </div>

                {/* Quick Play button */}
                <div
                  className="play flex gap-2 items-center top-[80%] absolute text-white font-medium pt-4 pl-3 z-1"
                  style={{
                    opacity: largeVideoHoverStates[index] ? "1" : "0",
                    transition: "all 200ms ease-in",
                    right: largeVideoHoverStates[index] ? "23%" : "0",
                  }}
                  onMouseEnter={(e) => {
                    setLargeVideoHoverStates((prev) => ({
                      ...prev,
                      [index]: true,
                    }));
                  }}
                  onMouseLeave={(e) => {
                    setLargeVideoHoverStates((prev) => ({
                      ...prev,
                      [index]: false,
                    }));
                  }}
                >
                  <div className="text text-[18px]">Quick Play</div>
                  <FaRegCirclePlay
                    className="text-[28px] cursor-pointer"
                    onClick={() => {
                      PlayYouTube();
                      setYoutubeUrl(X.largevideo);
                    }}
                  />
                </div>

                {/* Play icon for large video */}
                <div className="play2 items-center absolute text-white font-medium z-1">
                  <FaRegCirclePlay
                    className="text-[55px] cursor-pointer"
                    onClick={() => {
                      PlayYouTube();
                      setYoutubeUrl(X.largevideo);
                    }}
                    onMouseEnter={(e) => {
                      setLargeVideoHoverStates((prev) => ({
                        ...prev,
                        [index]: true,
                      }));
                    }}
                    onMouseLeave={(e) => {
                      setLargeVideoHoverStates((prev) => ({
                        ...prev,
                        [index]: false,
                      }));
                    }}
                  />
                </div>

                {/* Video player for large video */}
                <video
                  className="large-vi cursor-pointer"
                  muted
                  loop
                  poster={X.poster}
                  onMouseEnter={(e) => {
                    setLargeVideoHoverStates((prev) => ({
                      ...prev,
                      [index]: true,
                    }));
                  }}
                  onMouseLeave={(e) => {
                    setLargeVideoHoverStates((prev) => ({
                      ...prev,
                      [index]: false,
                    }));
                  }}
                ></video>
              </div>
            );
          })
          : null}

        <div className="videos">
          <div className="small-videos flex items-center justify-center flex-wrap w-full mt-6">
            {TypeOfVideoToPrint !== "All"
              ? DataToVideo?.map((X, index, arr) => {
                return (
                  <div
                    className="video-small flex justify-center items-center relative"
                    key={index}
                  >
                    {/* Hover background (bg1) for small video */}
                    <div
                      className="bg1 absolute"
                      style={{
                        background: smallVideoHoverStates[index]
                          ? "black"
                          : "transparent",
                        width: smallVideoHoverStates[index]
                          ? `${hoverbg1smallWidth}`
                          : "0",
                        height: smallVideoHoverStates[index] ? "100%" : "0",
                        transition: "opacity 300ms ease-in",
                        opacity: smallVideoHoverStates[index] ? "0.6" : "0",
                      }}
                    ></div>

                    {/* Additional background (bg2) for small video */}
                    <div
                      className="bg2 s-bg-2 absolute"
                      style={{
                        background: smallVideoHoverStates[index]
                          ? "black"
                          : "transparent",
                        transition: "all 300ms ease-in",
                        opacity: smallVideoHoverStates[index] ? "0.6" : "0",
                      }}
                    ></div>

                    {/* Text for small video */}
                    <div
                      className="text Thisis left-[5%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                      style={{
                        opacity: smallVideoHoverStates[index] ? "1" : "0",
                        transition: "all 200ms ease-in",
                        top: smallVideoHoverStates[index] ? "2%" : "0",
                      }}
                    >
                      <div>
                        This is a video
                        <div className="small font-extralight text-[14px]">
                          Explainer Video
                        </div>
                      </div>
                    </div>

                    {/*  button */}
                    <div
                      className="text viewpro top-[66%] text-[28px] font-semibold text-white absolute pt-4 pl-3"
                      style={{
                        opacity: smallVideoHoverStates[index] ? "1" : "0",
                        transition: "all 200ms ease-in",
                        left: smallVideoHoverStates[index] ? "5%" : "0",
                      }}
                    >
                      <div className="small font-extralight text-[13px] flex items-center justify-center gap-2">
                        <span className="text-[14px]"> </span>

                      </div>
                    </div>

                    {/* Quick Play button */}
                    <div
                      className="play flex gap-2 items-center top-[66%] absolute text-white font-medium pt-4 pl-3 z-1"
                      style={{
                        opacity: smallVideoHoverStates[index] ? "1" : "0",
                        transition: "all 200ms ease-in",
                        right: smallVideoHoverStates[index] ? "5%" : "0",
                      }}
                      onMouseEnter={(e) => {
                        // e.target.play();
                        setSmallVideoHoverStates((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      onMouseLeave={(e) => {
                        // e.target.pause();
                        // e.target.currentTime = 0;
                        setSmallVideoHoverStates((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                      }}
                    >
                      <div className="text text-[18px] ">Quick Play</div>
                      <div>
                        {" "}
                        <FaRegCirclePlay
                          className="text-[28px] cursor-pointer"
                          onClick={() => {
                            PlayYouTube();
                            setYoutubeUrl(X.video);
                          }}
                        />
                      </div>
                    </div>

                    {/* Play icon for small video */}
                    <div className="play2 items-center absolute text-white font-medium z-1  ">
                      <FaRegCirclePlay
                        className="text-[55px] cursor-pointer"
                        onClick={() => {
                          PlayYouTube();
                          setYoutubeUrl(X.video);
                        }}
                        onMouseEnter={(e) => {

                          setSmallVideoHoverStates((prev) => ({
                            ...prev,
                            [index]: true,
                          }));
                        }}
                        onMouseLeave={(e) => {

                          setSmallVideoHoverStates((prev) => ({
                            ...prev,
                            [index]: false,
                          }));
                        }}
                      />
                    </div>

                    {/* Video player for small video */}
                    <video
                      className="small-vi cursor-pointer"
                      muted
                      loop
                      poster={X.poster}
                      onMouseEnter={(e) => {
                        setSmallVideoHoverStates((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      onMouseLeave={(e) => {
                        setSmallVideoHoverStates((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                      }}
                    ></video>
                  </div>
                );
              })
              : null}
          </div>
        </div>

      </div>

    </WorkDiv>
  );
};

export default Work;

const WorkDiv = styled.div`
  /* background-image: url("/Project IMG/contactbg.png"); */
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

  .imagesSection {
    width: 94vw;
    background-color: #ffffff;
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.15);

    padding: 20px;

    .sec1img {
    }
  }

  .large-vi {
    width: 60.6vw;
   height: 470px;

   object-fit: cover;
   object-position: 20% 60%;
    transition: all 0.3s ease;
    @media (max-width: 1230px) {
      width: 95vw;
    }
    @media (max-width: 992px) {
      height: auto;
    }
    @media (max-width: 768px) {
      /* background-color: blue; */
      margin: 5px;

      /* height: 2000px; */
    }
  }
  .video-large {
    @media (max-width: 768px) {
      margin-top: 0px;
    }
  }

  .small-vi {
    width: 30vw;
    /* height: 400px; */
     height: 325px; 
     object-fit: cover;
    object-position: 20% 20%; 
    transition: all 0.3s ease;
    @media (max-width: 1230px) {
      width: 47vw;
    }
    @media (max-width: 992px) {
      width: 95vw;
      height: auto; 
     object-fit: cover;
    object-position: 20% 20%; 
    }
  }
  .small-videos {
    padding: 0px 5vw;
    /* object-fit: cover;
    object-position: 20% 20%; */
    gap: 13px;
    /* height: 400px; */
    /* background-color: red; */
    @media (max-width: 1230px) {
      padding: 0px 0vw;
    }

    @media (max-width: 992px) {
      gap: 30px;
    }
  }
  .video-small {
    @media (max-width: 992px) {
      padding-left: 11px;
      padding-right: 11px;
    }
  }
  .Thisis {
    @media (max-width: 992px) {
      display: none;
    }
  }

  .viewpro {
    @media (max-width: 992px) {
      display: none;
    }
  }
  .play {
    @media (max-width: 992px) {
      display: none;
    }
  }
  .play2 {
    display: none;
    @media (max-width: 992px) {
      display: block;
      top: 47%;
    }
    @media (max-width: 500px) {
      display: block;
      top: 40%;
    }
  }

  .bg2 {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 95vw;
      height: 100%;
    }
  }
  .s-bg-2 {
    @media (max-width: 992px) {
      width: 95%;
      height: 100%;
    }
    @media (max-width: 768px) {
      width: 94.5vw;
    }
  }
  .l-bg-2 {
    @media (max-width: 768px) {
      height: 96%;
    }
  }

  .bg1 {
    @media (max-width: 768px) {
      display: none;
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
  .ball-right{
    @media (max-width: 992px) {
     display: none;
    }
  
  }
  .ball2{
    width: 200px;
  }
  .multi-balls{
    @media (max-width:992px) {
      display: none;
    }
  }
`;
