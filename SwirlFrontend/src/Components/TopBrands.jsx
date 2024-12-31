import React, { useContext } from 'react'
import styled from 'styled-components';
import Context1 from '../Context/Context1';




const TopBrands = () => {


  const {DarkLight  } = useContext(Context1)

  let Textcolor = DarkLight ? "black" : "white" ;
  let bgcolor = DarkLight ? "white" : "linear-gradient(135deg,#202A66,#82155A)" ;

  return (
    <TopBrandsDiv style={{background:`${bgcolor}`}}>
        <div>
        <div className="text text-[17px] font-bold leading-[25px] text-center mb-6 text-[#C707E4]">Testimonials</div>
            <div className={`text text-[17px] font-medium leading-[25px] text-center text-${Textcolor}`}>Used by over 450+ of the world's best startups and established enterprises</div>
            <div className="img-div flex items-center justify-center mt-4 flex-wrap gap-5">
                <img src="/Project IMG/top1.png" alt="" />
                <img src="/Project IMG/top2.png" alt="" />
                <img src="/Project IMG/top3.png" alt="" />
                <img src="/Project IMG/top4.png" alt="" />
                <img src="/Project IMG/top6.png" alt="" />
                <img src="/Project IMG/top9.png" alt="" />
                <img src="/Project IMG/top7.png" alt="" />
                <img src="/Project IMG/top8.png" alt="" />
                <img src="/Project IMG/top5.png" alt="" />             
            </div>
        </div>
    </TopBrandsDiv>
  )
}

export default TopBrands;

const TopBrandsDiv = styled.div`

    padding: 50px 10px;

`