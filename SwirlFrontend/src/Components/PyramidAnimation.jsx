import React from "react";
import styled from "styled-components";

const PyramidAnimation = () => {
  return (
    <PyramidDiv>

      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    </PyramidDiv>
  );
};

export default PyramidAnimation;

const PyramidDiv = styled.div`
  /* From Uiverse.io by andrew-demchenk0 */
  width: 100vw;
  height: 100vw;
  z-index: 1004;
  position: absolute;
  background-color: #ffffff;

  .pyramid-loader {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
    z-index: 1002;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .pyramid-loader .wrapper .side {
    width: 70px;
    height: 70px;
    /* you can choose any gradient or color you want */
    /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
  }

  .pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
  }

  .pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
  }

  .pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
  }

  .pyramid-loader .wrapper .shadow {
    width: 60px;
    height: 60px;
    background: #8b5ad5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
  }
`;
