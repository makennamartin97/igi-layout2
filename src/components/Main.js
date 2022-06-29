import React, { useState, useEffect, useRef,useContext } from 'react';
import cells from 'vanta/dist/vanta.cells.min';
import * as THREE from 'three'
import LoginContext from '../contexts/LoginContext';
import Login from './Login.js';









function Main() {
  const {loginpage} = useContext(LoginContext);
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null);
      useEffect(() => {
      if (!vantaEffect) {
          setVantaEffect(cells({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x0,
          color2: 0xef2,
          size: 1.70,
          speed: 3.20,
          THREE: THREE,

          }))
  }
  
  return () => {
    if (vantaEffect) vantaEffect.destroy()
  }
}, [vantaEffect])

  useEffect(() => {
    

  }, [loginpage]);

  
    return (
      <div id="vanta-background"ref={vantaRef}>
        
       
      
      <div className="main">
    
        {
          loginpage ? (<Login/>) : (
<>
            <div className='colrow'>
            <h2 >BYTE THE GLASS</h2>
            <h1> BUILD THE FUTURE</h1>
            </div>
            {/* <div class="perspective-text">
      <div class="perspective-line">
        <p></p>
        <p>BYTE THE GLASS</p>
      </div>
      <div class="perspective-line">
        <p>BYTE THE GLASS</p>
        <p>BYTE THE GLASS</p>
      </div>
      <div class="perspective-line">
        <p>BYTE THE GLASS</p>
        <p>BUILD THE FUTURE</p>
      </div>
      <div class="perspective-line">
        <p>BUILD THE FUTURE</p>
        <p>BUILD THE FUTURE</p>
      </div>
      <div class="perspective-line">
        <p>BUILD THE FUTURE</p>
        <p></p>
      </div>
    </div> */}


            {/* <h2 > BUILD THE FUTURE</h2> */}
            </>

  
  )
        }
         
          
      </div>
      </div>
    );
  }
  
  export default Main;