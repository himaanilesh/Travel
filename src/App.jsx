import React from 'react'
import Header from './Single page Application/Header';
import Home from './Single page Application/Home';
import Login from './Single page Application/Login';
import Register from './Single page Application/Register';
import About from './Single page Application/About';
import Service from './Single page Application/Service';

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
 
  return (
   <div>
<BrowserRouter> 
<Header/> 
<Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
     <Route path="/service" element={<Service/>}/>

</Routes> 
</BrowserRouter>


   </div>
  );
};

export default App
// import React from 'react'
// import { Table } from 'react-bootstrap'

// const App = () => {
//   const objectArray=
  
  
//     [
//       {Name:"Hima",Age:26,Qualification:"MCA",Location:"Calicut"},
//       {Name:"Hima",Age:26,Qualification:"MCA",Location:"Calicut"},
//       {Name:"Hima",Age:26,Qualification:"MCA",Location:"Calicut"},
//       {Name:"Hima",Age:26,Qualification:"MCA",Location:"Calicut"}
//     ];
//     const obj={ Name:"Hima",Age:26,Qualification:"MCA",Location:"Calicut"}
//     const AddItems=()=>{
//     const added=objectArray.concat(object);
//     console.log=(added);
//     }
  
//   return (
//     <div> 
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Qualification</th>
//           <th>Location</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//          objectArray.map((i,index )=>{
//           console.log(index); 
//           return(
               
//              <tr key={index}>
//           <td>{i.Name}</td>
//           <td>{i.Age}</td>
//           <td>{i.Qualification}</td>
//           <td>{i.Location}</td>
//         </tr>
//           )
//         })
//         }

       
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
      
//     </Table>
//     <div className='text-end me-4'>
//     <button className='btn btn-primary' onClick={AddItems}>Add item</button>
//     </div>
//     </div>
//   )
// };

// export default App