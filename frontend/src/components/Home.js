import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";


function Home() {
  return (
    <>
      <div>
        <Row style={{ marginTop: "3.5%" }}>
          <Col lg={true}>
            <Image src="/images/Untitled-6.png" fluid />
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#e2725b" }}>
        <br></br>
      </div>
      <div>
        <Row>
          <Col lg={true}>
            <Image src="images/Background Io.jpg" fluid />
          </Col>
          <Col lg={true}>
            <p
              className="text-center"
              style={{
                fontSize: "70px",
                fontWeight: "bolder",
                color: "#9eb7a0",
              }}
            >
              <br></br>
              Best Formula For Your Hair Health <br></br>
              <Badge bg="dark">New</Badge>
            </p>
            <br></br>
            <p></p>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#1E2426" }}>
        <br></br>
      </div>

      <div>
        <Row>
          <Col lg={true}>
            <h1
              className="text-center fw-bold my-5"
              style={{ fontSize: "80px", color: "#1e2624" }}
            >
              Nigella{" "}
              <span style={{ fontSize: "80px", color: "#9eb7a0" }}>
                Sativa{" "}
              </span>
            </h1>
            <br></br>
            <h2 className="text-center fw-bold" style={{ fontSize: "50px" }}>
              Black Seed provides best nourishment to hair.
            </h2>
            <br></br>
          </Col>
          <Col lg={true}>
            <Image src="/images/Negella.jpg" fluid />
          </Col>
        </Row>
      </div>

  
 

      <div >
 <Image  src="/images/ACCEUIL.jpg" alt=''  fluid/> 

</div>
      

<div className="container my-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src="/images/Hair.jpg" alt=" " />
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
    </>
  );
}
export default Home;
