import React, { useEffect, useRef } from "react";
import { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
let VideoMainPage = lazy(() => import("./VideoMainPage"));
let Circle = lazy(() => import("./Circle"));
let ReadyTomakeVideo = lazy(() => import("./ReadyTomakeVideo"));
let QuotesBottom = lazy(() => import("./QuotesBottom"));
let Quotes = lazy(() => import("./Quotes"));
let Darkpurplebg = lazy(() => import("./Darkpurplebg"));
let DoYouHaveQues = lazy(() => import("./DoYouHaveQues"));
let Stats = lazy(() => import("./Stats"));
const Home = () => {
  const windowidth = useSelector((state) => state.Custom.windowidth);
  const dispatch = useDispatch();
  const SwapQuotes = useSelector((state) => state.Custom.SwapQuotes);



  useEffect(() => {
    if (windowidth <= 725) {
      dispatch({
        type: "True",
        payload: "SwapQuotes",
      });
    } else {
      dispatch({
        type: "False",
        payload: "SwapQuotes",
      });
    }
  }, [windowidth]);

  return (
   
          <div className="overflow-hidden">
            {" "}
            {!SwapQuotes ? (
              <>
           
                <VideoMainPage /> <Circle /> <Darkpurplebg />
                <Quotes /> <Stats /> <QuotesBottom /> <DoYouHaveQues />{" "}
              </>
            ) : (
              <>
                
                <VideoMainPage /> <Circle /> <Darkpurplebg />
                <Quotes /> <QuotesBottom />
                <Stats /> <DoYouHaveQues />{" "}
              </>
            )}
          </div>
        
 
  );
};

export default Home;
