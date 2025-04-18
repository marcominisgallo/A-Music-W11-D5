import { Button, Col, Container, Form, Row } from "react-bootstrap";

import NavbarD from "./NavbarD";
import Novita from "./Novita";
import NuoviEpisodi from "./NuoviEpisodi";
import AMFooter from "./AMFooter";
import DinamicContent from "./DinamicContent";
import AltroDaEsplorare from "./AltroDaEsplorare";
import PlayerD from "./PlayerD";

const Home = () => {
  return (
    <Container fluid className="bg-black">
      <Row>
        <Col xs={0} lg={2} className=" d-none d-lg-block bg-dark">
          <NavbarD />
        </Col>
        <Col xs={12} lg={10} className="text-white bg-black">
          <Container fluid className="mt-3">
            <PlayerD />
            <Novita />
            <NuoviEpisodi />
            <DinamicContent />
            <AltroDaEsplorare />
            <AMFooter />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
