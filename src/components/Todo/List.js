import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";




const List = ({number}) => {

  const [list,setList]= useState(["An item","A second item","A third item","A fourth item","And a fifth one"])
 const [data,setData]=useState("List Page")
 const [input ,setInput]=useState("")
 const navigate=useNavigate();
const change=(event)=>{
   setInput(event.target.value)
}

const handleClick=()=>{
  //console.log("hii there")
  let newArray=[...list,input]
  setList(newArray)
}

const deleteMe=(index)=>{
   console.log("delete button called",index)

  let item1= list.slice(0,index);
  let item2=list.slice(index+1);
  let newArr=[...item1,...item2]
  setList(newArr);

}
 
const editMe=(index)=>{
  // dynamic routing 

  navigate(`/todo/edit/${index}`)


}

  return (
    <div>
       <div>
<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Todo</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" onChange={change} />
</div>
<button type="button" class="btn btn-primary" onClick={handleClick}>Add Todo</button>

    </div>
      <h1>{data}</h1>
      <ul class="list-group">
        {
          list.map((ele,index)=>{
            return <li class="list-group-item">{ele} 
            <button onClick={()=>deleteMe(index)} className='btn btn-danger'>Delete</button> 

            <button onClick={()=>editMe(index)} className='btn btn-danger'>Edit</button> 
            
            </li>
          })

        }
  
</ul>
    </div>
  )
}

export default List



