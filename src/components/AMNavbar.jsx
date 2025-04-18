import Container from "react-bootstrap/Container";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Form } from "react-bootstrap";

function AMNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="dark"
      className="d-lg-none"
    >
      <Container fluid>
        <Navbar.Toggle
          className="custom-navbar-toggle"
          aria-controls="responsive-navbar-nav"
        />

        <Navbar.Brand href="#home">
          <img
            src="../public/assets AM/logos/music.svg"
            height="100%"
            className="d-inline-block align-top text-white"
            alt=""
          />
        </Navbar.Brand>
        <Nav.Link className="customc fs-5" href="#">
          Accedi
        </Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-4">
            <Form className="d-flex mb-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
              />
              <Button variant="outline-success custom-navbar-toggle">
                Search
              </Button>
            </Form>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Novità</Nav.Link>
            <Nav.Link href="#deets">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AMNavbar;
