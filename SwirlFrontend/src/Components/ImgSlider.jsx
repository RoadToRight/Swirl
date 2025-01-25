// import { useGSAP } from "@gsap/react";
import React, { useContext, useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.0/gsap.min.js";

// import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import Context1 from "../Context/Context1";
import { Link } from "react-router-dom";
import { Alldata } from "../creationsImg";
let images1 = [
  "/Project IMG/trust quay.png",
  "/Project IMG/rixius.png",
  "/Project IMG/quickvila.png",
  "/Project IMG/westermann.png",
  "/Project IMG/zoomprop.png",
  "/Project IMG/straw boss.png",
  "/Project IMG/website.png",
  "/Project IMG/recycle.png",
  "/Project IMG/trust quay.png",
  "/Project IMG/rixius.png",
  "/Project IMG/quickvila.png",
  "/Project IMG/westermann.png",
  "/Project IMG/zoomprop.png",
  "/Project IMG/straw boss.png",
  "/Project IMG/website.png",
  "/Project IMG/recycle.png",
  "/Project IMG/trust quay.png",
  "/Project IMG/rixius.png",
  "/Project IMG/quickvila.png",
  "/Project IMG/westermann.png",
  "/Project IMG/zoomprop.png",
  "/Project IMG/straw boss.png",
  "/Project IMG/website.png",
  "/Project IMG/recycle.png",
];
let images1Url = [
  "https://www.youtube.com/embed/-wJjmguH_oU?si=ENmbCOaV95tCjQXw",
  "https://www.youtube.com/embed/aTexngJxhHE?si=KySph3KgS-U0lpSX",
  "https://www.youtube.com/embed/_w7RCCjtMdI?si=gyuP0D5UyZc7L8Va",
  "https://www.youtube.com/embed/iM7WKPX2tQg?si=uABZu3rHRcnCXeuX",
  "https://www.youtube.com/embed/I382yokt2A8?si=TyjnnqWAELBsJed8",
  "https://www.youtube.com/embed/NzVM9PU0CvI?si=OvwebdSh6jpBq_ex",
  "https://www.youtube.com/embed/dRzZ3eKy29Q?si=0ILZfG9cEUluZqNH",
  "https://www.youtube.com/embed/0MoCR68sqJQ?si=4SYBEUHc0BfGulHH",

  "https://www.youtube.com/embed/-wJjmguH_oU?si=ENmbCOaV95tCjQXw",
  "https://www.youtube.com/embed/aTexngJxhHE?si=KySph3KgS-U0lpSX",
  "https://www.youtube.com/embed/_w7RCCjtMdI?si=gyuP0D5UyZc7L8Va",
  "https://www.youtube.com/embed/iM7WKPX2tQg?si=uABZu3rHRcnCXeuX",
  "https://www.youtube.com/embed/I382yokt2A8?si=TyjnnqWAELBsJed8",
  "https://www.youtube.com/embed/NzVM9PU0CvI?si=OvwebdSh6jpBq_ex",
  "https://www.youtube.com/embed/dRzZ3eKy29Q?si=0ILZfG9cEUluZqNH",
  "https://www.youtube.com/embed/0MoCR68sqJQ?si=4SYBEUHc0BfGulHH",

  "https://www.youtube.com/embed/-wJjmguH_oU?si=ENmbCOaV95tCjQXw",
  "https://www.youtube.com/embed/aTexngJxhHE?si=KySph3KgS-U0lpSX",
  "https://www.youtube.com/embed/_w7RCCjtMdI?si=gyuP0D5UyZc7L8Va",
  "https://www.youtube.com/embed/iM7WKPX2tQg?si=uABZu3rHRcnCXeuX",
  "https://www.youtube.com/embed/I382yokt2A8?si=TyjnnqWAELBsJed8",
  "https://www.youtube.com/embed/NzVM9PU0CvI?si=OvwebdSh6jpBq_ex",
  "https://www.youtube.com/embed/dRzZ3eKy29Q?si=0ILZfG9cEUluZqNH",
  "https://www.youtube.com/embed/0MoCR68sqJQ?si=4SYBEUHc0BfGulHH",
];
let images2 = [
  "/Project IMG/extentfiles.png",
  "/Project IMG/uncle.png",
  "/Project IMG/tag.png",
  "/Project IMG/Compassion Video.png",
  "/Project IMG/ai.png",
  "/Project IMG/zycada.png",
  "/Project IMG/tiger finance.png",
  "/Project IMG/northpoint.png",
  "/Project IMG/commitment.png",
  "/Project IMG/sprinto.png",
  "/Project IMG/game.png",
  "/Project IMG/Haive.png",

  "/Project IMG/extentfiles.png",
  "/Project IMG/uncle.png",
  "/Project IMG/tag.png",
  "/Project IMG/Compassion Video.png",
  "/Project IMG/ai.png",
  "/Project IMG/zycada.png",
  "/Project IMG/tiger finance.png",
  "/Project IMG/northpoint.png",
  "/Project IMG/commitment.png",
  "/Project IMG/sprinto.png",
  "/Project IMG/game.png",
  "/Project IMG/Haive.png",

  "/Project IMG/extentfiles.png",
  "/Project IMG/uncle.png",
  "/Project IMG/tag.png",
  "/Project IMG/Compassion Video.png",
  "/Project IMG/ai.png",
  "/Project IMG/zycada.png",
  "/Project IMG/tiger finance.png",
  "/Project IMG/northpoint.png",
  "/Project IMG/commitment.png",
  "/Project IMG/sprinto.png",
  "/Project IMG/game.png",
  "/Project IMG/Haive.png",
];
let images2Url = [
  "https://www.youtube.com/embed/_R0AEQCs_-w?si=XsGZLsA17JMPFQgv",
  "https://www.youtube.com/embed/ncVpiYwFBg4?si=eQveQp9g0Gyg1fY_",
  "https://www.youtube.com/embed/Br0x3dmyM0A?si=PiaHMZ13avfeU8Xf",
  "https://www.youtube.com/embed/NVtrZI31G2k?si=nk2DTg7V8FDhpC0t",
  "https://www.youtube.com/embed/UGRD0k_SC_I?si=UPmw-O0dRJ7FPgvR",
  "https://www.youtube.com/embed/Nn-0oKmNsG0?si=9FBFEnP5xPi5vMZ_",
  "https://www.youtube.com/embed/irgaeMl9fvQ?si=t8HU6ElKACDMTGeV",
  "https://www.youtube.com/embed/Bm0lHD9stfs?si=c_d3rBnzryMbwWSC",
  "https://www.youtube.com/embed/SBHs42FB3vc?si=khawvSses1e_jpxi",
  "https://www.youtube.com/embed/QOJI12yDgFk?si=QLGOz4-GERJMeZuV",
  "https://www.youtube.com/embed/se_6p5mOO2g?si=4e7tjHJuBFKbcF81",
  "https://www.youtube.com/embed/kncsl7USwPs?si=n6qgynph9-0MWCdk",

  "https://www.youtube.com/embed/_R0AEQCs_-w?si=XsGZLsA17JMPFQgv",
  "https://www.youtube.com/embed/ncVpiYwFBg4?si=eQveQp9g0Gyg1fY_",
  "https://www.youtube.com/embed/Br0x3dmyM0A?si=PiaHMZ13avfeU8Xf",
  "https://www.youtube.com/embed/NVtrZI31G2k?si=nk2DTg7V8FDhpC0t",
  "https://www.youtube.com/embed/UGRD0k_SC_I?si=UPmw-O0dRJ7FPgvR",
  "https://www.youtube.com/embed/Nn-0oKmNsG0?si=9FBFEnP5xPi5vMZ_",
  "https://www.youtube.com/embed/irgaeMl9fvQ?si=t8HU6ElKACDMTGeV",
  "https://www.youtube.com/embed/Bm0lHD9stfs?si=c_d3rBnzryMbwWSC",
  "https://www.youtube.com/embed/SBHs42FB3vc?si=khawvSses1e_jpxi",
  "https://www.youtube.com/embed/QOJI12yDgFk?si=QLGOz4-GERJMeZuV",
  "https://www.youtube.com/embed/se_6p5mOO2g?si=4e7tjHJuBFKbcF81",
  "https://www.youtube.com/embed/kncsl7USwPs?si=n6qgynph9-0MWCdk",

  "https://www.youtube.com/embed/_R0AEQCs_-w?si=XsGZLsA17JMPFQgv",
  "https://www.youtube.com/embed/ncVpiYwFBg4?si=eQveQp9g0Gyg1fY_",
  "https://www.youtube.com/embed/Br0x3dmyM0A?si=PiaHMZ13avfeU8Xf",
  "https://www.youtube.com/embed/NVtrZI31G2k?si=nk2DTg7V8FDhpC0t",
  "https://www.youtube.com/embed/UGRD0k_SC_I?si=UPmw-O0dRJ7FPgvR",
  "https://www.youtube.com/embed/Nn-0oKmNsG0?si=9FBFEnP5xPi5vMZ_",
  "https://www.youtube.com/embed/irgaeMl9fvQ?si=t8HU6ElKACDMTGeV",
  "https://www.youtube.com/embed/Bm0lHD9stfs?si=c_d3rBnzryMbwWSC",
  "https://www.youtube.com/embed/SBHs42FB3vc?si=khawvSses1e_jpxi",
  "https://www.youtube.com/embed/QOJI12yDgFk?si=QLGOz4-GERJMeZuV",
  "https://www.youtube.com/embed/se_6p5mOO2g?si=4e7tjHJuBFKbcF81",
  "https://www.youtube.com/embed/kncsl7USwPs?si=n6qgynph9-0MWCdk",
];
let images3 = [
  "/Project IMG/white.png",
  "/Project IMG/store.png",
  "/Project IMG/pet.png",
  "/Project IMG/zen market.png",
  "/Project IMG/burners.png",
  "/Project IMG/olx.png",
  "/Project IMG/cyber.png",
  "/Project IMG/property.png",
  "/Project IMG/promise.png",
  "/Project IMG/health.png",

  "/Project IMG/white.png",
  "/Project IMG/store.png",
  "/Project IMG/pet.png",
  "/Project IMG/zen market.png",
  "/Project IMG/burners.png",
  "/Project IMG/olx.png",
  "/Project IMG/cyber.png",
  "/Project IMG/property.png",
  "/Project IMG/promise.png",
  "/Project IMG/health.png",

  "/Project IMG/white.png",
  "/Project IMG/store.png",
  "/Project IMG/pet.png",
  "/Project IMG/zen market.png",
  "/Project IMG/burners.png",
  "/Project IMG/olx.png",
  "/Project IMG/cyber.png",
  "/Project IMG/property.png",
  "/Project IMG/promise.png",
  "/Project IMG/health.png",
];
let images3Url = [
  "https://www.youtube.com/embed/qextxBCf1tg?si=MDO23N3WRaUSRWvu",
  "https://www.youtube.com/embed/I9L5hG2psIo?si=5dT3sxztQ4XyalVU",
  "https://www.youtube.com/embed/VuIxarvKIQ0?si=-FeC-tR-PoLB_2c3",
  "https://www.youtube.com/embed/otePY-mmumA?si=6sFxqP83YNT5uuTG",
  "https://www.youtube.com/embed/HdvVRbJNuYM?si=_KaFDPYj0kA_ZUOL",
  "https://www.youtube.com/embed/mf789YBsUFo?si=cLGEahZWMO7MUKts",
  "https://www.youtube.com/embed/LIMwCtLpnao?si=rn5D4MgSlLMFe9GP",
  "https://www.youtube.com/embed/vnC6P0Sx5Z8?si=SHPwOU5rRf7IkxRd",
  "https://www.youtube.com/embed/HLmJZaNWgs8?si=30Bbjy5oDSwxbO7G",
  "https://www.youtube.com/embed/E01MegVNVJo?si=_dzx_-eKs5qN0EMH",

  "https://www.youtube.com/embed/qextxBCf1tg?si=MDO23N3WRaUSRWvu",
  "https://www.youtube.com/embed/I9L5hG2psIo?si=5dT3sxztQ4XyalVU",
  "https://www.youtube.com/embed/VuIxarvKIQ0?si=-FeC-tR-PoLB_2c3",
  "https://www.youtube.com/embed/otePY-mmumA?si=6sFxqP83YNT5uuTG",
  "https://www.youtube.com/embed/HdvVRbJNuYM?si=_KaFDPYj0kA_ZUOL",
  "https://www.youtube.com/embed/mf789YBsUFo?si=cLGEahZWMO7MUKts",
  "https://www.youtube.com/embed/LIMwCtLpnao?si=rn5D4MgSlLMFe9GP",
  "https://www.youtube.com/embed/vnC6P0Sx5Z8?si=SHPwOU5rRf7IkxRd",
  "https://www.youtube.com/embed/HLmJZaNWgs8?si=30Bbjy5oDSwxbO7G",
  "https://www.youtube.com/embed/E01MegVNVJo?si=_dzx_-eKs5qN0EMH",

  "https://www.youtube.com/embed/qextxBCf1tg?si=MDO23N3WRaUSRWvu",
  "https://www.youtube.com/embed/I9L5hG2psIo?si=5dT3sxztQ4XyalVU",
  "https://www.youtube.com/embed/VuIxarvKIQ0?si=-FeC-tR-PoLB_2c3",
  "https://www.youtube.com/embed/otePY-mmumA?si=6sFxqP83YNT5uuTG",
  "https://www.youtube.com/embed/HdvVRbJNuYM?si=_KaFDPYj0kA_ZUOL",
  "https://www.youtube.com/embed/mf789YBsUFo?si=cLGEahZWMO7MUKts",
  "https://www.youtube.com/embed/LIMwCtLpnao?si=rn5D4MgSlLMFe9GP",
  "https://www.youtube.com/embed/vnC6P0Sx5Z8?si=SHPwOU5rRf7IkxRd",
  "https://www.youtube.com/embed/HLmJZaNWgs8?si=30Bbjy5oDSwxbO7G",
  "https://www.youtube.com/embed/E01MegVNVJo?si=_dzx_-eKs5qN0EMH",
];

const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SmallImg = useRef();
  const SmallImg2 = useRef();
  const [Small2, setSmall2] = useState(false);
  const { PlayYouTubeCard, setYoutubeUrl, ProjectSlider,setSlideLoad } =
    useContext(Context1);
  const [SlideImagesLoad, setSlideImagesLoad] = useState(images1.reduce((acc, _, index) => {
    // Using reduce to accumulate the key-value pairs in an object
    acc[`${index}-SlideAll1`] = false;
    return acc;
  }, {}))
  const [SlideImagesLoad2, setSlideImagesLoad2] = useState(images1.reduce((acc, _, index) => {
    // Using reduce to accumulate the key-value pairs in an object
    acc[`${index}-SlideAll2`] = false;
    return acc;
  }, {}))
  const [SlideImagesLoad3, setSlideImagesLoad3] = useState(images1.reduce((acc, _, index) => {
    // Using reduce to accumulate the key-value pairs in an object
    acc[`${index}-SlideAll3`] = false;
    return acc;
  }, {}))
  // Set up the interval to update the image every 3 seconds (3000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length); // Loop back to the first image after the last
    }, 3000); // Change image every 3 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

