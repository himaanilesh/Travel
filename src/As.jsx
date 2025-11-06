import React, { useState } from 'react'

const AS = () => {
  const [name, setname] = useState("Hima")
  const hello =()=>{
    setname=("Anilesh")
  }
  return (
    <>
      <h1>{name} </h1>
      <button onClick={hello}>Click me</button>


    </>
  )
}

export default AS