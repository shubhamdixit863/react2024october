import React, { useState } from 'react'
import A from './A'
import B from './B'

const C = () => {
    const [colorA,setColorA]=useState('pink');
    const [colorB,setColorB]=useState('orange');

    const changeColor=()=>{
      setColorA("black");
      setColorB("brown")

    }
  return (
    <div>
     <A color={colorA}/>
     <button onClick={changeColor}>
       Change color
     </button>

     <B color={colorB}/>

    </div>
  )
}

export default C