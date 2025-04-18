import { Col, Container, Row } from "react-bootstrap";

const Novita = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className="border-bottom border-secondary my-3">Novità</h1>
          <Row
            className="my-3  flex-nowrap overflow-auto"
            style={{ whiteSpace: "nowrap" }}
          >
            <Col xs={12} lg={6} className="w-75">
              <p>NUOVA STAZIONE RADIO</p>
              <h6>Rilassati, al resto pensiamo noi.</h6>
              <img
                src="./public/assets AM/images/1a.png"
                alt="staz radio"
                className="w-100 rounded-3"
              />
            </Col>
            <Col xs={12} lg={6} className="w-75">
              <p>NUOVA STAZIONE RADIO</p>
              <h6>Ecco la nuova casa della musica latina</h6>
              <img
                src="./public/assets AM/images/1b.png"
                alt="staz radio"
                className="w-100 rounded-3"
              />
            </Col>
            <Col xs={12} lg={6} className="w-75">
              <p>NUOVA STAZIONE RADIO</p>
              <h6>Ecco per te Club MusicRadio</h6>
              <img
                src="./public/assets AM/images/1c.png"
                alt="staz radio"
                className="w-100 rounded-3"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Novita;
