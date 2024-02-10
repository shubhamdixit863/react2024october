import React ,{useState} from 'react'

const Banner = () => {
  const [title,setTitle]=useState("Album example")
  const [content,setContent]=useState("Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.")
  return (
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">{title}</h1>
        <p class="lead text-body-secondary">{content}</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>
  )
}

export default Banner