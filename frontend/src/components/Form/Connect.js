import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Formsignin from "./Formsignin";
import Row from 'react-bootstrap/Row';
import Formsignup from "./Formsignup";
import Image  from 'react-bootstrap/Image';



function Connect (){

    return (





<>
<div  >
     
     <Row style={{marginTop:"3.5%"}}>
      
      
       <Col lg={true} > 
       <Image src="/images/Untitled-6.png" fluid/>
    
       </Col>
     </Row>
     
     </div>
     <div style={{backgroundColor:"#1E2426"}}>
       <br></br>
        
     </div>
<div className="container-fluid my-5 text-center " >
<h1 style={{paddingTop:"10%",fontFamily:"monospace",fontSize:'70px'}}> Connect  with us </h1>
</div>


<div className="container  my-5"> 
<Row>
<Col  >
<Card  >
   <Card.Header as="h5" id="cardhead" className="text-center">Sign-in</Card.Header>
   <Card.Body >
     <Card.Title className="text-center" > Sign in Form </Card.Title>
     <Card.Text>
     <Formsignin/>

     </Card.Text>
   </Card.Body>
 </Card>
 </Col>
 
 <Col >
 <Card >
   <Card.Header as="h5" className="text-center" id="cardhead"> Sign up </Card.Header>
   <Card.Body>
     <Card.Title className="text-center">New ! Complete the form </Card.Title>
     <Card.Text>
     
     <Formsignup/>

     </Card.Text>
   </Card.Body>
 </Card>
 </Col >  
</Row>


</div>
 </>

    );
}
export default Connect;
