import React ,{useState} from 'react'

const ConditionRendering = () => {
    const [state,setState]=useState("bye")
  return (
    <div>
     {
        state=="hello"?<h1>HEllo</h1> :<h1>Bye</h1>
     }



    </div>
  )
}

export default ConditionRendering