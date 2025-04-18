import { Col, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const AltroDaEsplorare = () => {
  const categories = [
    "Esplora per genere",
    "Worldwide",
    "Video Musicali",
    "Decenni",
    "Classifiche",
    "Nuovi artisti",
    "Attività e stati d'animo",
    "Audio spaziale",
    "Hit del passato",
  ];
  return (
    <Row className="mb-5 ">
      <h4>Altro da esplorare</h4>
      {categories.map((category, i) => (
        <Col xs={12} md={6} lg={4} className="rounded-2 g-3">
          <Row>
            <Col xs={10} className="bg-dark py-3 rounded-start">
              <h6 className="customc">{category}</h6>
            </Col>
            <Col xs={1} className="bg-dark py-3 rounded-end">
              <ArrowRight className="fs-5" />
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};
export default AltroDaEsplorare;
