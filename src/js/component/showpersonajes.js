import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const cardStyle = { height: '100%' };

export const ShowPersonajes = () => {
  const personajes = [
    {
      nombre: "Luke Skywalker",
      descripcion:
        "Luke Skywalker es un personaje ficticio y el protagonista principal de la trilogía original de la franquicia de Star Wars.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTKxtIppU46L_tuECBbAftlforOuVliYNEg&usqp=CAU",
    },
    {
      nombre: "Darth Vader",
      descripcion:
        "Darth Vader es un personaje ficticio de la franquicia de Star Wars. Es el principal antagonista de la trilogía original y el principal protagonista de la trilogía de precuelas.",
      imagen:
        "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg",
    },
    {
      nombre: "Princesa Leia",
      descripcion:
        "La Princesa Leia es un personaje ficticio de la franquicia de Star Wars, interpretado en las películas por Carrie Fisher. Es miembro del Senado Imperial y agente de la Alianza Rebelde.",
      imagen:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/princesa-leia-carrie-fisher-1540113645.png",
    },
    {
      nombre: "Han Solo",
      descripcion:
        "Han Solo es un personaje ficticio de la franquicia de Star Wars, interpretado en las películas por Harrison Ford. Es un contrabandista y piloto del Halcón Milenario que se une a la Alianza Rebelde.",
      imagen:
        "https://images3.alphacoders.com/865/86515.jpg",
    }
  ];

  return (
    <Container>
      <Row className="character-cards">
        {personajes.map((personaje, index) => (
          <Col key={index}>
            <Card className="card-custom d-flex flex-column" style={{ ...cardStyle, width: '18rem' }}>
              <Card.Img
                variant="top"
                src={personaje.imagen}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{personaje.nombre}</Card.Title>
                <Card.Text>{personaje.descripcion}</Card.Text>
                <div className="mt-auto">
                  <Button variant="primary">Más información</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
