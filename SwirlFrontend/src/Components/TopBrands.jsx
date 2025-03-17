import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Context1 from "../Context/Context1";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const row1 = [
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214474/top1_ihuoum.webp",
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top2_titjho.webp",
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top3_trmuto.webp",
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214476/top4_riqcet.webp",
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214479/top9_exwzgi.webp",
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top7_zek0qc.webp",
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top8_a8cyis.webp",
  "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214464/q6_sznw0e.webp",
];

const TopBrands = () => {
  const { DarkLight, HomePage, setHomePage } = useContext(Context1);

  let Textcolor = DarkLight ? "black" : "white";
  const [brandsAnimation, setbrandsAnimation] = useState(false);
  let top = useRef(null);
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
  let bgcolor = DarkLight ? "white" : "linear-gradient(135deg,#202A66,#82155A)";
  let bgcolor2 = DarkLight ? "white" : "transparent";
  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (WindowWidth < 1490) {
      setbrandsAnimation(true);
      // console.log("dsa")
    } else {
      setbrandsAnimation(false);
    }
  }, [WindowWidth]);

  return (
    <TopBrandsDiv style={{ background: `${HomePage ? bgcolor2 : bgcolor}` }}>
      <div>

        <div
          className={`text text-[17px] font-medium leading-[25px] text-center text-${Textcolor}`}
        >
          Used by over 450+ of the world's best startups and established
          enterprises
        </div>
        {brandsAnimation ? (
          <>
            <AppContainer>
              <Wrapper>
                <Marquee>
                  <MarqueeGroup>
                    {row1.map((el) => (
                      <ImageGroup>
                        <Image src={el} />
                      </ImageGroup>
                    ))}
                  </MarqueeGroup>
                  <MarqueeGroup>
                    {row1.map((el) => (
                      <ImageGroup>
                        <Image src={el} />
                      </ImageGroup>
                    ))}
                  </MarqueeGroup>
                </Marquee>
              </Wrapper>
            </AppContainer>
          </>
        ) : (
          <div className="logos mt-6" ref={top}>
            <div className="img-div">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214474/top1_ihuoum.webp"
                alt=""
              />
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top2_titjho.webp"
                alt=""
              />
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top3_trmuto.webp"
                alt=""
              />
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214476/top4_riqcet.webp"
                alt=""
              />
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214464/q6_sznw0e.webp"
                alt=""
              />
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214479/top9_exwzgi.webp"
                alt=""
              />
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top7_zek0qc.webp"
                alt=""
              />
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top8_a8cyis.webp"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </TopBrandsDiv>
  );
};

export default TopBrands;

const TopBrandsDiv = styled.div`
  padding: 50px 10px;
  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: all 300ms ease;
  }

  .img-div {
    display: flex;
    flex-shrink: 0;
    gap: 20px;
    align-items: center;
    justify-content: center;
    will-change: transform; /* Hint for the browser to optimize animations */
    transition: all 300ms ease;
  }
`;
const AppContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  /* padding: 5px 20px; */
`;
