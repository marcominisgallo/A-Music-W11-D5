import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const DinamicContent = () => {
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const artist = [
    "Annalisa",
    "ABBA",
    "Nebulossa",
    "Taylor Swift",
    "Lana Del Rey",
    "Raffaella Carra",
    "Whitney Houston",
    "Lady Gaga",
    "Katy Perry",
    "Noemi",
    "Madonna",
    "Maneskin",
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  useEffect(() => {
    const fetchData = () => {
      const results = [];
      const fetchPromises = artist.map((name) =>
        fetch(URL + name)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              console.error(`Errore nella fetch per ${name}:`, response.status);
              return null;
            }
          })
          .then((json) => {
            if (json && json.data && json.data.length > 0) {
              results.push(json.data[1]); // Prendi il primo elemento
            }
          })
          .catch((error) => {
            console.error(`Errore durante la fetch per ${name}:`, error);
          })
      );

      Promise.all(fetchPromises).then(() => {
        setData(results);
        setLoading(false); // Imposta loading a false quando i dati sono caricati
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Row className="mb-5">
        <h4>
          Nuove uscite <ArrowRight />
        </h4>
        {loading ? ( // Mostra lo spinner se loading è true
          <Spinner animation="border" role="status" className="mx-auto">
            <span className="visually-hidden">Caricamento...</span>
          </Spinner>
        ) : (
          data.map((item, index) => (
            <Col xs={4} md={3} xl={2} key={index}>
              <Row>
                <Col xs={12}>
                  <img
                    src={item.album.cover_big}
                    alt={item.title}
                    className="w-100 rounded-2"
                  />
                </Col>
                <Col xs={12}>
                  <p>{item.artist.name}</p>
                </Col>
              </Row>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default DinamicContent;
