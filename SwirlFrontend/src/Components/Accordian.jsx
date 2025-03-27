import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const AccordianCompo = ({ Question,Answer }) => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open accordion item
  const { DarkLight } = useSelector((state) => state.Custom);

  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor2 = DarkLight ? "white" : "black";

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if the same item is clicked
    } else {
      setOpenIndex(index); // Open the clicked accordion item
    }
  };

  return (
    <Accordian className={`w-full mx-auto accx`}>
      <div className="last:border-none">
        <div
          onClick={() => handleToggle(0)}
          className={`flex justify-between items-center p-4 cursor-pointer bg-${bgcolor2}`}
        >
          <span className={`text-base font-semibold text-${Textcolor}`}>
            {Question}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-4 transform ${
              openIndex === 0 ? "rotate-180" : ""
            } text-${Textcolor}`}
            style={{ transition: "all 0.3s ease" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          style={{
            padding: openIndex === 0 ? "1rem" : "0", // Adjust padding when open
            opacity: openIndex === 0 ? "1" : "0",
            maxHeight: openIndex === 0 ? "1000px" : "0", // Transitioning max-height between 0 and 1000px
            transition: "all 0.3s ease", // Smooth transition
          }}
          className={`overflow-hidden bg-${bgcolor2}`} // Set background color to white
        >
          <div className={`text-${Textcolor} pl-2`}>
        {Answer}
          </div>
        </div>
      </div>
      <div className="hr bg-[#525252] "></div>
    </Accordian>
  );
};

export default AccordianCompo;

const Accordian = styled.div`
  .hr {
    height: 0.1px;
    opacity: 0.4;
  }
`;
