import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { FaLongArrowAltRight } from "react-icons/fa";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Context1 from '../Context/Context1';


const Stats = () => {

        const [CountOn, setCountOn] = useState(false);
       let {Tracker} = useContext(Context1)

  return (
    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
    <StatsDiv ref={Tracker}>
        <div className='stats'>
                <div className="text text-center py-10 flex justify-center items-center flex-col">
                    <div className="big text-white font-bold leading-[55.2px]">SWIRL365 Flawless Track Record</div>
                    <div className="small font-light leading-[25.2px] text-white w-[650px] mt-3">
                    Enjoy peace of mind with our proven track record in animation production, featuring hundreds of successful projects, satisfied clients, and industry-leading turnaround times.
                    </div>

<br />

                    <div className="stats flex items-center justify-center gap-36 py-8">
                            <div className="Creative-Projects text-white">
                                <div className='font-extrabold text-[37px] leading-[60px] three'>{CountOn ? <CountUp start={0} end={114} duration={5} delay={0}/> : 114}+</div>
                                <div className='font-light flex gap-2 items-center three-under'>Creative projects <FaLongArrowAltRight /></div>
                            </div>
                      
                         

                            <div className="Creative-Projects text-white relative">
                            <div className='hr bg-[#919191]'></div>
                                <div className='font-extrabold text-[37px] leading-[60px] three'>{CountOn ? <CountUp start={0} end={10} duration={5} delay={0}/> : 10}K</div>
                                <div className='font-light flex gap-2 items-center three-under'>Project views <FaLongArrowAltRight /></div>
                            </div>

                            <div className="Creative-Projects text-white relative">
                            <div className='hr bg-[#919191]'></div>
                                <div className='font-extrabold text-[37px] leading-[60px] three'>{CountOn ? <CountUp start={0} end={30} duration={5} delay={0}/> : 30}+</div>
                                <div className='font-light flex gap-2 items-center three-under  '>Success stories<FaLongArrowAltRight /></div>
                            </div>
                    </div>
                </div>
        </div>
    </StatsDiv>
    </ScrollTrigger>
  )
}

export default Stats;

const StatsDiv = styled.div`

 background-image: url("/Project IMG/statsbg.png");
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-position: center center;
  background-size:cover ;


.big{
    font-size: 2.3vw;
    
    @media (max-width:1352px) {
        font-size: 3vw;
    }
    @media (max-width:992px) {
        font-size: 4.4vw;
    }
    @media (max-width:720px) {
        font-size: 5vw;
    }
    @media (max-width:620px) {
        font-size: 6vw;
    }
    @media (max-width:450px) {
        font-size: 6vw;
        padding: 0px 5px;
    }
}
.small{
    @media (max-width:720px) {
       font-size: 12px;
       width: 95vw;
    }
    @media (max-width:524px) {
       font-size: 11px;
       width: 98vw;
       margin-top: 0px !important;
       line-height: 18px;
    }
 
}
.stats{
    @media (max-width:720px) {
        gap: 60px;
    }
    @media (max-width:430px) {
        gap: 40px;
    }
    @media (max-width:568px) {
      justify-content: space-between;
      padding: 0px 5px;
      .three{
            font-size: 5.5vw;
      }
      .three-under{
        font-size: 2.6vw;
      }
    }
}

.hr{
    height: 100px;
    position: absolute;
    top: 0px;
    left: -20px;
    width: 2px;
}
`