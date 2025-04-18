import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Novita = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Row>
        <Col>
          <h1 className="border-bottom border-secondary my-3">Novità</h1>
          <Row
            className="my-3 flex-nowrap overflow-auto"
            style={{
              whiteSpace: "nowrap",
              overflowX: "auto",
            }}
          >
            <Col
              xs={12}
              lg={6}
              className="flex-shrink-0"
              style={{
                width: isLargeScreen ? "50%" : "75%",
              }}
            >
              <p>NUOVA STAZIONE RADIO</p>
              <h6>Rilassati, al resto pensiamo noi.</h6>
              <img
                src="./public/assets AM/images/1a.png"
                alt="staz radio"
                className="w-100 rounded-3"
              />
            </Col>
            <Col
              xs={12}
              lg={6}
              className="flex-shrink-0"
              style={{
                width: isLargeScreen ? "50%" : "75%",
              }}
            >
              <p>NUOVA STAZIONE RADIO</p>
              <h6>Ecco la nuova casa della musica latina</h6>
              <img
                src="./public/assets AM/images/1b.png"
                alt="staz radio"
                className="w-100 rounded-3"
              />
            </Col>
            <Col
              xs={12}
              lg={6}
              className="flex-shrink-0"
              style={{
                width: isLargeScreen ? "50%" : "75%",
              }}
            >
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
