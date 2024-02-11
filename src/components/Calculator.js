import React, { useState } from 'react'

const Calculator = () => {
    const [result,setResult]=useState(0);
    const [a,setA]=useState("");
    const [b,setB]=useState("");

    const handleChangeA=(event)=>{
        setA(event.target.value)

    }

    const handleChangeB=(event)=>{
        setB(event.target.value);
    }

    const handleClick=(event)=>{
        setResult(parseFloat(a)+parseFloat(b));
    }
  return (
    <div>

        <input type='number' onChange={handleChangeA}/>
        <input type='text' onChange={handleChangeB}/>

        <button onClick={handleClick}>
            Add
        </button>

        <h1>{result}</h1>


    </div>
  )
}

export default Calculator