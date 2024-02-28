import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/esm/Image";
import Pagesham from "./Pagesham";

function Products() {
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
    <div>
      

      <div>
        <img src="" alt=""></img>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          color: "white",
          fontFamily :"montserrat",
          fontWeight: "bolder",
          fontSize: "80px",
          paddingTop: "10%",
          paddingBottom: "10%",
          backgroundImage:
            'url("/images/Acceuil 2.jpg")',
         backgroundRepeat:"no-repeat"
          
        }}
      >
        {" "}
        Discover Our Hair Products{" "}
      </h1>
      <Container id="cardpro">
        <Row>
          <Col>
            <Card  id="zoom" style={{ width: "18rem" }}>
          
                  <a href="/Pagesham" >  <Card.Img
                  variant="top"
                  src="/images/Shampoo (1).jpg"
                
                />  </a>
             
              <Card.Body>
                <Card.Title ><h2 style={{color:"#1e2624"}} >Hair Shampoo</h2></Card.Title>
                <Card.Text>
                For all hair types
                </Card.Text>
                <h5 style={{color:"#1e2624"}}>Price</h5>
                <Button className="btn-sm btn-light" id="btnpro">
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card        id="zoom" style={{ width: "18rem" }}>
              <Link to={"/"}>
                <Card.Img
                  variant="top"
                  src="/images/Démélant (1).jpg"
           
                />
              </Link>
              <Card.Body>
                <Card.Title > <h3 style={{color:"#1e2624"}} >Hair Conditionner </h3></Card.Title>
                <Card.Text>
                For all hair types
                </Card.Text>
                <h5>Price</h5>
                <Button className="btn-sm btn-light" id="btnpro">
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id="zoom" style={{ width: "18rem" }}>
              <Link to={"/"}>
                <Card.Img variant="top" src="/images/Serum.jpg"  />
              </Link>
              <Card.Body>
                <Card.Title><h3>Hair Serum</h3></Card.Title>
                <Card.Text>
                  For all hair types 
                </Card.Text>
                <h5>Price</h5>
                <Button className="btn-sm btn-light" id="btnpro">
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card  id="zoom" style={{ width: "18rem" }}>
              <Link href='/Pageshamp'>
                <Card.Img
                  variant="top"
                  src="/images/Masque (1).jpg"
                 
                />
              </Link>
              <Card.Body>
                <Card.Title>Hair mask</Card.Title>
                <Card.Text>
                  <h6 style={{fontWeight:"bold"}}>For all hair types </h6>
                </Card.Text>
                <h5> Price</h5>
                <Button className="btn-sm btn-light" id="btnpro">
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>



    <div className="container my-5">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Hair.jpg"
              alt=" "
            />
            <Carousel.Caption>
              <h3>Astuces anti-chute</h3>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Accueil 1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
       
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Acceuil 4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              
            </Carousel.Caption>
          </Carousel.Item>




          
        </Carousel>
      
      </div>

{/* 
BADGEUP */}
      <Container fluid>
        <Row
          className="justify-content-center "
          style={{ backgroundColor: "#9eb7a0", paddingRight: "13%" }}
        >
          <Col xs lg="2">
            <img src="/images/badge.png" alt="" id="badge"></img>
          </Col>
          <Col xs lg="2">
            <h6 id="badgeh"> Quality garanteed</h6>
          </Col>

          <Col xs lg="2">
            <img src="/images/delivery.png" alt="" id="badge"></img>
          </Col>
          <Col xs lg="2">
            <h6 id="badgeh"> Free shipping </h6>
          </Col>

          <Col xs lg="2">
            <img src="/images/pay.png" alt="" id="badge"></img>
          </Col>
          <Col xs lg="2">
            <h6 id="badgeh"> Pay on delivery</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