useEffect(() => {
 
  let allTrue1 = Object.values(SlideImagesLoad).every(value => value === true);
  let allTrue2 = Object.values(SlideImagesLoad2).every(value => value === true);
  let allTrue3 = Object.values(SlideImagesLoad3).every(value => value === true);

  if(allTrue1 && allTrue2 && allTrue3){
    setSlideLoad(false)
  }else{
    setSlideLoad(true)
  }

}, [SlideImagesLoad,SlideImagesLoad2,SlideImagesLoad3])
const setImageSlides = (index,slide) => {
  
  setSlideImagesLoad((prev) => ({                    
    ...prev, // Spread the previous state to keep the existing data
    [`${index}-${slide}`]: true // Add or update the key-value pair for the specific index
      }))
}
const setImageSlides2 = (index,slide) => {
  
  setSlideImagesLoad2((prev) => ({                    
    ...prev, // Spread the previous state to keep the existing data
    [`${index}-${slide}`]: true // Add or update the key-value pair for the specific index
      }))
}
const setImageSlides3 = (index,slide) => {
  
  setSlideImagesLoad3((prev) => ({                    
    ...prev, // Spread the previous state to keep the existing data
    [`${index}-${slide}`]: true // Add or update the key-value pair for the specific index
      }))
}
  const YoutubeUrlSetterLarge = (index) => {
    images1Url.forEach((x, i) => {
      if (index === i) {
        setYoutubeUrl(x);
      }
    });
  };
  const YoutubeUrlSetterSmall1 = (index) => {
    images2Url.forEach((x, i) => {
      if (index === i) {
        setYoutubeUrl(x);
      }
    });
  };
  const YoutubeUrlSetterSmall2 = (index) => {
    images3Url.forEach((x, i) => {
      if (index === i) {
        setYoutubeUrl(x);
      }
    });
  };
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
            <div className="relative flex-shrink-0 imgL-parent rounded-3xl" key={index}>
              { }
              <FaPlay
                className={`play  text-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer flex-shrink-0`}
                onClick={() => {
                  PlayYouTubeCard();
                  YoutubeUrlSetterLarge(index);
                }}
              />
              <img
                key={index}
                src={image}
                className="img1  w-[55vw] h-[475px] object-cover object-cover flex-shrink-0 rounded-3xl"
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
        {images2.map((x, index) => {
          return (
            <div className="relative flex-shrink-0 img2-parent rounded-lg">
              <FaPlay
                className={`play  text-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer flex-shrink-0`}
                onClick={() => {
                  PlayYouTubeCard();
                  YoutubeUrlSetterSmall1(index);
                }}
                
              />
              <img
                src={x}
                className="img2  w-[500px] h-[240px] object-cover flex-shrink-0 rounded-lg"
          
              />
            </div>
          );
        })}
      </div>
      <br />

      <div className="sec3-parent flex gap-4 w-full relative" ref={SmallImg}>
        {images3.map((x, index) => {
          return (
            <div className="relative flex-shrink-0 img2-parent rounded-lg">
              <FaPlay
                className={`play  text-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer flex-shrink-0`}
                onClick={() => {
                  PlayYouTubeCard();
                  YoutubeUrlSetterSmall2(index);
                }}
              />
              <img
                src={x}
                className="img2  w-[500px] h-[240px] object-cover flex-shrink-0 rounded-lg"
            
              />
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
      height: auto;
    }
    @media (max-width: 600px) {
      /* height: auto; */
      border-radius: 8px;
      width: 400px;
      height: 200px;
    }

    @media (max-width: 510px) {
      width: 100vw;
    }
  }

  .img2 {
    cursor: pointer;
    transition: all 300ms ease-in-out;
    @media (max-width: 600px) {
      /* height: auto; */
      width: 400px;
      height: 200px;
    }
  }
  .play {
    opacity: 0;
    transition: all 300ms ease-in-out;
    color: white;
  }
  .play:hover {
    color: #c813e498;
  }
  .imgL-parent {
    transition: all 300ms ease-in-out;
  }
  .imgL-parent:hover {
    scale: 1.01;
    box-shadow: 3px 4px 12px 1px rgba(199, 19, 228, 1);

    .img1 {
      opacity: 0.8;
    }
    .play {
      opacity: 1;
    }
  }
  .img2-parent {
    transition: all 300ms ease-in-out;
  }
  .img2-parent:hover {
    scale: 1.05;
    box-shadow: 3px 4px 12px 1px rgba(199, 19, 228, 1);

    .img2 {
      opacity: 0.8;
    }
    .play {
      opacity: 1;
    }
  }
  .img3 {
    @media (max-width: 600px) {
      /* height: auto; */
      width: 400px;
      height: 200px;
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
