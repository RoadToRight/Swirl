import React, { useContext,useEffect  } from "react";
import styled from "styled-components";
import Context1 from "../Context/Context1";
// import { useGSAP } from '@gsap/react';
// import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Quotes = () => {

    
  const {DarkLight ,Testinomials } = useContext(Context1)


  useEffect(() => {
    // GSAP animation using the global `gsap` from window object
    window.gsap.from('.Quote', {
      x: -300,  // Start from 200px below the element's initial position
      opacity: 0,  // Start from 0 opacity
      duration: 1,  // Duration for the animation
      ease: 'power3.out',  // Easing function to smooth the transition
      scrollTrigger: {
        trigger: '.Quote',  // The element to trigger the animation
        start: '18% 80%',  // Start animation when the top of the element reaches 80% from the top of the viewport
        end: 'bottom 30%',    // End when the top of the element reaches 30% from the top of the viewport
        scrub: 1,  // Smoothly scrub the animation based on scroll position
        // markers: true,  // Show scroll trigger markers for debugging (you can remove it once you're done debugging)
      },
    });
  }, []);


  let Textcolor = DarkLight ? "black" : "white" 
  let bgcolor = DarkLight ? "bg-lightpurple" : "bg-[#230646]" ;
  let bgcolor2 = DarkLight ? "white" : "black" ;
  return (
    <div className={`bg-${bgcolor2} ` } ref={Testinomials}>
    <QuotesDiv className={`bg-${bgcolor2} Quote`}>
      <div className="text container flex items-center justify-center flex-col gap-3">
        <div className="text-[14px] leading-[20px] font-normal text-darkpink text-center ">
          Testimonials
        </div>
        <div className={`bigText w-[712px] h-[48px] font-bold text-[38px] text-center  flex items-center justify-center text-${Textcolor}`}>
          What our clients say about us
        </div>
      </div>
      <br />
      <br />
      <div className="quotes gap-4">
    

    <div className="sec-1 flex flex-col gap-8">
    <div className={`Rectangle Rectangle-sec-1 ${bgcolor} w-[340px] relative p-4 rounded-3xl h-[435px]`}>
          <img
            src={DarkLight ? "/Project IMG/Vector.png" : "/Project IMG/Vectordark.png"}
            alt=""
            className="w-24 h-22 absolute top-5 left-5 img"
          />

          <div className={`qoute relative z-1 font-normal leading-[34px] top-5 text-${Textcolor}`}>
            I can only repeat what I have already said about Swirl365 work, it
            is exceptional work, always punctual, and open to any proposal for
            improvement. Without a doubt, my trusted agency for these jobs.
            1,000% recommended.Without a doubt, my trusted agency for these jobs.
            
          </div>
          <br />
          <br />
          <img
            src="/Project IMG/quoteimg1.png"
            alt=""
            className="relative z-1 -left-2"
          />
          
        </div>
        <div className={`Rectangle ${bgcolor} w-[340px] relative p-4 rounded-3xl`}>
          <img
            src={DarkLight ? "/Project IMG/Vector.png" : "/Project IMG/Vectordark.png"}
            alt=""
            className="w-24 h-22 absolute top-5 left-5 img"
          />

          <div className={`qoute relative z-1 font-normal leading-[34px] top-5 text-${Textcolor}`}>
          Very professional. Very patient. Amazing job.
          </div>
          <br />
          <div className="flex items-center pl-3">
            <img
              src="/Project IMG/q4.png"
              alt=""
              className="relative z-1 -left-2"
            />
            <label className={`font-bold leading-[24px] z-1`}>Eric</label>
            </div>
          
        </div>
    </div>

        <div className="sec-2 flex flex-col gap-4">
          <div className={`Rectangle ${bgcolor} w-[340px] relative p-4 rounded-3xl`}>
            <img
              src={DarkLight ? "/Project IMG/Vector.png" : "/Project IMG/Vectordark.png"}
              alt=""
              className="w-24 h-22 absolute top-5 left-5 img "
            />

            <div className={`qoute relative z-1 font-normal leading-[34px] top-5 text-${Textcolor}`}>
              Great to work on a project again. Quality you can depend on.
            </div>
            <br />
            <img
              src="/Project IMG/q2.png"
              alt=""
              className="relative z-1 -left-2 "
            />
          </div>
          <div className={`Rectangle ${bgcolor}  w-[340px] relative p-4 rounded-3xl`}>
            <img
              src={DarkLight ? "/Project IMG/Vector.png" : "/Project IMG/Vectordark.png"}
              alt=""
              className="w-24 h-22 absolute top-5 left-5 img"
            />

            <div className={`qoute relative z-1 font-normal leading-[34px] top-5 text-${Textcolor}`}>
              Syed, it really looks great! Love the overall video! TY TY TY!
            </div>
            <br />
            <img
              src="/Project IMG/q3.png"
              alt=""
              className="relative z-1 -left-2"
            />
         
          </div>

          <div className={`Rectangle ${bgcolor} w-[340px] relative p-4 rounded-3xl`}>
            <img
              src={DarkLight ? "/Project IMG/Vector.png" : "/Project IMG/Vectordark.png"}
              alt=""
              className="w-24 h-22 absolute top-5 left-5 img"
            />

            <div className={`qoute relative z-1 font-normal leading-[34px] top-5 text-${Textcolor}`}>
              Exceptional work. Always delivered on time and with good communication. Did all of his work custom made. Highly recommend Swirl365
            </div>
            <br />
            <br />
            <div className="flex tems-center pl-3">
            <img
              src="/Project IMG/q5.png"
              alt=""
              className="relative z-1 -left-2"
            />
            <label className={`font-bold leading-[24px] z-1`}>niffostudios's</label>
            </div>
          </div>

        </div>

    <div className="sec-3">
    <div className={`Rectangle2 ${bgcolor} w-[430px] relative p-4 rounded-3xl`}>
            <img
              src={DarkLight ? "/Project IMG/Vector.png" : "/Project IMG/Vectordark.png"}
              alt=""
              className="w-24 h-22 absolute top-5 left-5 img"
            />

            <div className={`qoute relative z-1 font-normal leading-[34px] top-5 text-${Textcolor}`}>
            We had the pleasure of working with Swirl365 on creating animated videos, and the experience was absolutely fantastic. Swirl365 is a true professional agency with a rare talent for executing creative projects. From the very beginning, it was clear that he understood exactly what we were looking for and was able to translate our ideas into high-quality animated videos. Throughout the entire process, Swirl365 demonstrated a positive attitude, complete flexibility, and an impressive ability to grasp our needs. He delivered on time, was always open to feedback, and implemented every request with precision and professionalism. The quality of the work was outstanding, with smooth animations, visually captivating.
            </div>
            <br />
            <br />
            <div className="flex items-center pl-3">
            <img
              src="/Project IMG/q6.png"
              alt=""
              className="relative z-1 -left-2"
            />
            <label className="font-bold leading-[24pxz-1  ]">Yuval Gakman</label>
            </div>
          </div>
    </div>

      </div>
    </QuotesDiv>
    </div>
  );
};

