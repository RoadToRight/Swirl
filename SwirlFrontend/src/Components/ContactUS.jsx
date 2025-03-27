import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import Button from "./Button";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const ContactUS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const [btnWidth, setbtnWidth] = useState("37.5vw");
  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [NameError, setNameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageComment, setErrorMessageComment] = useState("");
  const [comment, setComment] = useState("");
  const [btnDisable, setbtnDisable] = useState(false);
  const [Select2Error, setSelect2Error] = useState("");

  const { DarkLight, windowidth } = useSelector((state) => state.Custom);
  const apiUrl = import.meta.env.VITE_API_URL;
  let name = "";
  let email = "";
  let commentt = "";
  let select = "";
  let Textcolor = DarkLight ? "black" : "white";

  let Textcolor3 = DarkLight ? "white" : "black";
  let bgcolor = DarkLight ? "white" : "black";
  let bgcolor2 = DarkLight ? "black" : "white";
  let border = DarkLight ? "1px solid black" : "1px solid white";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const location = useLocation();

  useEffect(() => {
    if (windowidth <= 992) {
      setbtnWidth("80vw");
    } else {
      setbtnWidth("26.8vw");
    }
  }, [windowidth]);

  const handleToggleDropdown2 = (e) => {
    e.stopPropagation();
    if (isOpen) {
      setIsOpen(false);
      setIsOpen2(true);
    } else {
      setIsOpen2(!isOpen2);
    }
  };

  const handleSelectOption2 = (value) => {
    setSelectedOption2(value);
    setIsOpen2(false);

    if (!value) {
      setSelect2Error("Please Select An Option");
    } else {
      setSelect2Error("");
    }
  };
  const handleToggleDropdown = (e) => {
    e.stopPropagation();
    if (isOpen2) {
      setIsOpen(true);
      setIsOpen2(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleSelectOption = (value) => {
    setSelectedOption(value);
    setIsOpen(false);

    if (!value) {
      setSelect2Error("Please Select An Option");
    } else {
      setSelect2Error("");
    }
  };

  const settingEmail = (value) => {
    setEmail(value);
    if (emailRegex.test(value)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };

  const handleCommentChange = (e) => {
    const commentValue = e.target.value;
    setComment(commentValue);
    const wordCount = commentValue.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 3) {
      setErrorMessageComment("Your comment must contain at least 3 words.");
    } else {
      setErrorMessageComment("");
    }
  };

  const setNaming = (value) => {
    setName(value);
    if (!value) {
      setNameError("Please Enter Your Name");
    } else {
      setNameError("");
    }
  };

  const setLastNaming = (value) => {
    setLastname(value);
    if (!value) {
      setNameError("Please Enter Your Name");
    } else {
      setNameError("");
    }
  };

  const finalSubmit = async () => {
    if (
      name === "Correct" &&
      email === "Correct" &&
      commentt === "Correct" &&
      select === "Correct"
    ) {
      try {
        setbtnDisable(true);
        let response = await fetch(`${apiUrl}/send/email`, {
          method: "post",
          body: JSON.stringify({
            email: Email,
            name: Name,
            lastname: Lastname,
            comment: comment,
            budget: selectedOption,
            industry: selectedOption2,
            UserComeFrom: location.state?.location,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer protected",
          },
        });
        response = await response.json();
        console.log(response);
        if (response.success) {
          setComment("");
          setEmail("");
          setName("");
          setLastname("");
          setSelectedOption("");
          setSelectedOption2("");
          setbtnDisable(false);
          toast(`${response.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
              background: "linear-gradient(135deg, #3b0a45, #2f1d3f, #4b1f6f)",
              color: "white",
            },
          });
        } else {
          setbtnDisable(false);
          toast(`${response.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
              background: "linear-gradient(135deg, #3b0a45, #2f1d3f, #4b1f6f)",
              color: "white",
            },
          });
        }
      } catch (error) {
        setbtnDisable(false);
        console.log(error);
        toast(`${error}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: {
            background: "linear-gradient(135deg, #3b0a45, #2f1d3f, #4b1f6f)",
            color: "white",
          },
        });
      }
    } else {
      toast(`Please Fill All Fields!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          background: "linear-gradient(135deg, #3b0a45, #2f1d3f, #4b1f6f)",
          color: "white",
        },
      });
    }
  };

  const SubmitForm = async () => {
    const wordCount = comment.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount < 3) {
      setErrorMessageComment("Your comment must contain at least 3 words.");
    } else {
      setErrorMessageComment("");
      commentt = "Correct";
    }

    if (!selectedOption2 || !selectedOption) {
      setSelect2Error("Please Select An Option From Both Boxes");
    } else {
      setSelect2Error("");
      select = "Correct";
    }

    if (emailRegex.test(Email)) {
      setErrorMessage("");
      email = "Correct";
    } else {
      setErrorMessage("Please enter a valid email address.");
    }

    if (!Name) {
      setNameError("Please Enter Your First And Last Name ");
    } else {
      setNameError("");
      name = "Correct";
    }

    if (!Lastname) {
      setNameError("Please Enter Your First And Last Name ");
    } else {
      setNameError("");
      name = "Correct";
    }

    finalSubmit();
  };
  const CloseSelectOnAnotherInput = () => {
    setIsOpen(false);
    setIsOpen2(false);
  };
  const ContactClick = () => {
    setIsOpen(false);
    setIsOpen2(false);
  };
  const canonicalUrl = `https://swirl365.com${location.pathname}`;
  return (
    <ContactUSdiv className={`bg-${bgcolor}`} onClick={ContactClick}>
      <Helmet>
        <title>Swirl365 | Contact Us</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="description"
          content="Contact us to find the perfect style for your video. We are a leading video company that creates tailor-made video content to connect brands and people."
        />

        <meta
          property="og:title"
          content="Swirl365 | Contact Us – Ready to Partner Up?"
        />
        <meta
          property="og:description"
          content="As a leading explainer video company, we craft tailor-made video content trusted by global brands. From startups to Fortune 500 companies, we bring ideas to life. Let's discuss your project—fill out the form to get started!"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="ball absolute right-0 top-28">
        <img
          src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214496/ball_tuplpn.webp"
          alt=""
        />
      </div>
      <div className="text flex flex-col container items-center gap-3 mt-3">
        <div
          className={`head font-bold text-[38px] text-center  leading-[55px] text-${Textcolor}`}
        >
          Ready to Partner up?
        </div>
        <div className={`small1 font-bold text-${Textcolor} leading-[24px]`}>
          Contact us
        </div>
        <div className={`small2 font-normal text-center text-${Textcolor}`}>
          We are a leader video company that connects brands and people through
          tailor-made video content.
        </div>
      </div>

      <div className="sides">
        <div className="left-side">
          <div
            className={`head font-bold text-[38px] flex items-center text-${Textcolor} gap-6 justify-between w-full`}
          >
            Let's Connect!
            <div class="loader mb-4">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>

          <div
            className={`small1 font-normal  text-[black] mt-4 text-${Textcolor}`}
          >
            We are a leading explainer video company that connects brands and
            people through tailor-made video content.
          </div>
          <div
            className={`small1 font-normal text-[black] mt-4 text-${Textcolor}`}
          >
            Trusted by global brands, we cater to diverse clients, from small
            startups to Fortune 500 companies.
          </div>
          <div
            className={`small1 font-normal text-[black] mt-4 text-${Textcolor}`}
          >
            Let's talk about your project – whatever the challenge, we've got
            you covered. Fill out the form to get started!
          </div>
          <br />

          <div
            className={`social text-[20px] font-bold leading-[23.4px] flex items-center flex-col gap-4 text-${Textcolor}`}
          >
            Follow us
            <div className="social-img flex gap-2">
              <a
                href="https://www.facebook.com/share/1L1NVFUKaT/?mibextid=wwXIfr"
                target="_blank"
              >
                <FaFacebook
                  className={`icon`}
                  size={"28px"}
                  cursor={"pointer"}
                />
              </a>
  
              <a
                href="https://www.youtube.com/@Swirl365-binish"
                target="_blank"
              >
                <FaYoutube
                  className={` icon`}
                  size={"28px"}
                  cursor={"pointer"}
                />
              </a>
              <a
                href="https://www.instagram.com/swirl_365/profilecard/?igsh=MWRleG45eTE3ZWd4cg=="
                target="_blank"
              >
                <RiInstagramFill
                  className={` icon`}
                  size={"28px"}
                  cursor={"pointer"}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/swirl-365/"
                target="_blank"
              >
                <AiFillLinkedin
                  className={` icon`}
                  size={"28px"}
                  cursor={"pointer"}
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`right-side flex justify-center items-center relative`}
          >
            <div className="inputs relative">
              <div className="input1">
                <Input
                  $inputC={DarkLight}
                  $Textcolor={Textcolor}
                  type="text"
                  placeholder="Type your first name"
                  className="input11 border-1 focus:outline-none"
                  required
                  value={Name}
                  onChange={(e) => setNaming(e.target.value)}
                  onClick={() => {
                    CloseSelectOnAnotherInput();
                  }}
                />

                <Input
                  $inputC={DarkLight}
                  $Textcolor={Textcolor}
                  type="text"
                  placeholder="Type your last name"
                  className=" input12 focus:outline-none "
                  required
                  value={Lastname}
                  onChange={(e) => setLastNaming(e.target.value)}
                  onClick={() => {
                    CloseSelectOnAnotherInput();
                  }}
                />
              </div>

              <div className="error text-red-700 input2error flex justify-start items-center  mt-2  ">
                {NameError}
              </div>

              <div className="input2 mt-3">
                <Input
                  $inputC={DarkLight}
                  $Textcolor={Textcolor}
                  type="email"
                  placeholder="Type your email"
                  className="border-1  border-x-black border-y-black focus:outline-none"
                  value={Email}
                  onChange={(e) => settingEmail(e.target.value)}
                  onClick={() => {
                    CloseSelectOnAnotherInput();
                  }}
                  required
                />
              </div>
              <div className="mt-2  error text-red-700 input2error flex justify-start items-center ">
                {errorMessage}
              </div>

              <div className="input3 flex items-center justify-center mt-3 gap-2">
                <div
                  className={`relative w-[33.5%] select1 z-[3]`}
                  style={{ border: ` ${border}` }}
                >
                  <button
                    className="w-full  px-[10px] py-2 text-left rounded-md focus:outline-none"
                    onClick={handleToggleDropdown}
                  >
                    <span className={`text-${Textcolor} select-text`}>
                      {selectedOption || "Select a project budget"}
                    </span>
                    <svg
                      className={`inline-block ml-2 transform transition-transform duration-200 absolute right-4 top-1/2 transform -translate-y-1/2 ${
                        isOpen ? "rotate-180" : ""
                      } text-${Textcolor}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="20"
                      height="20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <ul className="absolute w-full mt-1 bg-white border z-20 border-gray-300 rounded-md shadow-lg p-0 h-56 overflow-y-scroll">
                      {[
                        "150 USD TO 600 USD",
                        "600 USD TO 1200 USD",
                        "1200 USD TO 2000 USD",
                        "2000 USD TO 3000 USD",
                        "3000 USD +",
                      ].map((option) => (
                        <li
                          key={option}
                          onClick={() => handleSelectOption(option)}
                          className="px-3 py-2 text-gray-700 cursor-pointer z-20 hover:bg-[#EBE1F9] focus:outline-none text-[14px]"
                        >
                          <span
                            className={`${
                              selectedOption === option ? "font-bold" : ""
                            } block px-0 py-2 `}
                          >
                            {option}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className="relative w-[33.5%] select2 z-[2]"
                  style={{ border: ` ${border}` }}
                >
                  <button
                    className="w-full px-[10px] py-2 text-left rounded-md focus:outline-none"
                    onClick={handleToggleDropdown2}
                  >
                    <span className={`text-${Textcolor} select-text`}>
                      {selectedOption2 || "Select your industry"}
                    </span>
                    <svg
                      className={`inline-block ml-2 transform transition-transform duration-200 absolute right-4 top-1/2 transform -translate-y-1/2 ${
                        isOpen2 ? "rotate-180" : ""
                      } text-${Textcolor}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="20"
                      height="20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen2 && (
                    <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-0 h-56 overflow-y-scroll">
                      {[
                        "Accounting and Finance",
                        "Administrative and Clerical",
                        "Agriculture",
                        "Construction",
                        "Creative and Design",
                        "Customer Service",
                        "Education",
                        "Energy and Utilities",
                        "Engineering",
                        "Financial Services",
                        "Healthcare",
                        "Hospitality",
                        "IT",
                        "Labor",
                        "Legal",
                        "Maintenance and Repair",
                        "Management",
                        "Manufacturing and Industrial",
                        "Marketing and Advertising",
                        "Pharamaceutical and Research",
                        "Production Animation Agency",
                        "Professional",
                        "Restaurant And Food Service",
                        "Retail",
                        "SaaS",
                        "Sales",
                        "Security",
                        "Sustainabilty",
                        "Telecommunications",
                        "Transportation",
                        "Warehouse",
                        "Student",
                      ].map((option) => (
                        <li
                          key={option}
                          onClick={() => handleSelectOption2(option)}
                          className="px-3 py-2 text-gray-700 cursor-pointer hover:bg-[#EBE1F9] focus:outline-none text-[13px]"
                        >
                          <span
                            className={`${
                              selectedOption2 === option ? "font-bold" : ""
                            } block px-0 py-2`}
                          >
                            {option}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="error mt-2 text-red-700 input2error flex justify-start items-center ">
                {Select2Error}
              </div>

              <div className="input4 flex justify-center mt-3">
                <Textarea
                  $Textarea={DarkLight}
                  $Textcolor={Textcolor}
                  className="comments  focus:outline-none "
                  placeholder="Comments"
                  value={comment}
                  onChange={handleCommentChange}
                  onClick={() => {
                    CloseSelectOnAnotherInput();
                  }}
                ></Textarea>
              </div>
              <div className="error text-red-700 input2error flex justify-start items-center ">
                {errorMessageComment}
              </div>
              {btnDisable ? (
                <div className="flex items-center justify-center">
                  <div
                    className={`button-load mt-3 flex items-center justify-center bg-black  py-2 `}
                    style={{ width: `${btnWidth}` }}
                  >
                    <PacmanLoader size={"20px"} color="white" className={``} />{" "}
                  </div>
                </div>
              ) : (
                <div className="button mt-3 flex items-center justify-center">
                  <Button
                    text={"Get a Quote"}
                    color={bgcolor2}
                    width={btnWidth}
                    height={"52px"}
                    textcolor={Textcolor3}
                    fnc={SubmitForm}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContactUSdiv>
  );
};

export default ContactUS;

const ContactUSdiv = styled.div`
  background-image: url("https://res.cloudinary.com/diyha1kd9/image/upload/v1741214499/contactbg_lbyrvp.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 60px 10px;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #ffffffa4 inset;
    background-color: transparent !important;
  }

  input:-webkit-autofill {
    background-color: transparent;
    -webkit-box-shadow: 0 0 0 1000px #ffffffa4 inset !important;
    backdrop-filter: blur(10px);
    background-color: transparent !important;
  }
  /* From Uiverse.io by Pradeepsaranbishnoi */
  /* The loader container */
  .loader {
    width: 140px;
    height: 0px;
    perspective: 200px;
  }
  /* The dot */
  .dot {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border-radius: 50px;
    border: 20px outset #1e3f57;
    transform-origin: 50% 50%;
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    background-color: transparent;
    animation: dot1 1000ms cubic-bezier(0.49, 0.06, 0.43, 0.85) infinite;
  }

  .dot:nth-child(2) {
    width: 70px;
    height: 70px;
    margin-top: -35px;
    margin-left: -35px;
    border-width: 30px;
    border-color: #447891;
    animation-name: dot2;
    animation-delay: 75ms;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }

  .dot:nth-child(3) {
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    border-width: 20px;
    border-color: #6bb2cd;
    animation-name: dot3;
    animation-delay: 150ms;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }

  @keyframes dot1 {
    0% {
      border-color: #1e3f57;
      transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    }

    50% {
      border-color: #1e574f;
      transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
    }

    100% {
      border-color: #1e3f57;
      transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    }
  }

  @keyframes dot2 {
    0% {
      border-color: #447891;
      box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.2);
      transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    }

    50% {
      border-color: #449180;
      box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.8);
      transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
    }

    100% {
      border-color: #447891;
      box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.2);
      transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    }
  }

  @keyframes dot3 {
    0% {
      border-color: #6bb2cd;
      box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
      transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    }

    50% {
      border-color: #6bcdb2;
      box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.8);
      transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
    }

    100% {
      border-color: #6bb2cd;
      box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
      transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    }
  }
  .sides {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
  }
  .error {
    padding-left: 120px;
  }
  .left-side {
    width: 430px;
    margin-left: 140px;
  }
  .right-side {
    width: 765px;
    min-height: 600px;
    border-radius: 9px;
    position: relative;
    padding: 20px 10px;
  }
  .inputs {
    width: 100%;
  }
  .input1 {
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    input {
      background-color: #ffffff7a;
      width: 33%;
    }
  }

  .input2 {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* Ensure this is not affected by backdrop-filter */
    z-index: 1;
    gap: 20px;
    input {
      background-color: #ffffff7a;
      border-radius: 1px solid black;
      padding: 10px 10px;
      border-radius: 5px;
      width: 68.5%;
    }
  }
  .input3 {
    .select1 {
      border: 1px solid black;
      border-radius: 2px;
      background-color: #ffffff7a;
    }
    .select2 {
      border: 1px solid black;
      border-radius: 2px;
      background-color: #ffffff7a;
    }
  }
  .comments {
    padding: 10px;
    border-radius: 8px;
    resize: none;
    width: 68.5%;
    background-color: #ffffff7a;
    border-radius: 2px;
  }

  .comments::placeholder {
    text-align: left;
    vertical-align: top;
  }
  .icon {
    color: #360f4f;
  }
  .icon:hover {
    color: #6200ec;
  }
  @media (max-width: 1260px) {
    .sides {
      gap: 40px;
    }
    .error {
      padding-left: 20px;
    }
    .left-side {
      margin-left: 0px;
    }
    .right-side {
      padding: 20px 0px;
      width: 500px;
    }
    .select-text {
      font-size: 14px;
    }
    .comments {
      width: 95%;
    }
    .input1 {
      input {
        width: 45%;
      }
    }
    .input2 {
      input {
        width: 95%;
      }
    }

    .input3 {
      .select1,
      .select2 {
        width: 46.5%;
      }
    }
  }
  @media (max-width: 1086px) {
    .right-side {
      width: 45vw;
    }
  }
  @media (max-width: 992px) {
    .ball{
      top: 120%;
      right: 30%;
    }
    .sides {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    .error {
      padding-left: 0px;
    }
    .left-side {
      .head {
        text-align: center;
      }
      .small1 {
        text-align: center;
      }
      .social {
        justify-content: center;
        align-items: center;
      }
    }
    .right-side {
      width: 80vw;
      background-color: transparent;
      box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0);
    }
    .select-text {
      font-size: 16px;
    }
    .comments {
      width: 100%;
    }
    .input1 {
      input {
        width: 50%;
      }
    }
    .input2 {
      input {
        width: 100%;
      }
    }
    .input3 {
      .select1,
      .select2 {
        width: 50%;
      }
    }
  }
  @media (max-width: 620px) {
    .sides {
      padding: 50px 20px;
    }
    .right-side {
      width: 92vw;
    }
  }
  @media (max-width: 546px) {
    .ball{
      top: 150%;
      right: 3%;
    }
  }
  @media (max-width: 510px) {
    .select-text {
      font-size: 14px;
    }
  }
  @media (max-width: 473px) {
    .right-side {
      width: 92vw;
      height: auto;
      padding: 20px 10px;
    }
    .select-text {
      font-size: 15px;
    }
    .comments {
      font-size: 14px;
    }
    .input3 {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px !important;
      .select1,
      .select2 {
        width: 100%;
      }
    }
    .input2 {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  @media (max-width: 410px) {
    .ball{
      top: 165%;
      right: 3%;
    }
  }
  @media (max-width: 390px) {
    .select-text {
      font-size: 12px;
    }
    .comments {
      font-size: 12px;
    }
  }
`;

const Input = styled.input`
  background-color: #ffffffa5;
  color: ${(props) => props.$Textcolor};
  &::placeholder {
    color: ${(props) => props.$Textcolor};
    @media (max-width: 440px) {
      font-size: 14px;
    }
    @media (max-width: 390px) {
      font-size: 10.8px;
    }
  }
  border: ${(props) => (props.$inputC ? "1px solid black" : "1px solid white")};
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 473px) {
    width: 95%;
  }
`;

const Textarea = styled.textarea`
  color: ${(props) => props.$Textcolor};
  border: ${(props) =>
    props.$Textarea ? "1px solid black" : "1px solid white"};
  &::placeholder {
    color: ${(props) => props.$Textcolor};
  }
  /* Autofill handling */
`;
