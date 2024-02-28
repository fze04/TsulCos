import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar fixed="top" data-bs-theme="dark" id="nav">
        <Container>
          <Container>
            <Navbar.Brand href="#homenv">
              <img
                alt=""
                src="/images/logot.png"
                id="logot"
                className="d-inline-block align-top"
              />{" "}
              TsulBioCosmetic
            </Navbar.Brand>
          </Container>

          <Nav className="me-auto">
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#9eb7a0" : "white",
                })}
              >
                Home
              </NavLink>
            </div>

            <div style={{ margin: "10px" }}>
              <NavLink
                to="/Products"
                style={({ isActive }) => ({
                  color: isActive ? "#9eb7a0" : "white",
                })}
              >
                {" "}
                Products{" "}
              </NavLink>
            </div>

            <div style={{ margin: "10px" }}>
              <NavLink
                to="/components/form/connect"
                style={({ isActive }) => ({
                  color: isActive ? "#9eb7a0" : "white",
                })}
              >
                Connect
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