export default Quotes;

const QuotesDiv = styled.div`
  padding: 55px 0px;
  @media (max-width:724px) {
   
   display: none;
  }
  .quotes {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Rectangle {
    max-height: auto;
    
    @media (max-width:1200px) {
      width: 340px;
      font-size: 11px;
     
      font-weight: 1000;
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    @media (max-width:1055px) {
   
      padding-left: 12px !important;
      padding-right: 12px !important;
}
    .qoute{
      @media (max-width:1200px) {
   
        line-height: 25px;
     
    }
    }
  }
  .Rectangle2{
    max-height: auto;
    
    @media (max-width:1200px) {
      width: 340px;
      font-size: 10.5px;
     height: 460px;
      font-weight: 1000;
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    @media (max-width:1055px) {
   
      display: none;
  }
    .qoute{
      @media (max-width:1200px) {
   
        line-height: 25px;
     
    }
    }

    
  }
  

  .Rectangle-sec-1{
    @media (max-width:1200px) {
   
      height: 300px;
  }
  }
  .img {
    z-index: 0;
  }

  .quotes{
    @media (max-width:1200px) {
   
      gap: 6px !important;
    

}
@media (max-width:1055px) {
   
  gap: 20px !important;
  padding-left: 20px;
}

  }
  .sec-1{
    @media (max-width:1200px) {
   display: flex;
   gap: 10px !important;
    

}
  }
  
 .sec-2{

  @media (max-width:1200px) {
   display: flex;
   gap: 10px !important;
    

}

 }
`;
