import React, { useContext } from "react";

import styled from "styled-components";
import Card2 from "./Card2";
import Context1 from "../Context/Context1";

const MultiCards = () => {
  const { DarkLight } = useContext(Context1);

  let Textcolor = DarkLight ? "black" : "white";
  let Textcolor2 = DarkLight ? "black" : "#C707E4";
  let bgcolor = DarkLight ? "white" : "black";

  return (
    <MultiCardsDiv className={`bg-${bgcolor}`}>
      <div className="text py-12 px-12">
        <div
          className={`big font-bold leading-[38px] text-[35px] text-center text-${Textcolor}`}
        >
          Tangible outcomes for tech brands and industries that are driving
          technical innovation
        </div>
        <div
          className={`small leading-[25px] font-normal text-center text-${Textcolor} mt-4`}
        >
          Delivering real results for tech brands. Empowering industries with
          technical innovation. Achieving measurable success. Driving progress
          through cutting-edge solutions.
        </div>
      </div>
      <div className={`CARDS-DIV-PARENT flex flex-col gap-4 `}>
        <div className="card-div">
          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />
        </div>
        <div className="card-div">
          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />

          <Card2
            img={"/Project IMG/multi1.png"}
            title={"Social Video Production"}
            text={
              "We help brands create compelling social video adverts that engage..."
            }
          />
        </div>
      </div>
    </MultiCardsDiv>
  );
};

export default MultiCards;

const MultiCardsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding: 50px 0px;

  .big {
    width: 100vw;
    padding-left: 18vw /* 208px */;
    padding-right: 18vw /* 208px */;
    @media (max-width: 1336px) {
      padding-left: 10vw /* 208px */;
      padding-right: 10vw /* 208px */;
    }
    @media (max-width: 938px) {
      padding-left: 3vw /* 208px */;
      padding-right: 3vw /* 208px */;
    }
    @media (max-width: 868px) {
      font-size: 4vw;
      font-weight: 800;
    }
    @media (max-width: 548px) {
      font-size: 4.7vw;
      font-weight: 800;
    }
  }
  .small {
    padding-left: 18vw /* 208px */;
    padding-right: 18vw /* 208px */;
    @media (max-width: 1336px) {
      padding-left: 10vw /* 208px */;
      padding-right: 10vw /* 208px */;
    }
    @media (max-width: 938px) {
      padding-left: 5vw /* 208px */;
      padding-right: 5vw /* 208px */;
    }
  }

  .card-div {
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    gap: 20px;

    @media (max-width: 1100px) {
      gap: 8px;
    }
    @media (max-width: 992px) {
      /* display: grid;
      grid-template-columns: repeat(2,1fr); */
      flex-wrap: wrap;
      padding: 0px 100px;
      gap: 20px;
    }
    @media (max-width: 665px) {
      flex-direction: column;
      padding: 0px 0px;
    }
  }
`;
