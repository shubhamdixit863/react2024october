import React ,{useState} from 'react'

const List = () => {
  const [state,setState]= useState(["An item","A second item","A third item","A fourth item","And a fifth one"])
 const [data,setData]=useState("List Page")
  return (
    <div>
      <h1>{data}</h1>
      <ul class="list-group">
        {
          state.map(ele=>{
            return <li class="list-group-item">{ele}</li>
          })

        }
  
</ul>
    </div>
  )
}

export default List