import React, { useState } from 'react'

const Pro = () => {
    const [test, settest] = useState("Sample test")
    
  return (
    <div>
{test}
    </div>
  )
}

export default Pro