
import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';

function Formsignin() {
  return (

   <div className='my-5' >
     
     <Form className='container  my-5' id='form' style={{paddingBottom:"8%"}}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
<br></br>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <br></br>
      <Button  type="submit"  id='btn'>
        Sign-in
      </Button>
    </Form>
   </div>
  );
}

export default Formsignin;

