import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterDiv>
      <div className="Footer-Parent-Without-End">
        <div className="Logo">
          <div>
            <LazyLoadImage
              src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214472/swirl_logo_footer_sv7e35.webp"
              alt=""
              loading="lazy"
              effect="blur"
            />
          </div>
          <br />
          <small className="text-lightgrey font-normal leading-[24px] text-[14px]">
            The video production company you've been looking for.
          </small>
        </div>
        <div className="Footer-Part-2-Parent flex">
          <div className="First-Cols">
            <div className="Child text-lightgrey font-medium leading-[35px] flex flex-col items-center justify-center">
              <label className="head text-lightpink font-normal text-[14px]">
                Company
              </label>
              <ul className="flex flex-col items-center justify-center  mr-10 Company-Footer-1">
                <li>
                  {" "}
                  <Link
                    to="/creations/All"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Work{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/contactus"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-lightgrey font-medium leading-[35px] flex flex-col items-center justify-center WithOutHeadingFooter1">
              <ul className="mt-9 ">
                <li className="Testimonials">
                  <Link
                    to="/#testinomials"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#projectslider"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Projects Slider
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/#questions"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Q&A{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/#tracker"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Our Stats
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Second-Cols">
            <div className="Second-Cols-Child text-lightgrey font-medium leading-[35px] flex flex-col items-center justify-center">
              <label className="head text-lightpink font-normal text-[14px]">
                Capabilities
              </label>
              <ul className="whitespace-nowrap">
                <li>
                  <Link
                    to="/creations/2D Character Explainer"
                    className="text-white no-underline"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    2D Character Explainer
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white no-underline"
                    to="/creations/SAAS Explainer"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    SAAS Explainer
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white no-underline"
                    to="/creations/Line Art Explainer"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Line Art Explainer
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white no-underline"
                    to="/creations/Whiteboard"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Whiteboard
                  </Link>
                </li>
              </ul>
            </div>
            <div className="WithOutHeadingFooter2 text-lightgrey font-medium leading-[35px] flex flex-col items-center justify-center ">
              <ul className="mt-9 whitespace-nowrap">
                <li>
                  <Link
                    to={"/creations/Cel Animation"}
                    className="text-white no-underline"
                  >
                    Cel Animation
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white no-underline"
                    to={"/creations/Motion Design"}
                  >
                    Motion Design
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/creations/Character Design"}
                    className="text-white no-underline"
                  >
                    Character Design
                  </Link>
                </li>
                {/* Digital Animtion */}
                <li>
                  <Link
                    to={"/creations/Education And Training"}
                    className="text-white no-underline"
                  >
                    Education And Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="end">
        <div className="hr bg-[#525252] h-0.5"></div>
        <br />
        <div className="flex items-center justify-between flex-wala-parent">
          <small className="text-lightpink font-normal text-[14px] AllRightText">
            All rights reserved © 2024 Swirl365
          </small>
          <div className="text-lightpink font-normal flex items-center gap-2 icons ">
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
            {/* <FaXTwitter className={` icon`} cursor={"pointer"} /> */}
          </div>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  /* max-width: 1920px; */
  min-height: 472px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  overflow: hidden;
  ul li {
    cursor: pointer;
  }
  ul li::after {
    content: "";
    display: block;
    width: 0px;
    height: 5px;
    background-color: #c707e4;
    position: relative;
    border-radius: 30px;
    z-index: 2;
  }
  ul li:hover::after {
    content: "";
    width: 100%;
    height: 5px;
    display: block;
    background-color: #c707e4;
    transition: all 300ms ease-in-out;
    z-index: 2;
  }
  .Logo {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 991px) {
      flex-direction: column;
      width: 100vw;
      padding: 10px 28px;
    }
  }
  .Footer-Parent-Without-End {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
  .Footer-Part-2-Parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    width: 100%;
    @media (max-width: 991px) {
      width: 95vw;
    }
    @media (max-width: 600px) {
      width: 90vw;
    }
    @media (max-width: 400px) {
      width: 87vw;
    }
    .Child {
      @media (max-width: 991px) {
        align-items: flex-start !important;
      }
    }
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 991px) {
      grid-template-columns: repeat(1, 1fr);
      .Company-Footer-1 {
        align-items: flex-start;
        margin-right: 22px;
      }
    }
    @media (max-width: 440px) {
      font-size: 13px;
    }
  }

  .Second-Cols-Child {
    @media (max-width: 991px) {
      align-items: flex-start;
    }
  }

  .head {
    @media (max-width: 991px) {
      padding-left: 30px;
    }
  }
  .First-Cols {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;

    @media (max-width: 1220px) {
      gap: 10px;
    }
    @media (max-width: 1090px) {
      font-size: 13px;
      gap: 0px;
    }
    @media (max-width: 991px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 300px;
    }
    @media (max-width: 600px) {
      gap: 156px;
    }
    @media (max-width: 440px) {
      gap: 78px;
      font-size: 11.6px;
      font-weight: 1000;
    }
    @media (max-width: 350px) {
      gap: 57px;
      font-size: 11.3px;
      font-weight: 1000;
    }
  }

  .Second-Cols {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 90px;
    @media (max-width: 1220px) {
      gap: 50px;
    }
    @media (max-width: 1090px) {
      font-size: 13px;
      gap: 30px;
    }
    @media (max-width: 991px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 230px;
    }
    @media (max-width: 600px) {
      gap: 85px;
    }
    @media (max-width: 440px) {
      gap: 16px;
      font-size: 11.6px;
      font-weight: 1000;
    }
    @media (max-width: 350px) {
      gap: 0px;

      font-size: 11.3px;
      font-weight: 1000;
    }
  }

  .end {
    width: 80vw;
    @media (max-width: 1640px) {
      width: 95vw;
    }

    @media (max-width: 1199px) {
      padding: 0px 40px;
      width: 100vw;
    }
  }
  .flex-wala-parent {
    @media (max-width: 440px) {
      flex-direction: column;
      gap: 20px;
      .icons {
        font-size: 20px;
      }
    }
  }
  .icon {
    color: #f3a7ff;
    cursor: pointer;
    font-size: 23px;
  }
  .icon:hover {
    color: #6200ec;
  }
`;
