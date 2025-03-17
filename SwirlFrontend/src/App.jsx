import { lazy, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
let Footer = lazy(() => import("./Components/Footer"));
let DoYouHaveQues = lazy(() => import("./Components/DoYouHaveQues"));
let QuotesBottom = lazy(() => import("./Components/QuotesBottom"));
let Quotes = lazy(() => import("./Components/Quotes"));
let Darkpurplebg = lazy(() => import("./Components/Darkpurplebg"));
let Stats = lazy(() => import("./Components/Stats"));
let ReadyTomakeVideo = lazy(() => import("./Components/ReadyTomakeVideo"));
let OneQuote = lazy(() => import("./Components/OneQuote"));
let ContactUS = lazy(() => import("./Components/ContactUS"));
let Aboutus = lazy(() => import("./Components/Aboutus"));
let Circle = lazy(() => import("./Components/Circle"));
let Threebenefits = lazy(() => import("./Components/Threebenefits"));
let TopBrands = lazy(() => import("./Components/TopBrands"));
let Home = lazy(() => import("./Components/Home"));
let Navigation = lazy(() => import("./Components/Navigation"));
// let ImgSlider = lazy(() => import("./Components/ImgSlider"));
import { Route, Routes, useLocation } from "react-router-dom";
import Context1 from "./Context/Context1";
let Pricing = lazy(() => import("./Components/Pricing"));
let Scroll = lazy(() => import("./Components/ScrollIndicator"));
let Loader = lazy(() => import("./Components/Loader"));
import { ToastContainer } from "react-toastify";
let Work2 = lazy(() => import("./Components/Work2"));
import "react-toastify/dist/ReactToastify.css";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function App() {
  //useSTATE
  const [DarkLight, setDarkLight] = useState(true);
  const [loading, setLoading] = useState(true);
  const [YoutubeVideo, setYoutubeVideo] = useState(false);
  const [YoutubeUrl, setYoutubeUrl] = useState();
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);
  const [windowidth, setwindowidth] = useState(window.innerWidth);
  const [SwapQuotes, setSwapQuotes] = useState(false);
  const [SlideLoad, setSlideLoad] = useState(true);
  const [SpaceMen, setSpaceMen] = useState(false);
  const [HomePage, setHomePage] = useState(false);
  const [PlanFromPopUp, setPlanFromPopUp] = useState("");

  //useLocation
  const location = useLocation();
  //useRef
  let Testinomials = useRef(null);
  let ProjectSlider = useRef(null);
  let Tracker = useRef(null);
  let Questions = useRef(null);
  //useEffect

  const PlayYouTubeCard = () => {
    setYoutubeVideo((props) => !props);
  };
  useEffect(() => {
    setTimeout(() => {
      if (location.pathname === "/") {
        if (true) {
          if (document.readyState === "complete") {
            setLoading(false); // If the page is already fully loaded, hide the loader
          } else {
            const handleLoad = () => {
              setLoading(false);
            };
            window.addEventListener("load", handleLoad);
            return () => {
              window.removeEventListener("load", handleLoad);
            };
          }
        }
      } else {
        if (document.readyState === "complete") {
          setLoading(false); // If the page is already fully loaded, hide the loader
        } else {
          const handleLoad = () => {
            setLoading(false);
          };
          window.addEventListener("load", handleLoad);
          return () => {
            window.removeEventListener("load", handleLoad);
          };
        }
      }
    }, 3000);
  }, [isVideoLoaded]);
  useEffect(() => {
    if (location.pathname === "/") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  }, [location]);
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  const scrollToElement = (id) => {
    let elementToScroll = null; // Initialize to null
    switch (id) {
      case "testinomials":
        elementToScroll = Testinomials.current;
        break;
      case "questions":
        elementToScroll = Questions.current;
        break;
      case "tracker":
        elementToScroll = Tracker.current;
        break;
      case "projectslider":
        elementToScroll = ProjectSlider.current;
        break;
      default:
        console.warn(`Unknown scroll target: ${id}`); // Handle unknown IDs
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
    if (location.hash) {
      const targetId = location.hash.substring(1);
      scrollToElement(targetId);
    }
  }, [location]);
  useEffect(() => {
    const handleResize = () => {
      setwindowidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowidth <= 725) {
      setSwapQuotes(true);
    } else {
      setSwapQuotes(false);
    }
  }, [windowidth]);
  const canonicalUrl = `https://swirl365.com${location.pathname}`;
  console.log(canonicalUrl)
  return (
    <div>
      <Helmet>
        <title>Swirl365 | Home</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="description"
          content="Bring your ideas to life with expert animation and motion graphics. Swirl365 creates engaging 2D & 3D animations, explainer videos, and motion graphics that captivate and inspire. Let’s turn your vision into reality!"
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
      </Helmet>

      {YoutubeVideo ? (
        <VideoContainerCard className="video-container">
          <IoCloseOutline
            className="absolute top-2 right-6 text-[50px] text-white font-extrabold cursor-pointer"
            onClick={PlayYouTubeCard}
          />
          <iframe
            width="92%"
            height="95%"
            src={`${YoutubeUrl}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoContainerCard>
      ) : null}

      {loading && <Loader />}
      <Scroll />
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
      <Context1.Provider
        value={{
          DarkLight,
          Testinomials,
          setDarkLight,
          setYoutubeUrl,
          YoutubeVideo,
          YoutubeUrl,
          PlayYouTubeCard,
          setLoading,
          Loader,
          ProjectSlider,
          Tracker,
          Questions,
          isVideoLoaded,
          setIsVideoLoaded,
          SlideLoad,
          setSlideLoad,
          SpaceMen,
          setSpaceMen,
          HomePage,
          setHomePage,
          PlanFromPopUp,
          setPlanFromPopUp,
        }}
      >
        <Navigation DarkLight={DarkLight} setDarkLight={setDarkLight} />

        <Routes>
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
          <Route
            path="/"
            element={
              <>
                <Navigation DarkLight={DarkLight} setDarkLight={setDarkLight} />
                <div className="overflow-hidden">
                  {" "}
                  {!SwapQuotes ? (
                    <>
                      {" "}
                      <Home /> <Circle /> <Darkpurplebg />
                      <Quotes /> <Stats /> <QuotesBottom /> <DoYouHaveQues />{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <Home /> <Circle /> <Darkpurplebg />
                      <Quotes /> <QuotesBottom />
                      <Stats /> <DoYouHaveQues />{" "}
                    </>
                  )}
                </div>
              </>
            }
          />
        </Routes>

        <ReadyTomakeVideo />
        <Footer />
      </Context1.Provider>
    </div>
  );
}

export default App;

const VideoContainerCard = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 1000;
  background-color: #0000005d;
  backdrop-filter: blur(20px);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
