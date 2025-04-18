import { Button, Col, Form, Row } from "react-bootstrap";
import { Broadcast, Grid, HouseDoor } from "react-bootstrap-icons";

const NavbarD = () => {
  return (
    <Row>
      <Col xs={12} className="my-3">
        <img
          className="w-50"
          src="../public/assets AM/logos/music.svg"
          alt="logo"
        />
      </Col>
      <Col xs={12}>
        <Form className="d-flex mb-3 mt-3">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 text-black"
            aria-label="Search"
          />
          <Button
            variant="outline-success custom-navbar-toggle"
            className="d-none d-xl-block"
          >
            Search
          </Button>
        </Form>
      </Col>
      <Col xs={12} className="text-white d-flex align-items-center">
        <HouseDoor className="me-3 fs-4 mb-2" />
        <h4 className="">Home</h4>
      </Col>
      <Col xs={12} className="text-white d-flex align-items-center">
        <Grid className="me-3 fs-4 mb-2" />
        <h4 className="">Novità</h4>
      </Col>
      <Col xs={12} className="text-white d-flex align-items-center">
        <Broadcast className="me-3 fs-4 mb-2" />
        <h4 className="">Radio</h4>
      </Col>
    </Row>
  );
};
export default NavbarD;
