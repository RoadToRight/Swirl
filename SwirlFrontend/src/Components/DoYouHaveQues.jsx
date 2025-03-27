import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AccordianCompo from "./Accordian";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const DoYouHaveQues = () => {
  const { DarkLight } = useSelector((state) => state.Custom);
  let Textcolor = DarkLight ? "black" : "white";

  let bgcolor2 = DarkLight ? "white" : "black";
  let Questions = useRef(null);
  let qchild = useRef();
  const location = useLocation();
  const scrollToElement = (id) => {
    let elementToScroll = null; // Initialize to null
    switch (id) {
      case "questions":
        elementToScroll = Questions.current;
        break;
      default:

        return; // Important: Exit early if no element is found
    }

    if (elementToScroll) {
      elementToScroll.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  useEffect(() => {
    let targetId;
    if (location.hash) {
       targetId = location.hash.substring(1);
      console.log(targetId);
     
    }
    if(targetId){
      scrollToElement(targetId);
    }
  }, [location]);
  useEffect(() => {
    window.gsap.from(qchild.current, {
      y: 400, // Start from 200px below the element's initial position
      opacity: 0, // Start from 0 opacity
      duration: 1, // Duration for the animation
      ease: "power3.out", // Easing function to smooth the transition
      scrollTrigger: {
        trigger: Questions.current, // The element to trigger the animation
        start: "-33% 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
  }, []);

  //   useEffect(() => {
  //          window.gsap.registerPlugin(window.ScrollTrigger);
  //   window.ScrollTrigger.refresh();
  // }, [location])

  return (
    <ParentDiv className={`bg-${bgcolor2}`} ref={Questions}>
      <div className="container q" ref={qchild}>
        <div
          className={`head text-${Textcolor} font-bold text-[37px] leading-[55px]  flex items-center justify-center`}
        >
          Do You Have Questions?
        </div>
        <br />
        <AccordianCompo
          Question={"What services does Swirl365 offer?"}
          Answer={
            "We provide 2D explainer video production and web development services."
          }
        />
        <AccordianCompo
          Question={"How long does it take to create a 2D explainer video?"}
          Answer={
            "It typically takes 2-4 weeks, depending on complexity and duration."
          }
        />

        <AccordianCompo
          Question={"What is your process for 2D explainer videos?"}
          Answer={
            "We follow a structured process: script, storyboard, animation, and final delivery."
          }
        />

        {/* <AccordianCompo Question={"What web development services do you provide?"} Answer={"We create responsive websites, e-commerce platforms, and offer maintenance."}/> */}
        <AccordianCompo
          Question={"How much do your services cost?"}
          Answer={
            "Costs depend on the project scope; contact us for a detailed quote."
          }
        />
        <AccordianCompo
          Question={"Do you work with international clients?"}
          Answer={
            "Yes, we work with clients globally and deliver high-quality remote services."
          }
        />
        <AccordianCompo
          Question={"What do I need to provide to start a project?"}
          Answer={
            "For videos: product details; for websites: objectives, content, and design preferences."
          }
        />

        <br />
      </div>
    </ParentDiv>
  );
};

export default DoYouHaveQues;

const ParentDiv = styled.div`
  overflow: hidden;
  padding: 35px 0px;
  padding-bottom: 120px;
  .head {
    @media (max-width: 468px) {
      font-size: 30px;
    }
    @media (max-width: 370px) {
      font-size: 25px;
    }
  }
  .accrodian {
    width: 1240px;
    border-bottom: 1px solid #e3e3e3;
  }
  .custom-accordion .accordion-item {
    border: none;
    border-bottom: 1px solid #e3e3e3;
  }
  .custom-accordion .accordion-button {
    background-color: white;
    border: none;
    outline: none;
    transition: background-color 0.3s ease;
  }
  .custom-accordion .accordion-button:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  .custom-accordion .accordion-body {
    overflow: hidden;
    max-height: 0; /* Collapsed state starts at max-height: 0 */
    padding: 0 1.25rem;
    transition: all 300ms ease-in-out; /* Transition for max-height and padding */
  }
  .custom-accordion .accordion-button:not(.collapsed) + .accordion-body {
    max-height: 1000px; /* A large enough max-height value for expansion */
    padding: 1rem 1.25rem; /* Optional padding adjustment when expanded */
  }
`;
