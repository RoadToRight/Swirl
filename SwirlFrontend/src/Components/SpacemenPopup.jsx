import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import Context1 from "../Context/Context1";
import Button from "./Button";
import PacmanLoader from "react-spinners/PacmanLoader";
import { FaSquareInstagram } from "react-icons/fa6";

const SpacemenPopup = () => {
  //UseState
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [NameError, setNameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageComment, setErrorMessageComment] = useState("");
  const [comment, setComment] = useState("");
  const [btnDisable, setbtnDisable] = useState(false);
  const [windowidth, setwindowidth] = useState(window.innerWidth);
  const [btnWidth, setbtnWidth] = useState("17.5vw");
  const [EmailSent, setEmailSent] = useState(false);
  const [MessageFromReq, setMessageFromReq] = useState("");
  //useContaxt
  const { DarkLight, SpaceMen, setSpaceMen,PlanFromPopUp } = useContext(Context1);
  //var
  const apiUrl = import.meta.env.VITE_API_URL;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let name = "";
  let email = "";
  let commentt = "";
  let Textcolor = DarkLight ? "black" : "white";
  let Textcolor3 = DarkLight ? "white" : "black";
  let bgcolor2 = DarkLight ? "black" : "white";
  //fnc
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
  const settingEmail = (value) => {
    setEmail(value);
    if (emailRegex.test(value)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };
  const finalSubmit = async () => {
    if (name === "Correct" && email === "Correct" && commentt === "Correct") {
      console.log(Email, Name, comment);
      try {
        setbtnDisable(true);
        let response = await fetch(`http://localhost:4001/send/email/popup`, {
          method: "post",
          body: JSON.stringify({
            email: Email,
            name: Name,
            comment: comment,
            UserComeFrom:PlanFromPopUp
            // UserComeFrom: location.state?.location,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer protected",
          },
        });
        response = await response.json();
        setMessageFromReq(response);
        console.log(response);
        if (response.success) {
          setComment("");
          setEmail("");
          setName("");
          setbtnDisable(false);
          setEmailSent(true);
        } else {
          setbtnDisable(false);
        }
      } catch (error) {
        setbtnDisable(false);
        console.log("Catch", error);
      }
    } else {
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
    finalSubmit();
  };
  //useEffect
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
      setbtnWidth("17.5vw");
    }
  }, [windowidth]);

  return (
    <SpaceMenDiv>
      <div className="parent">
        <div
          className="cross"
          onClick={() => {
            setSpaceMen(false);
          }}
        >
          <RxCross2 />
        </div>
        <div class="card">
          <img src="https://uiverse.io/astronaut.png" alt="" class="image" />
          <div class="heading">We're on Social Media</div>
          <div class="icons">
            <a href="https://www.instagram.com/swirl_365/profilecard/?igsh=MWRleG45eTE3ZWd4cg==" class="instagram"   target="_blank">
            <FaSquareInstagram color={"white"}/>
            </a>
            
            <a href="https://www.facebook.com/share/1L1NVFUKaT/?mibextid=wwXIfr" class="x" target="_blank">
              <svg
              
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="48px"
                height="48px"
              >
                <path d="M22 12.07C22 6.16 17.52 1.28 11.85 1c-5.64-.28-10.24 4.36-10.24 10.07 0 5.03 3.71 9.15 8.46 9.91v-7h-2.55v-2.91h2.55v-2.36c0-2.34 1.4-3.62 3.53-3.62 1 .01 1.92.07 2.17.1v2.4h-1.49c-1.17 0-1.4.55-1.4 1.37v1.8h2.72l-.35 2.91h-2.36v7c4.75-.76 8.45-4.89 8.45-9.9z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@Swirl365-binish" class="discord" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
  <path d="M10 15l5.19-3L10 9v6zm11.13-8.2c-.24-.9-.96-1.6-1.85-1.85C17.54 4.5 12 4.5 12 4.5s-5.54 0-7.28.45c-.9.24-1.6.96-1.85 1.85C2.5 8.54 2.5 12 2.5 12s0 3.46.45 5.2c.24.9.96 1.6 1.85 1.85 1.74.45 7.28.45 7.28.45s5.54 0 7.28-.45c.9-.24 1.6-.96 1.85-1.85.45-1.74.45-5.2.45-5.2s0-3.46-.45-5.2z"/>
</svg>

            </a>
            <a href="https://www.linkedin.com/company/swirl-365/" class="discord" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
  <path d="M4.98 3c-1.13 0-2 .9-2 2 0 1.12.87 2 2 2 1.12 0 2-.88 2-2 0-1.1-.9-2-2-2zM3 8h3.99V21H3V8zm7 0h3.79v1.62c.55-.9 1.56-2.12 3.71-2.12 3.96 0 4.69 2.6 4.69 6v7.5h-3.99v-6.4c0-1.52-.03-3.47-2.11-3.47-2.11 0-2.43 1.65-2.43 3.35v6.52H10V8z"/>
</svg>



            </a>
          </div>
        </div>

        <div className="form flex flex-col justify-center items-center ">
          <h1 className="lets text-white font-extrabold ">
            Let's Work Together
          </h1>
          <br />
          <Input
            $inputC={DarkLight}
            $Textcolor={Textcolor}
            type="text"
            placeholder="Type your first name"
            className="input11 border-1 focus:outline-none"
            required
            value={Name}
            onChange={(e) => setNaming(e.target.value)}
            onClick={() => {}}
          />
          <div className="error text-red-700 input2error flex justify-start items-center  mt-2  mb-2">
            {NameError}
          </div>

          <Input
            $inputC={DarkLight}
            $Textcolor={Textcolor}
            type="email"
            placeholder="Type your email"
            className="border-1 border-x-black border-y-black focus:outline-none"
            value={Email}
            onChange={(e) => settingEmail(e.target.value)}
            onClick={() => {}}
            required
          />
          <div className="mt-2  error text-red-700 input2error flex justify-start items-center  mb-2">
            {errorMessage}
          </div>

          <Textarea
            $Textarea={DarkLight}
            $Textcolor={Textcolor}
            className="comments  focus:outline-none "
            placeholder="Comments"
            value={comment}
            onChange={handleCommentChange}
            onClick={() => {}}
          ></Textarea>

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
                text={`${"Get a Quote"}`}
                color={bgcolor2}
                width={btnWidth}
                height={"52px"}
                textcolor={Textcolor3}
                fnc={() => {
                  !EmailSent && SubmitForm();
                }}
              />
            </div>
          )}
          <div className={`error w-[70%] ${MessageFromReq.success ? "text-green-700" : "text-red-700"} text-red-700 input2error flex justify-start items-center `}>
            {MessageFromReq.message}
          </div>
        </div>
      </div>
    </SpaceMenDiv>
  );
};

