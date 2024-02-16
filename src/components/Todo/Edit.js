import React, { useState } from 'react'
import {  useParams } from 'react-router-dom';


const Edit = () => {
    const [list,setList]= useState(["An item","A second item","A third item","A fourth item","And a fifth one"])
    let {todoId}= useParams();
    console.log(todoId);

const change=()=>{

}

  return (
    <div>
       <div>
<div className="mb-3">
  <label  className="form-label">Todo</label>
  <input type="text" className="form-control" value={list[todoId]} id="exampleFormControlInput1" placeholder="" onChange={change} />
</div>
<button type="button" className="btn btn-primary" >Add Todo</button>

    </div>
   
   
    </div>
  )
}

export default Edit