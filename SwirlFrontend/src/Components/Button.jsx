import React from "react";
import styled from "styled-components";

const Button = ({
  color,
  text,
  width,
  height,
  textcolor,
  border,
  arialabel,
  href,
  fnc = () => {},
  translateZ ,
  MinustranslateZ
}) => {
  return (
    <ButtonDiv className="cursor-pointer" >
      
      <Span
        onClick={() => fnc()}

        className={`rounded-2xl  leading-[20px] font-bold btnn`}
        $width={width}
        $height={height}
        $textcolor={textcolor}
        $border={border}
        $color={color}
        $text={text}
        $translateZ={translateZ}
        $MinustranslateZ = {MinustranslateZ}
      >
        <Anchor
          
          $width={width}
          $height={height}
          $textcolor={textcolor}
          $border={border}
          $color={color}
          $text={text}
          $translateZ={translateZ}
          $MinustranslateZ = {MinustranslateZ}
          className={`rounded-2xl  leading-[20px] font-bold btnn`}
          href={href}
          aria-label={arialabel}
        ></Anchor>{" "}
      </Span>
    </ButtonDiv>
  );
};

export default Button;

const ButtonDiv = styled.div`

`;

const Span = styled.span`
  position: relative;
  display: inline-flex;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  perspective: 25000px;
  &:nth-child(1) a:before {
    color:  ${(props) => props.$textcolor};
    background: ${(props) => props.$color};
    transform: rotateY(0deg) translateZ(${(props) => props.$translateZ ? props.$translateZ : "25px"});
  }
  &:nth-child(1) a:after {
    color:  ${(props) => props.$textcolor};
    background: ${(props) => props.$color};
    transform: rotateX(90deg) translateZ(${(props) => props.$translateZ ? props.$translateZ : "25px"});
  }
  &:nth-child(1) a:hover {
    transform: translateZ(${(props) => props.$translateZ ? props.$translateZ : props.$MinustranslateZ ? props.$MinustranslateZ : "-25px"}) rotateX(-90deg);
  }
  
`;

const Anchor = styled.a`
 
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform 0.25s;
  &:before,
  &:after {
    position: absolute;
     content: ${(props) => `"${props.$text}"`}; 
    
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    display: flex;
    align-items: center;
    justify-content: center;
     border:${(props) => `5px solid ${props.$color}`} ; 

    box-sizing: border-box;
  }
`;
