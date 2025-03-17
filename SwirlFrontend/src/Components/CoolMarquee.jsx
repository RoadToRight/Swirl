import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components';

const CoolMarquee = () => {
      const containerRef = useRef();
      const marqueeRef = useRef();

        const [Multiplier, setMultiplier] = useState(1)
      
        const calculateMultiplier = useCallback(
          () => {
            if(!marqueeRef  || !containerRef) return;
      
            const containerRect = containerRef.current.getBoundingClientRect()
            const marqueeRect = marqueeRef.current.getBoundingClientRect()
      
            const containerWidth = containerRect.width
            const marqueeWidth = marqueeRect.width
      
            if(marqueeWidth < containerWidth){
              setMultiplier(Math.ceil(containerWidth / marqueeWidth))
            }else{
              setMultiplier(1);
            }
          },
          [],
        )
      
      useEffect(() => {

        
      calculateMultiplier()
      }, [calculateMultiplier])
      
      const multiplyChildren = useCallback(
        (multiplierCall) => {
          const arraySize = multiplierCall >= 0 ? multiplierCall : 0;
          return [...Array(arraySize)].map((x,i) => <Fragment key={i}>{children}</Fragment>)
        },
        [],
      )
      
      const ANIMATION = useRef()
    
    
        useEffect(() => {
        // Store GSAP animation instance in Animation1
        Animation1.current = window.gsap.fromTo(
          ANIMATION.current,
          {
            x: 0, // Starting position (right side)
          },
          {
            x: "-100%", // Ending position (left side)
            delay: 1,
            duration: 28,
            repeat: -1, // Repeat indefinitely
       
          }
        );
      
    
      }, []);  
  return (
    <Cool ref={containerRef}>
        <div ref={ANIMATION}>

        </div>
        <div ref={ANIMATION}>

</div>
    </Cool>
  )
}

export default CoolMarquee

const Cool = styled.div`
    
`