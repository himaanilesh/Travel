import React from 'react'
import { } from "re"
const Map = () => {
    const objArray=[
        {name:"Hima",Age:26,Qualification:"MCA"},
        {name:"Ayana",Age:26,Qualification:"MCA"},
        {name:"Anjana",Age:26,Qualification:"MCA"},
        {name:"Krishna",Age:26,Qualification:"MCA"}
    ];
  return (
    <div
    className='row'>
         {objArray.map((item)=>{
                return(
                   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

        //             <div style={{
        //     border: "1px solid black",
        //     width:"300px",
        //     margin:"15px",
        //     textAlign:'center',
        //     padding:"20px",
        //     backgroundColor:"light green",
        // }}>
        
           
                    
        //                 <h1>{item.name}</h1>
        //                 <h3>{item.Age}</h3>
        //                 <p>{item.Qualification}</p>
                    </div>

                );
            }
            ))}
        
    </div>
  )
}

export default Map