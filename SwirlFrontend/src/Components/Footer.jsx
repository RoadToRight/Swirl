import React, {  } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scrollToTop } from "../Functions";
const Footer = () => {

console.log("footer")
  return (
    <FooterDiv>
      <div className="upper-section">
        <div className="logo-section">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214472/swirl_logo_footer_sv7e35.webp"
            alt=""
          />
          <br />
          <div className="logo-text text-lightgrey">
            The video production company you've been looking for.
          </div>
        </div>
        <div className="parent-headings-lists parent-headings-lists1">
          <div>
            <div className="heading text-lightpink">Company</div>
            <ul className="list">
              <Link
                to="/creations/All"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Work</li>
              </Link>
              <Link
                to="/aboutus"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>About Us</li>
              </Link>
              <Link
                to="/pricing"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Pricing</li>
              </Link>
              <Link
                to="/contactus"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <div className="empty-heading pt-10"></div>
            <ul className="list">
              <Link
                to="/#testinomials"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Testimonials</li>
              </Link>
              <Link
                to="/#projectslider"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Projects Slider</li>
              </Link>
              <Link
                to="/#questions"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Q&A</li>
              </Link>
              <Link
                to="/#tracker"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Our Stats</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="parent-headings-lists parent-headings-lists2">
          <div>
            {" "}
            <div className="heading text-lightpink">Capabilities</div>
            <ul className="list">
              <Link
                to="/creations/2DCharacterExplainer"
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>2D Character Explainer</li>
              </Link>
              <Link
                className="text-white no-underline"
                to="/creations/SAASExplainer"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>SAAS Explainer</li>
              </Link>
              <Link
                className="text-white no-underline"
                to="/creations/LineArtExplainer"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Line Art Explainer</li>
              </Link>
              <Link
                className="text-white no-underline"
                to="/creations/Whiteboard"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Whiteboard</li>
              </Link>
            </ul>
          </div>
          <div>
            {" "}
            <div className="empty-heading pt-10 "></div>
            <ul className="list">
              <Link
                to={"/creations/CelAnimation"}
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Cel Animation</li>
              </Link>
              <Link
                className="text-white no-underline"
                to={"/creations/MotionDesign"}
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Motion Design</li>
              </Link>
              <Link
                to={"/creations/CharacterDesign"}
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Character Design</li>
              </Link>
              <Link
                to={"/creations/EducationAndTraining"}
                className="text-white no-underline"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <li>Education And Training</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <br />

      <div className="lower-section text-lightpink ">
        <div className="hr bg-[#525252] h-[1.2px] w-[100%] "></div>
        <div className="parent-after-hr pt-6 flex justify-between">
          <div className="all-rights-text text-[14px]">
            All rights reserved © 2024 Swirl365
          </div>
          <div className="icons text-[25px] flex justify-center items-center gap-3">
            <a
              href="https://www.instagram.com/swirl_365/profilecard/?igsh=MWRleG45eTE3ZWd4cg=="
              target="_blank"
            >
              {" "}
              <FaInstagram className="icon" />
            </a>{" "}
            <a href="https://www.youtube.com/@Swirl365-binish" target="_blank">
              <FaYoutube className="icon" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/company/swirl-365/"
              target="_blank"
            >
              <FaLinkedinIn className="icon" />
            </a>
            <a
              href="https://www.facebook.com/share/1L1NVFUKaT/?mibextid=wwXIfr"
              target="_blank"
            >
              <FaFacebook className={`icon`} cursor={"pointer"} />
            </a>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  min-height: 472px;

  background-color: #141414;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 50px 0px;
  .logo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .upper-section {
    display: grid;
    grid-template-columns: 250px 1fr 1fr;
    justify-items: center;
    width: 1250px;
    padding: 40px 0px;
  }
  .parent-headings-lists {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  .heading {
    line-height: 45px;
    font-size: 14px;
  }
  .list {
    font-weight: 550;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .lower-section {
    width: max(1255px, 85vw);
  }
  //animations
  .icon {
    color: #f3a7ff;
    cursor: pointer;
  }
  .icon:hover {
    color: #6200ec;
  }
  .list li {
    cursor: pointer;
  }
  .list li::after {
    content: "";
    display: block;
    width: 0px;
    height: 5px;
    background-color: #c707e4;
    position: relative;
    border-radius: 30px;
    z-index: 2;
  }
  .list li:hover::after {
    content: "";
    width: 100%;
    height: 5px;
    display: block;
    background-color: #c707e4;
    transition: all 300ms ease-in-out;
    z-index: 2;
  }
  @media (max-width: 1270px) {
    .parent-headings-lists {
      gap: 50px;
    }
    .upper-section {
      display: grid;

      justify-items: center;
      width: auto;
    }
    .list {
      font-size: 14px;
      gap: 10px;
    }
    .logo-text {
      font-size: 14px;
    }
    .lower-section {
      width: max(950px, 95vw);
    }
  }
  @media (max-width: 992px) {
    .upper-section {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: flex-start;
      width: 100vw;
      padding: 40px 30px;
      gap: 40px;
    }
    .parent-headings-lists1 {
      gap: 300px;
    }
    .parent-headings-lists2 {
      gap: 210px;
    }
    .lower-section {
      width: 95vw;
    }
  }
  @media (max-width: 590px) {
    .parent-headings-lists {
      flex-direction: column;
      gap: 0px;
    }
    .empty-heading {
      padding: 5px;
    }
    .list {
      width: 200px;
      font-size: 15px;
    }
    .heading {
      font-size: 18px;
    }
    .logo-text {
      font-size: 16px;
    }
    .parent-after-hr {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
`;
