
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Formsignup() {
  
  

    return (
     <div className=' my-5'>
 <Form>
 <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
        <Row className="mb-3">
        
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
  
       
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip code</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Agree to the terms" />
        </Form.Group>
  
        <Button  type="submit" id='btn' border="none">
          Sign-up
        </Button>
      </Form>

     </div>
    );
  }
  


export default Formsignup;

