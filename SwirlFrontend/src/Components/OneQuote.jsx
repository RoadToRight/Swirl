import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";

const OneQuote = () => {
  const { DarkLight } = useSelector((state) => state.Custom);
  const [number, setnumber] = useState(0)
  const [Quote, setQuote] = useState(  {
    Quote:`  “I can only repeat what I have already said about Swirl365 work, it
          is exceptional work, always punctual, and open to any proposal for
          improvement. Without a doubt, my trusted agency for these jobs.
          1,000% recommended.”`,
    logo:"",
    logoText:""
  },);
  const DataAnime = useRef();

  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "white" : "black";
  
let Data = [
  {
    Quote:`  “I can only repeat what I have already said about Swirl365 work, it
          is exceptional work, always punctual, and open to any proposal for
          improvement. Without a doubt, my trusted agency for these jobs.
          1,000% recommended.”`,
    logo:"https://res.cloudinary.com/diyha1kd9/image/upload/v1741214501/darguba2_mkb8lj.webp",
    logoText:"Dargubra"
  },
  {
    Quote:`  “Very professional. Very patient. Amazing job.”`,
    logo:"https://res.cloudinary.com/diyha1kd9/image/upload/v1741214464/Quote2_dvrfw0.webp",
    logoText:"Eric"
  },
  {
    Quote:`  “Great to work on a project again. Quality you can depend on.”`,
    logo:"https://res.cloudinary.com/diyha1kd9/image/upload/v1741214465/Quote3_zmxdf8.webp",
    logoText:"Martin"
  },
  {
    Quote:`  “Exceptional work. Always delivered on time and with good communication. Did all of his work custom made. Highly recommend Swirl365”`,
    logo:"https://res.cloudinary.com/diyha1kd9/image/upload/v1741214466/Quote4_qsbtjp.webp",
    logoText:"niffostudios's"
  }
]

const handleClick = () => {
  gsap.from(DataAnime.current, {
    x: -60,  // Start from 60px left of the element's initial position
    opacity: 0,  // Start from 0 opacity
    duration: 1.5,  // Adjusted duration for smoother animation
    ease: 'power3.out',  // Easing function to smooth the transition
  });
};


useEffect(() => {

  setQuote(Data[number])

}, [number])

  const changeQuote = () => {
    setnumber((prevNumber) => {
      if (prevNumber < Data.length - 1) {
        return prevNumber + 1;
      } else {
        return 0; // Reset to first quote
      }
    });
  };

  const changeQuoteReverse = () => {
    setnumber((prevNumber) => {
      if (prevNumber > 0) {
        return prevNumber - 1;
      } else {
        return Data.length - 1; // Move to the last quote
      }
    });
  
  };
  
  return (
    <OneQuoteDiv className={`bg-${bgcolor}`}>
      <div className="text container flex justify-center items-center">
        <div
          className={`text-leftt font-bold text-[40px] leading-[55.67px] text-${Textcolor}`}
        >
          And loved by our customers
          <div className="design flex  font-extralight text-[50px]">
            <span className="text-[#C707E4] cursor-pointer">
              <MdOutlineKeyboardArrowLeft  onClick={() =>{ changeQuoteReverse(); handleClick()}}/>
            </span>
            <span className="text-[#C707E4]  cursor-pointer">
              <MdKeyboardArrowRight  onClick={() => {changeQuote(); handleClick()}}/>
            </span>
          </div>
        </div>

        <div className="text-rightt text-[28px]" ref={DataAnime}>
            
  
              <i className={`text-${Textcolor}`}>{Quote.Quote} </i>
      
        
          <div className="logo mt-3 flex gap-3 items-center">
            <img
            className={`w-[60px] bg-white rounded-full`}
              src={`${
              
                Quote.logo
                  
              }`}
              alt="Quotelogo"
            />
           <div className={`title text-${Textcolor}`}>{Quote.logoText}</div>
          </div>
        </div>
      </div>
    </OneQuoteDiv>
  );
};

export default OneQuote;

const OneQuoteDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45vh;

  padding-bottom: 80px;
  padding-top: 80px;
  @media (max-width: 830px) {
    padding-bottom: 150px;
    padding-top: 0px;
  }
  .text {
    display: grid;
    grid-template-columns: 20% 60%;
    place-items: center;
    gap: 100px;
    @media (max-width: 658px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      gap: 30px;
    }
    @media (max-width: 520px) {
      gap: 20px;
    }
    .text-rightt {
      @media (max-width: 830px) {
        font-size: 20px;
      }
      @media (max-width: 658px) {
        font-size: 3vw;
      }
      @media (max-width: 520px) {
        font-size: 4vw;
      }
    }
    .text-leftt {
      @media (max-width: 658px) {
        font-size: 6vw;
      }
      @media (max-width: 520px) {
        font-size: 7vw;
      }
      @media (max-width: 320px) {
        font-size: 6.9vw;
      }
    }
  }
  .logo {
    @media (max-width: 658px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .design {
    @media (max-width: 658px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .title {
    color: white;
    font-size: 15px;
  }
`;
