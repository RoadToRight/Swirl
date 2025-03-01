import React, { useContext } from 'react'
import styled from 'styled-components';
import Context1 from '../Context/Context1';

const Aboutus = () => {

  const { DarkLight } = useContext(Context1)

  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "white" : "black";
  let bgcolor2 = DarkLight ? "#ffffff64" : "transparent";

  return (
    <AboutDiv className={`bg-${bgcolor}`}>
      <div className="ball absolute right-0 top-6">
        <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1740771970/ball_n5ssrr.png" alt="" />
      </div>
      <div className="text container text-center">
        <div className={`head-top leading-[57.6px] font-bold text-[38px] text-${Textcolor}`}>We make videos that bring companies to life</div>

        <div className={`small1 font-bold leading-[24px] mt-3 text-${Textcolor}`}>Our Company</div>
        <div className={`small2 font-light leading-[25px] mt-3 text-${Textcolor}`}>Browse through our award-winning work for both live-action and animation, motion graphics and get your creative juices flowing for your next video project.

        </div>
      </div>
      <br />

      <div className={`about bg-${bgcolor2}`}>
        <div className="sec1 mt-4">
          <div className="left1 left flex justify-center  flex-col ">
            <div className={`head font-bold leading-[48px] text-${Textcolor}`}>Who are we?</div>
            <div className={`small font-normal leading-[25px] mt-3 text-${Textcolor}`}>At Swirl 365, we’re a team of forward-thinkers and problem-solvers dedicated to crafting exceptional digital experiences. From 2D and 3D animation to web and app development, social media marketing, and beyond, we specialize in providing tailored solutions to meet the unique needs of our clients. Our mission is to transform ideas into impactful outcomes, and we pride ourselves on delivering quality, innovation, and reliability in everything we do. Together, we are Swirl 365 a hub where creativity and technology converge.</div>
          </div>

          <div className="right1 flex justify-center items-center">
            <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1740772037/darkpurple2_yqatkj.webp" alt="" />
          </div>

        </div>
        <div className="sec2">
          <div className="right2 flex justify-center items-center">
            <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1740772078/about2_odyzpe.webp" alt="" />
          </div>
          <div className="left2 left flex justify-center  flex-col">
            <div className={`head font-bold leading-[48px] text-${Textcolor}`}>Our Story</div>
            <div className={`small font-normal leading-[25px] mt-3 text-${Textcolor}`}>Swirl 365 was born from a passion for innovation and creativity. What started as a small team of dreamers with big ideas has grown into a full-fledged software house delivering cutting-edge solutions. Our journey began with the desire to bridge the gap between technology and artistry, offering services that combine technical expertise with creative excellence. Over the years, we’ve helped clients across industries bring their visions to life, and our story is still unfolding with every project we take on.</div>
          </div>



        </div>
      </div>
    </AboutDiv>
  )
}

export default Aboutus;

const AboutDiv = styled.div`

background-image: url("https://res.cloudinary.com/diyha1kd9/image/upload/v1740772123/contactbg_azdckc.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .about{
    width: 1200px;
    height: auto;
  
    box-shadow: 3px 4px 12px 1px rgba(0,0,0,0.1);
    backdrop-filter:blur(20px);
    border-radius: 9px;
    padding: 25px;
    @media (max-width:1230px) {
      width: 1100px;
    }
    @media (max-width:1120px) {
      width: 1000px;
    }
    @media (max-width:1030px) {
      width: 900px;
    }
    @media (max-width:920px) {
      width: 850px;
    }
    @media (max-width:920px) {
      width: 95vw;
    }
    @media (max-width:475px) {
      width: 100vw;
    }
  }

  .sec1{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 28px;
    @media (max-width:1114px) {
       
       margin-top: 50px;
       
   }
   @media (max-width:900px) {
    grid-template-columns: repeat(1,1fr);
    }
    .head{
        font-size: 40px;
    }
    .left1{
        @media (max-width:900px) {
          order:1;
       
    }
    
    }
  }

  .sec2{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 28px;
    @media (max-width:1114px) {
       
        margin-top: 40px;
        
    }
    @media (max-width:900px) {
    grid-template-columns: repeat(1,1fr);

    }
 
    .right2{
        @media (max-width:900px) {
    
 
            text-align: center;
    
    }
}
    .head{
        font-size: 40px;
        
    }
  }
  .left{
    padding: 0px 10px;
    font-size: 18px;
    @media (max-width:1305px) {
        font-size: 15px;
        padding: 0px 20px;
    }
    @media (max-width:1114px) {
        font-size: 15px;
        padding: 0px 0px;

    }
    @media (max-width:900px) {
    
   
    text-align: center;

}
  }

  .head-top{
    @media (max-width:442px) {
    
        font-size: 33px;

        
}
@media (max-width:442px) {
    
    font-size: 33px;
   
    
}
@media (max-width:373px) {
    
    font-size: 30px;
 
    
}
  }

.small{
  @media (max-width:600px) {
    font-size: 12px;
    line-height: 22px;
    }
}

  .ball{
    @media (max-width: 992px) {
     top: 8%;
     right: 30%;
    }
    @media (max-width: 546px) {
     top: 25%;
     right: 3%;
    }
    @media (max-width: 410px) {
     top: 25%;
     right: 3%;
    }
  }

`