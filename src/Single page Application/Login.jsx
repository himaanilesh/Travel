import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate =useNavigate();
  const NavigateToRegister =()=>{
    navigate("/registerform");
  };             
  return (
    <div>
      <h1 className="text-center">LOGIN</h1>
      <Form className='w-50 m-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Text" placeholder="Enter your name" />
        
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <br />
      <button onClick={NavigateToRegister}>Register</button>
    </Form>
    </div>
  )
}

export default Login