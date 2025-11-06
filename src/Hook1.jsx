import React, { useState } from 'react'


const Hook1 = () => {
    const [name, setname] = useState("Hima")
    const hello=()=>{
        setname("Anilesh")
    }
  return (
    <div>
         {name}
         <button onClick={hello}>change name </button>
          {/* //functionnname=Hello// */}
    </div>
  )
}

export default Hook1