import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class NavBarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/rentBike"}>
                  RentBike
                </Nav.Link>
                <Nav.Link as={Link} to={"/content"}>
                  Content
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />

          <br />
        </div>
      </Router>
    );
  }
}
