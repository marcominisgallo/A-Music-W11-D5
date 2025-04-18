import { Col, Container, Row } from "react-bootstrap";

const AMFooter = () => {
  return (
    <Row fluid>
      <Col xs={12}>
        <Row>
          <Col xs={3} lg={2}>
            <p>Italia</p>
          </Col>
          <Col xs={3} lg={2}>
            <p className="text-secondary">English(UK)</p>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <p className="text-secondary">
          Copyright &copy; 2024 <span className="text-white">Apple Inc.</span>{" "}
          Tutti i diritti riservati.{" "}
        </p>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={4} lg={4} xl={3} className="border-end border-secondary">
            <p>Condizioni dei servizi internet</p>
          </Col>
          <Col xs={4} lg={3} xl={2} className="border-end border-secondary">
            <p>Apple Music e privacy</p>
          </Col>
          <Col xs={3} lg={3} xl={2} className="border-end border-secondary">
            <p>Avviso sui cookie</p>
          </Col>
          <Col xs={2} lg={2} className="border-end border-secondary">
            <p>Supporto</p>
          </Col>
          <Col xs={2} lg={2} className="border-end border-secondary">
            <p>Feedback</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AMFooter;
