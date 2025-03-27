import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

const Scroll = () => {
  const [Scroll, setScroll] = useState();
  const scrollRef = useRef(null);
  let { y } = useWindowScroll();

  useEffect(() => {

    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((y / height) * 100);
  }, [y]);

  return (
    <ScrollDiv ref={scrollRef} >
      <div className="indicator" style={{ width: `${Scroll}%`, }}></div>
    </ScrollDiv>
  );
};

export default Scroll;

const ScrollDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  height: 10px;
  z-index: 1000;
  .indicator {
    transition: all 300ms ease-out;
    background: linear-gradient(135deg, #202a66, #82155a);
    box-shadow: inset 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
    height: 100%;
    position: sticky;
    top: 10px;
    border-radius: 1px;
  }
`;
