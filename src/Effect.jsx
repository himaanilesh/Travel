import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setcount( count +1);
            
        }, 1000);
      
    }, [count])
    
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Effect