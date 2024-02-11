import React ,{useState} from 'react'



const List = () => {
  const [list,setList]= useState(["An item","A second item","A third item","A fourth item","And a fifth one"])
 const [data,setData]=useState("List Page")
 const [input ,setInput]=useState("")
const change=(event)=>{
   setInput(event.target.value)
}

const handleClick=()=>{
  //console.log("hii there")
  let newArray=[...list,input]
  setList(newArray)
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
          list.map(ele=>{
            return <li class="list-group-item">{ele}</li>
          })

        }
  
</ul>
    </div>
  )
}

export default List