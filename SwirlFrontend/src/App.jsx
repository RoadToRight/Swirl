import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Button from "react-bootstrap/Button";
import Footer from "./Components/Footer";
import DoYouHaveQues from "./Components/DoYouHaveQues";
import QuotesBottom from "./Components/QuotesBottom";
import Quotes from "./Components/Quotes";
import Darkpurplebg from "./Components/Darkpurplebg";
import Stats from "./Components/Stats";
import ReadyTomakeVideo from "./Components/ReadyTomakeVideo";
import Pricing from "./Components/Pricing";
import OneQuote from "./Components/OneQuote";
import ContactUS from "./Components/ContactUS";
import Aboutus from "./Components/Aboutus";
import Work from "./Components/Work";
import Circle from "./Components/Circle";
import Threebenefits from "./Components/Threebenefits";
import TopBrands from "./Components/TopBrands";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import ImgSlider from "./Components/ImgSlider";
import { Route, Routes, useLocation } from "react-router-dom";
import Context1 from "./Context/Context1";
import Navigation2 from "./Components/Navigation2";
import Scroll from "./Components/ScrollIndicator.jsx";
import Loader from "./Components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";


// gsap.registerPlugin(ScrollTrigger);
function App() {
  const [DarkLight, setDarkLight] = useState(true);
  const [loading, setLoading] = useState(true);
  const [YoutubeVideo, setYoutubeVideo] = useState(false);
  const [YoutubeUrl, setYoutubeUrl] = useState();
  const location = useLocation();
 
  let Testinomials = useRef(null);
  let ProjectSlider = useRef(null);
  let Tracker = useRef(null);
  let Questions = useRef(null);

  const PlayYouTubeCard = () => {
    setYoutubeVideo((props) => !props);
  };
  useEffect(() => {
    // Change the document title based on the current route
    if (location.pathname === "/") {
      document.title = "Home";
    } else if (location.pathname === "/about") {
      document.title = "About Us";
    } else if (location.pathname === "/creations") {
      document.title = "Our Creations";
    } else if (location.pathname === "/contactus") {
      document.title = "Contact Us";
    } else if (location.pathname === "/pricing") {
      document.title = "Pricing";
    } else {
      document.title = "Swirl 365";
    }
  }, [location]);
  useEffect(() => {
    // setLoading(true);
   setTimeout(() => {
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
   }, 3000);
  }, []);
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   // Function to request animation frame
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   // Start the animation frame loop
  //   requestAnimationFrame(raf);

  //   // Cleanup function to stop the animation when the component unmounts
  //   return () => {
  //     cancelAnimationFrame(raf);
  //   };
  // }, []);
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"; // Prevent scrolling while loading
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling when loading is finished
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
  return (
    <div>
      {YoutubeVideo ? (
        <VideoContainerCard className="video-container">
          <IoCloseOutline
            className="absolute top-2 right-6 text-[50px] text-white font-extrabold cursor-pointer"
            onClick={PlayYouTubeCard}
          />
          <iframe
            width="90%"
            height="80%"
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
      {/* <Loader /> */}
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
       
          ProjectSlider,
          Tracker,
          Questions
        }}
      >
        <Routes>
          <Route
            path="/creations/:WorkName"
            element={
              <>
                <Navigation2
                  DarkLight={DarkLight}
                  setDarkLight={setDarkLight}
                />
                <div className="overflow-hidden">
                  <Work />
                  <DoYouHaveQues />
                </div>
              </>
            }
          />

          <Route
            path="/aboutus"
            element={
              <>
                <Navigation2
                  DarkLight={DarkLight}
                  setDarkLight={setDarkLight}
                />
                <div className="overflow-hidden">
                  <Aboutus />
                  <Stats /> 
                  <Threebenefits /><TopBrands /> <OneQuote />
                </div>
              </>
            }
          />

          <Route
            path="/pricing"
            element={
              <>
                <Navigation2
                  DarkLight={DarkLight}
                  setDarkLight={setDarkLight}
                />
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
                <Navigation2
                  DarkLight={DarkLight}
                  setDarkLight={setDarkLight}
                />
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
                  <Home /> <Circle /> <ImgSlider /> <Darkpurplebg />
                  <Quotes /> <Stats /> <QuotesBottom /> <DoYouHaveQues />
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
