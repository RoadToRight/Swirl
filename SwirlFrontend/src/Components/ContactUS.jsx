import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import Button from "./Button";
import Context1 from "../Context/Context1";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const ContactUS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [windowidth, setwindowidth] = useState(window.innerWidth);
  const [btnWidth, setbtnWidth] = useState("37.5vw");
  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [NameError, setNameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageComment, setErrorMessageComment] = useState("");
  const [comment, setComment] = useState("");
  const [Select2Error, setSelect2Error] = useState("");
  const { DarkLight } = useContext(Context1);
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
  // console.log(location.state?.location)
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
    if (windowidth <= 768) {
      setbtnWidth("80vw");
    } else {
      setbtnWidth("26.7vw");
    }
  }, [windowidth]);

  const handleToggleDropdown2 = (e) => {
    // setIsOpen2(!isOpen2);
    console.log("1")
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
    setIsOpen2(false); // Close dropdown after selection
    console.log(value);
    if (!value) {
      setSelect2Error("Please Select An Option");
    } else {
      setSelect2Error("");
    }
  };
  const handleToggleDropdown = (e) => {
    console.log("2")
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
    setIsOpen(false); // Close dropdown after selection
    console.log(value);
    if (!value) {
      setSelect2Error("Please Select An Option");
    } else {
      setSelect2Error("");
    }
  };

  const settingEmail = (value) => {
    console.log(value);
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

    // Split the comment by spaces and filter out empty strings
    const wordCount = commentValue.trim().split(/\s+/).filter(Boolean).length;

    // Check if there are at least 3 words
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
    console.log(value);
    setLastname(value);
    if (!value) {
      setNameError("Please Enter Your Name");
    } else {
      setNameError("");
    }
  };

  const finalSubmit = async () => {
    // console.log(name, email, commentt);
    if (
      name === "Correct" &&
      email === "Correct" &&
      commentt === "Correct" &&
      select === "Correct"
      // checkbox === "Correct"

    ) {
      try {
        let response = await fetch(`${apiUrl}`, {
          method: "post",
          body: JSON.stringify({
            email: Email,
            name: Name,
            lastname: Lastname,
            comment: comment,
            budget: selectedOption,
            industry: selectedOption2,
            UserComeFrom: location.state?.location
          }),
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer protected"
          },
        });
        response = await response.json();
        console.log(response);
        if (response.success) {
          setComment("")
          setEmail("")
          setName("")
          setLastname("")
          setSelectedOption("")
          setSelectedOption2("")
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
          }
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
        }
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
    setIsOpen(false)
    setIsOpen2(false)
  }
  const ContactClick = () => {
    setIsOpen(false)
    setIsOpen2(false)
  }

  return (
    <ContactUSdiv className={`bg-${bgcolor}`} onClick={ContactClick}>
      <div className="ball absolute right-0 top-28">
        <img src="/Project IMG/ball.png" alt="" />
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
          <div className={`head font-bold text-[38px] text-${Textcolor}`}>
            Let's Connect!👋
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
              <FaFacebook className={`icon`} size={"28px"} cursor={"pointer"} />
              <FaXTwitter
                className={` icon`}
                size={"28px"}
                cursor={"pointer"}
              />
              <FaYoutube className={` icon`} size={"28px"} cursor={"pointer"} />
              <RiInstagramFill
                className={` icon`}
                size={"28px"}
                cursor={"pointer"}
              />
              <AiFillLinkedin
                className={` icon`}
                size={"28px"}
                cursor={"pointer"}
              />
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
                  onClick={() => { CloseSelectOnAnotherInput() }}
                />

                <Input
                  $inputC={DarkLight}
                  $Textcolor={Textcolor}
                  type="text"
                  placeholder="Type your last name"
                  className=" input12 focus:outline-none"
                  required
                  value={Lastname}
                  onChange={(e) => setLastNaming(e.target.value)}

                  onClick={() => { CloseSelectOnAnotherInput() }}
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
                  className="border-1 border-x-black border-y-black focus:outline-none"
                  value={Email}
                  onChange={(e) => settingEmail(e.target.value)}
                  onClick={() => { CloseSelectOnAnotherInput() }}
                  required
                />
              </div>
              <div className="mt-2  error text-red-700 input2error flex justify-start items-center ">
                {errorMessage}
              </div>

              <div className="input3 flex items-center justify-center mt-3 gap-2">
                <div
                  className={`relative w-[33.5%] select1 z-[2]`}
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
                      className={`inline-block ml-2 transform transition-transform duration-200 absolute right-4 top-1/2 transform -translate-y-1/2 ${isOpen ? "rotate-180" : ""
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
                    <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-0 h-56 overflow-y-scroll">
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
                          className="px-3 py-2 text-gray-700 cursor-pointer hover:bg-[#EBE1F9] focus:outline-none text-[14px]"
                        >
                          <span
                            className={`${selectedOption === option ? "font-bold" : ""
                              } block px-0 py-2`}
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
                      className={`inline-block ml-2 transform transition-transform duration-200 absolute right-4 top-1/2 transform -translate-y-1/2 ${isOpen2 ? "rotate-180" : ""
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
                      {["Accounting and Finance", "Administrative and Clerical", "Agriculture", "Construction", "Creative and Design", "Customer Service", "Education", "Energy and Utilities", "Engineering", "Financial Services", "Healthcare", "Hospitality", "IT", "Labor", "Legal", "Maintenance and Repair", "Management", "Manufacturing and Industrial", "Marketing and Advertising", "Pharamaceutical and Research", "Production Animation Agency", "Professional", "Restaurant And Food Service", "Retail", "SaaS", "Sales", "Security", "Sustainabilty", "Telecommunications", "Transportation", "Warehouse", "Student"].map(
                        (option) => (
                          <li
                            key={option}
                            onClick={() => handleSelectOption2(option)}
                            className="px-3 py-2 text-gray-700 cursor-pointer hover:bg-[#EBE1F9] focus:outline-none text-[13px]"
                          >
                            <span
                              className={`${selectedOption2 === option ? "font-bold" : ""
                                } block px-0 py-2`}
                            >
                              {option}
                            </span>
                          </li>
                        )
                      )}
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
                  onClick={() => { CloseSelectOnAnotherInput() }}
                ></Textarea>
              </div>
              <div className="error text-red-700 input2error flex justify-start items-center ">
                {errorMessageComment}
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </ContactUSdiv>
  );
};

export default ContactUS;

const ContactUSdiv = styled.div`
  background-image: url("/Project IMG/contactbg.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 60px 10px;

  
  .ball {
    @media (max-width: 992px) {
      top: 120%;
      right: 30%;
    }
    @media (max-width: 546px) {
      top: 150%;
      right: 3%;
    }
    @media (max-width: 410px) {
      top: 165%;
      right: 3%;
    }
  }
  .sides {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;

    @media (max-width: 1260px) {
      gap: 40px;
    }
    @media (max-width: 992px) {
      flex-wrap: wrap;

      justify-content: center;
      align-items: center;
    }
    @media (max-width: 620px) {
      padding: 50px 20px;
    }
  }
.error{
  padding-left: 120px;
  @media (max-width: 1260px) {
    padding-left: 20px;
    }
    @media (max-width: 992px) {
    padding-left: 0px;
    }
}
  .left-side {
    width: 400px;
    margin-left: 140px;
    @media (max-width: 1260px) {
      margin-left: 0px;
    }

    .head {
      @media (max-width: 992px) {
        text-align: center;
      }
    }
    .small1 {
      @media (max-width: 992px) {
        text-align: center;
      }
    }
    .social {
      @media (max-width: 992px) {
        justify-content: center;
        align-items: center;
      }
    }
  }
  .right-side {
    width: 765px;
    min-height: 600px;
    border-radius: 9px;
    position: relative;
    padding: 20px 10px;
    @media (max-width: 1260px) {
      padding: 20px 0px;
      width: 500px;
    }
    @media (max-width: 1086px) {
      width: 45vw;
    }
    @media (max-width: 992px) {
      width: 80vw;
      background-color: transparent;
      box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0);
    }
    @media (max-width: 620px) {
      width: 92vw;
    }
    @media (max-width: 473px) {
      width: 92vw;
      height: auto;
      padding: 20px 10px;
    }
  }
  .select-text {
    @media (max-width: 1260px) {
      font-size: 14px;
    }
    @media (max-width: 992px) {
      font-size: 16px;
    }
    @media (max-width: 510px) {
      font-size: 14px;
    }
    @media (max-width: 473px) {
      font-size: 16px;
    }
    @media (max-width: 440px) {
      font-size: 14px;
    }
    @media (max-width: 390px) {
      font-size: 12px;
    }
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
      @media (max-width: 1260px) {
        width: 45%;
      }
      @media (max-width: 992px) {
        width: 50%;
      }
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
    @media (max-width: 473px) {
      justify-content: flex-start;
      align-items: flex-start;
    }
    input {
      /* background-color: #ffffffa5; */
      background-color: #ffffff7a;
      /* background-color: transparent; */
      border-radius: 1px solid black;
      padding: 10px 10px;
      border-radius: 5px;
      width: 68.5%;
      @media (max-width: 1260px) {
        width: 95%;
      }
      @media (max-width: 992px) {
        width: 100%;
      }
      @media (max-width: 473px) {
        width: 100%;
      }
    }
  }
  .input3 {
    @media (max-width: 473px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px !important;
    }
    .select1 {
      border: 1px solid black;
      border-radius: 2px;
      background-color: #ffffff7a;
      @media (max-width: 1260px) {
        width: 46.5%;
      }
      @media (max-width: 992px) {
        width: 50%;
      }
      @media (max-width: 473px) {
        width: 100%;
      }
    }
    .select2 {
      border: 1px solid black;
      border-radius: 2px;
      background-color: #ffffff7a;
      @media (max-width: 1260px) {
        width: 46.5%;
      }
      @media (max-width: 992px) {
        width: 50%;
      }
      @media (max-width: 473px) {
        width: 100%;
      }
    }
  }
  .comments {
    padding: 10px;
    border-radius: 8px;
    resize: none;
    width: 68.5%;
    background-color: #ffffff7a;
    border-radius: 2px;
    @media (max-width: 1260px) {
      width: 95%;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    @media (max-width: 473px) {
      width: 100%;
    }
    @media (max-width: 440px) {
      font-size: 14px;
    }
    @media (max-width: 390px) {
      font-size: 12px;
    }
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

    /* Autofill handling */
    &:-webkit-autofill {
    background-color: transparent !important;
    box-shadow: 0 0 0px 1000px transparent inset !important; /* Removes inner shadow */
  }

  &:-webkit-autofill:focus {
    background-color: transparent !important;
    box-shadow: 0 0 0px 1000px transparent inset !important;
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
  &:-webkit-autofill {
    background-color: transparent !important;
    box-shadow: 0 0 0px 1000px transparent inset !important; /* Removes inner shadow */
  }

  &:-webkit-autofill:focus {
    background-color: transparent !important;
    box-shadow: 0 0 0px 1000px transparent inset !important;
  }
`;
