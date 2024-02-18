import React,{useEffect, useState} from 'react'

const FunctionBased = () => {
    const [stateDependecies,setState]=useState();
    const [stateDependecies2,setState2]=useState();

// mounting phase

useEffect(()=>{

},[])

// updation phase
// will be used never almost
useEffect(()=>{

})

// we will be using this one 
useEffect(()=>{

},[stateDependecies,stateDependecies2])

// unmounting 

useEffect(()=>{
    return ()=>{
        // this function would be called when the component is removed from the dom 
    }

},[])



  return (
    <div>


    </div>
  )
}

export default FunctionBased