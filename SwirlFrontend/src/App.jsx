import { lazy, Suspense, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
let Footer = lazy(() => import("./Components/Footer"));
let DoYouHaveQues = lazy(() => import("./Components/DoYouHaveQues"));
let Stats = lazy(() => import("./Components/Stats"));
let OneQuote = lazy(() => import("./Components/OneQuote"));
let ContactUS = lazy(() => import("./Components/ContactUS"));
let Aboutus = lazy(() => import("./Components/Aboutus"));
let Threebenefits = lazy(() => import("./Components/Threebenefits"));
let TopBrands = lazy(() => import("./Components/TopBrands"));
let Navigation = lazy(() => import("./Components/Navigation"));
import { Route, Routes } from "react-router-dom";
let Pricing = lazy(() => import("./Components/Pricing"));
let Scroll = lazy(() => import("./Components/ScrollIndicator"));
let Loader = lazy(() => import("./Components/Loader"));
import { ToastContainer } from "react-toastify";
let Work2 = lazy(() => import("./Components/Work2"));
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
let Home = lazy(() => import("./Components/Home"));
let YoutubeApp = lazy(() => import("./Components/YoutubeApp"));

function App() {
  let dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: "ValueChanger",
        payload: "windowidth",
        value: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const canonicalUrl = `https://swirl365.com${location.pathname}`;

  return (
    <Suspense fallback={<div></div>}>
      sameer
      <div>
        <Helmet>
          <title>Swirl365 | Home</title>
          <link rel="canonical" href={"http://localhost:4000/"} />
          <meta
            name="description"
            content="Bring your ideas to life with expert animation. Swirl365 creates engaging 2D & 3D animations, explainer videos, and motion graphics that captivate and inspire."
          />

          <meta
            property="og:title"
            content="Swirl365 | Professional Animation & Motion Graphics"
          />
          <meta
            property="og:description"
            content="Looking for top-tier animation services? Swirl365 specializes in 2D animation, motion graphics, whiteboard videos, and more. Elevate your brand with stunning visuals and engaging storytelling!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.swirl365.com/" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214454/Layer_8_ojif9p.webp"
          />
        </Helmet>

        <YoutubeApp />

        <Loader />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{
            "--toastify-color-progress-light":
              "linear-gradient(135deg , #202a66,#82155A)",
          }}
        />
        <Navigation />

        <Scroll />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/creations/:WorkName"
            element={
              <>
                <div className="overflow-hidden">
                  <Work2 />
                  <DoYouHaveQues />
                </div>
              </>
            }
          />

          <Route
            path="/aboutus"
            element={
              <>
                <div className="overflow-hidden">
                  <Aboutus />
                  <Stats />
                  <Threebenefits />
                  <TopBrands /> <OneQuote />
                </div>
              </>
            }
          />

          <Route
            path="/pricing"
            element={
              <>
                <div className="overflow-hidden">
                  <Pricing />
                  <TopBrands />
                  <OneQuote />
                  <DoYouHaveQues />
                </div>
              </>
            }
          />

          <Route
            path="/contactus"
            element={
              <>
                <div className="overflow-hidden">
                  <ContactUS />
                  <TopBrands />
                  <DoYouHaveQues />
                </div>
              </>
            }
          />
        </Routes>

        {/* <ReadyTomakeVideo /> */}
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
