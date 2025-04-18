import { Col, Row } from "react-bootstrap";
import { ArrowRight, ArrowRightSquare } from "react-bootstrap-icons";

const NuoviEpisodi = () => {
  return (
    <Row className="mt-3 d-flex justify-content-between">
      <h3>
        Nuovi episodi radio <ArrowRight />
      </h3>
      <Col xs={4} md={3} xl={2}>
        <Row>
          <Col xs={12}>
            <img
              src="./public/assets AM/images/2a.png"
              alt="cover"
              className="w-100 rounded-2"
            />
          </Col>
          <Col xs={12}>
            <p>Pròlogo con Abuelo</p>
          </Col>
        </Row>
      </Col>
      <Col xs={4} md={3} xl={2}>
        <Row>
          <Col xs={12}>
            <img
              src="./public/assets AM/images/2b.png"
              alt="cover"
              className="w-100 rounded-2"
            />
          </Col>
          <Col xs={12}>
            <p>The Wanderer</p>
          </Col>
        </Row>
      </Col>
      <Col xs={4} md={3} xl={2}>
        <Row>
          <Col xs={12}>
            <img
              src="./public/assets AM/images/2c.png"
              alt="cover"
              className="w-100 rounded-2"
            />
          </Col>
          <Col xs={12}>
            <p>Micheal Bublè & Carly Pearce</p>
          </Col>
        </Row>
      </Col>
      <Col xs={4} md={3} xl={2} className="d-none d-md-block">
        <Row>
          <Col xs={12}>
            <img
              src="./public/assets AM/images/2d.png"
              alt="cover"
              className="w-100 rounded-2"
            />
          </Col>
          <Col xs={12}>
            <p>Stephan Moccio: The Zane Lowe Interview</p>
          </Col>
        </Row>
      </Col>
      <Col xs={4} md={3} xl={2} className="d-none d-xl-block">
        <Row>
          <Col xs={12}>
            <img
              src="./public/assets AM/images/2e.png"
              alt="cover"
              className="w-100 rounded-2"
            />
          </Col>
          <Col xs={12}>
            <p>Chart Spotlight: Julia Michaels</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default NuoviEpisodi;