export default SpacemenPopup;

const SpaceMenDiv = styled.div`
  position: fixed;
  top: 0px;
  z-index: 10001;
  background-color: #00000090;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .parent {
    width: 1000px;
    height: 55%;
    background: url("https://res.cloudinary.com/diyha1kd9/image/upload/v1741214469/Sliderbg_fijojf.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(30px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 200px 3px 3px 100px;
    box-shadow: 13px 14px 150px 3px #360f4f;
    @media (max-width: 1024px) {
      width: 900px;
      justify-content: center;
    }
    @media (max-width: 992px) {
      width: 768px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      gap: 22px;
      border-radius: 0px;
      padding: 20px 0px;
    }
    @media (max-width: 468px) {
      flex-direction: column;
      height: auto;
      gap: 22px;
      border-radius: 0px;
      padding: 20px 10px;
    }
  }
  .cross {
    color: white;
    font-size: 45px;
    font-weight: 1000;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    @media (max-width: 468px) {
      right: 0px;
    }
  }
  .lets {
    margin-left: 15px;
    font-size: clamp(29px, 8vw, 35px);
  }
  /* From Uiverse.io by Praashoo7 */
  /* HOLD THE ASTRONAUT */

  .card {
    position: relative;
    width: 19em;
    height: 25em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #171717;
    color: white;
    font-family: Montserrat;
    font-weight: bold;
    padding: 1em 2em 1em 1em;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    row-gap: 1em;
    @media (max-width: 992px) {
      width: 14em;
      height: 20em;
    }
  }
  .card img {
    width: 12em;
    margin-right: 1em;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
  }
  .image:hover {
    cursor: -webkit-grab;
    cursor: grab;
  }

  .icons svg {
    width: 20px;
    height: 20px;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -3px;
    border-radius: 10px;
    background: radial-gradient(#858585, transparent, transparent);
    transform: translate(-5px, 250px);
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover::before {
    width: 150%;
    height: 100%;
    margin-left: -4.25em;
  }
  .card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: rgb(23, 23, 23, 0.7);
    transition: all 0.4s ease-in-out;
    z-index: -1;
  }

  .heading {
    z-index: 2;
    transition: 0.4s ease-in-out;
  }
  .card:hover .heading {
    letter-spacing: 0.025em;
  }

  .heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
      60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
      520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
    z-index: -1;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
  }
  .icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff,
      20px 130px #fff, 110px 80px #fff, 280px 80px #fff, 250px 350px #fff,
      280px 230px #fff, 220px 190px #fff, 450px 100px #fff, 380px 80px #fff,
      520px 50px #fff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
  }
  .icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
      380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
      200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
      120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
  }
  .card:hover .heading::before,
  .card:hover .icons::before,
  .card:hover .icons::after {
    filter: blur(3px);
  }

  .image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .image:active + .heading::before {
    box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
      240px 35px #9b40fc, 240px 40px #9b40fc, 242px 45px #9b40fc,
      246px 48px #9b40fc, 251px 49px #9b40fc, 256px 48px #9b40fc,
      260px 45px #9b40fc, 262px 40px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::before {
    box-shadow: 262px 35px #9b40fc, 262px 30px #9b40fc, 262px 25px #9b40fc,
      262px 20px #9b40fc, 275px 20px #9b40fc, 275px 24px #9b40fc,
      275px 28px #9b40fc, 275px 32px #9b40fc, 275px 36px #9b40fc,
      275px 40px #9b40fc, 275px 44px #9b40fc, 275px 48px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::after {
    box-shadow: 238px 60px #9b40fc, 242px 60px #9b40fc, 246px 60px #9b40fc,
      250px 60px #9b40fc, 254px 60px #9b40fc, 258px 60px #9b40fc,
      262px 60px #9b40fc, 266px 60px #9b40fc, 270px 60px #9b40fc,
      274px 60px #9b40fc, 278px 60px #9b40fc, 282px 60px #9b40fc,
      234px 60px #9b40fc, 234px 60px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1.25em);
  }

  .heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    background: #f9f9fb;
    box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
      0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover .heading::after {
    box-shadow: 0px 0px 200px rgba(193, 119, 241, 1),
      0px 0px 200px rgba(135, 42, 211, 1), inset #9b40fc 0px 0px 40px -12px;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 1em;
    z-index: 1;
  }

  .instagram,
  .x,
  .discord {
    position: relative;
    transition: 0.4s ease-in-out;
  }
  .instagram:after,
  .x:after,
  .discord:after {
    content: "";
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    left: 0;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.5),
      0px 0px 10px rgba(192, 192, 192, 0.5);
    border-radius: 50%;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  .instagram svg path,
  .x svg path,
  .discord svg path {
    stroke: #808080;
    transition: 0.4s ease-in-out;
  }
  .instagram:hover svg path {
    stroke: #cc39a4;
  }
  .x:hover svg path {
    stroke: black;
  }
  .discord:hover svg path {
    stroke: #8c9eff;
  }
  .instagram svg,
  .x svg,
  .discord svg {
    transition: 0.3s ease-in-out;
  }
  .instagram:hover svg {
    scale: 1.4;
  }
  .x:hover svg,
  .discord:hover svg {
    scale: 1.25;
  }
  .instagram:hover:after,
  .x:hover:after,
  .discord:hover:after {
    scale: 4;
    transform: translateX(0.09em) translateY(0.09em);
  }

  .instagram::before {
    content: "";
    position: absolute;
    top: -700%;
    left: 1050%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    transition: 1s ease;
    animation-delay: 1s;
  }
  .x::before {
    content: "";
    position: absolute;
    top: -1300%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 3s;
  }
  .discord::before {
    content: "";
    position: absolute;
    top: -2100%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 5s;
  }
  .card:hover .instagram::before,
  .card:hover .x::before,
  .card:hover .discord::before {
    filter: blur(3px);
  }
  .image:active ~ .icons .instagram::before,
  .image:active ~ .icons .x::before,
  .image:active ~ .icons .discord::before {
    animation: none;
    opacity: 0;
  }

  @keyframes shootingStar {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-55em) translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateX(-70em) translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateY(0);
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0em) translateY(0em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(0em) translateY(0em);
    }
  }

  @keyframes glowing-stars {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .comments {
    padding: 10px;
    border-radius: 8px;
    resize: none;
    width: 100%;
    background-color: #ffffff;
    border-radius: 2px;
    @media (max-width: 1260px) {
      width: 95%;
    }
    @media (max-width: 1024px) {
      width: 65%;
    }
    @media (max-width: 768px) {
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
`;

const Input = styled.input`
  width: 100%;
  background-color: #ffffff;
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
  @media (max-width: 1024px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  /* @media (max-width: 473px) {
    width: 95%;
  } */
`;

const Textarea = styled.textarea`
  color: ${(props) => props.$Textcolor};
  border: ${(props) =>
    props.$Textarea ? "1px solid black" : "1px solid white"};
  &::placeholder {
    color: ${(props) => props.$Textcolor};
  }
`;
