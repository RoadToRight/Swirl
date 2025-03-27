import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PyramidAnimation from "./PyramidAnimation";
const Loader = () => {
  const { loading } = useSelector((state) => state.Custom);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (location.pathname === "/") {
        if (true) {
          if (document.readyState === "complete") {
            dispatch({
              type: "False",
              payload: "loading",
            });
          } else {
            const handleLoad = () => {
              dispatch({
                type: "False",
                payload: "loading",
              });
            };
            window.addEventListener("load", handleLoad);
            return () => {
              window.removeEventListener("load", handleLoad);
            };
          }
        }
      } else {
        if (document.readyState === "complete") {
          dispatch({
            type: "False",
            payload: "loading",
          });
        } else {
          const handleLoad = () => {
            dispatch({
              type: "False",
              payload: "loading",
            });
          };
          window.addEventListener("load", handleLoad);
          return () => {
            window.removeEventListener("load", handleLoad);
          };
        }
      }
    }, 3000);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <LoaderDiv>
          <PyramidAnimation />
        </LoaderDiv>
      )}
    </>
  );
};

export default Loader;

const LoaderDiv = styled.div`
  background-color: #d10505;
  z-index: 1003;
  height: 100vh;
  width: 100vw;

  
`;
