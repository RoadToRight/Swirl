import React, { useContext, useEffect, useRef, useState } from "react";
import Context1 from "../Context/Context1";
import styled from "styled-components";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.0/gsap.min.js";

const TopBrandsWithCircle = () => {
  const { DarkLight } = useContext(Context1);
  const [circle, setcircle] = useState(3);
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
  const [brandsAnimation, setbrandsAnimation] = useState(false)
  let top = useRef(null);
  
  const animation = useRef(null);
  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "white" : "transparent";
// console.log(top)
useEffect(() => {

  
  if (brandsAnimation && top.current) {
    // If brandsAnimation is true, create the animation
    if (!animation.current) {
      animation.current = window.gsap.fromTo(
        top.current,
        { x: 0 },
        {
          x: -1000,
       
          duration: 20,
          repeat: -1,
          yoyo: true,
        }
      );
    }
  } else if (animation.current) {
    // If brandsAnimation is false, stop and reset the animation

    animation.current.kill();
    window.gsap.set(top.current, { x: 0 });
    animation.current = null;
    // animation.current.restart(); 
  }

}, [brandsAnimation]);



  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    useEffect(() => {
      
        if(WindowWidth < 1490){
          setbrandsAnimation(true)
          // console.log("dsa")
 
        }else{
          setbrandsAnimation(false)
        }
   
  
    }, [WindowWidth])
    

  return (
    <TopBrandsDiv className={`bg-${bgcolor}`} onClick={() => setcircle(60)}>
      <div>
        <div className="text text-[17px] font-bold leading-[25px] text-center mb-6 text-[#C707E4]">
          Testimonials
        </div>
        <div
          className={`text text-[17px] font-medium leading-[25px] text-center text-${Textcolor}`}
        >
          Used by over 450+ of the world's best startups and established
          enterprises
        </div>

        <div className="logos mt-6" ref={top}>
          <div className="img-div"
          >
            <img src="/Project IMG/top1.png" alt="" />
            <img src="/Project IMG/top2.png" alt="" />
            <img src="/Project IMG/top3.png" alt="" />
            <img src="/Project IMG/top4.png" alt="" />
            <img src="/Project IMG/top6.png" alt=""  />
            <img src="/Project IMG/top9.png" alt="" />
            <img src="/Project IMG/top7.png" alt="" />
            <img src="/Project IMG/top8.png" alt="" />
            <img src="/Project IMG/top5.png" alt="" />
            
          </div>
          {brandsAnimation ? <>
            <div className="img-div">
            <img src="/Project IMG/top1.png" alt="" />
            <img src="/Project IMG/top2.png" alt="" />
            <img src="/Project IMG/top3.png" alt="" />
            <img src="/Project IMG/top4.png" alt="" />
            <img src="/Project IMG/top6.png" alt="" />
            <img src="/Project IMG/top9.png" alt="" />
            <img src="/Project IMG/top7.png" alt="" />
            <img src="/Project IMG/top8.png" alt="" />
            <img src="/Project IMG/top5.png" alt="" />
          </div>
          
          <div className="img-div">
            <img src="/Project IMG/top1.png" alt="" />
            <img src="/Project IMG/top2.png" alt="" />
            <img src="/Project IMG/top3.png" alt="" />
            <img src="/Project IMG/top4.png" alt="" />
            <img src="/Project IMG/top6.png" alt="" />
            <img src="/Project IMG/top9.png" alt="" />
            <img src="/Project IMG/top7.png" alt="" />
            <img src="/Project IMG/top8.png" alt="" />
            <img src="/Project IMG/top5.png" alt="" />
          </div>
          </> : null}
        
        </div>
      </div>
    </TopBrandsDiv>
  );
};

export default TopBrandsWithCircle;

const TopBrandsDiv = styled.div`
  padding: 70px 10px 10px 10px;

  transition: all 300ms ease;

  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: all 300ms ease;
  }

  .img-div {
    display: flex;
    flex-shrink: 0;
    gap: 20px;
    align-items: center;
    justify-content: center;
    /* animation: slide 5s infinite linear; */
    will-change: transform;  /* Hint for the browser to optimize animations */
    transition: all 300ms ease;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-60%); /* Adjust percentage based on the desired amount of scrolling */
    }
    100% {
      transform: translateX(0);
    }
  }
`;

