import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Planetas = () => {
  const planets = [
    {
      name: "Tatooine",
      description:
        "Tatooine es un planeta desértico en el universo de Star Wars. Es el planeta natal de Anakin Skywalker y Luke Skywalker, y es conocido por sus dos soles y peligroso mundo criminal.",
      image:
        "https://cdn.pixabay.com/photo/2021/05/04/15/11/star-wars-6224826_960_720.jpg",
    },
    {
      name: "Hoth",
      description:
        "Hoth es un planeta helado en el universo de Star Wars. Es el lugar de la base Echo de la Alianza Rebelde, que es atacada por el Imperio Galáctico en El Imperio Contraataca.",
      image:
        "https://cdn.pixabay.com/photo/2017/05/10/20/29/star-wars-2302345_960_720.jpg",
    },
    {
      name: "Endor",
      description:
        "Endor es una luna boscosa en el universo de Star Wars. Es el lugar de la aldea Ewok y la batalla final entre la Alianza Rebelde y el Imperio Galáctico en El Retorno del Jedi.",
      image:
        "https://cdn.pixabay.com/photo/2019/05/08/19/56/star-wars-4189246_960_720.jpg",
    },
    {
      name: "Naboo",
      description:
        "Naboo es un planeta situado en la galaxia de Star Wars. Es el hogar del pueblo naboo y conocido por su belleza natural y su arquitectura icónica, como el Palacio Real de Theed.",
      image:
        "https://cdn.pixabay.com/photo/2017/06/28/13/05/naboo-2449210_960_720.jpg",
    }
  ];

  return (
    <Container fluid className="star-wars">
      <Row>
        <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
        <Col>
          <h1 className="text-center">Planetas Star Wars</h1>
        </Col>
        <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
      </Row>
      <Row className="character-cards">
        {planets.map((planet, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={planet.image} style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body>
                <Card.Title>{planet.name}</Card.Title>
                <Card.Text>{planet.description}</Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

