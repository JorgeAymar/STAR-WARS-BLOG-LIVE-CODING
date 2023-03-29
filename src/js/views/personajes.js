import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Personajes = () => {
  const characters = [
    {
      name: "Luke Skywalker",
      description:
        "Luke Skywalker is a fictional character and the main protagonist of the original film trilogy of the Star Wars franchise.",
      image:
        "https://cdn.pixabay.com/photo/2016/06/28/18/48/star-wars-1489135_960_720.jpg",
    },
    {
      name: "Darth Vader",
      description:
        "Darth Vader is a fictional character in the Star Wars franchise. He is a primary antagonist in the original trilogy and a primary protagonist in the prequel trilogy.",
      image:
        "https://cdn.pixabay.com/photo/2016/06/28/18/48/star-wars-1489132_960_720.jpg",
    },
    {
      name: "Princess Leia",
      description:
        "Princess Leia is a fictional character in the Star Wars franchise, portrayed in films by Carrie Fisher. She is a member of the Imperial Senate and an agent of the Rebel Alliance.",
      image:
        "https://cdn.pixabay.com/photo/2016/06/28/18/48/star-wars-1489134_960_720.jpg",
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
    <Container fluid className="star-wars">
      <Row>
        <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
        <Col>
          <h1 className="text-center">Star Wars Characters</h1>
        </Col>
        <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
      </Row>
      <Row className="character-cards">
        {characters.map((character, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={characters.image} style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>{character.description}</Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

