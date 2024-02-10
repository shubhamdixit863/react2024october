import React ,{useState} from 'react'
import Thumbnail from './Thumbnail'

const Data = () => {
    const [state,setState]=useState([{
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },{
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },{
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },{
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },{
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },{
        title:"Thumbnail",
        content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    }


])
  return (
    <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {
            state.map(ele=>{
                return    <Thumbnail/>
            })
        }
     
      
      </div>
    </div>
  </div>
  )
}

export default Data