import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function DetailPersonaje() {
    const { obj, index } = useParams();

    const personaje = JSON.parse(obj);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="my-4">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(index) + 1}.jpg`}
                    alt={`Imagen de ${personaje.name}`}
                    className="img-fluid"
                  />
                </Col>
                <Col md={8}>
                  <h2>{personaje.name}</h2>
                  <p>
                    <strong>Altura: </strong>
                    {personaje.height} cm
                  </p>
                  <p>
                    <strong>Peso: </strong>
                    {personaje.mass} kg
                  </p>
                  <p>
                    <strong>Color de cabello: </strong>
                    {personaje.hair_color}
                  </p>
                  <p>
                    <strong>Color de piel: </strong>
                    {personaje.skin_color}
                  </p>
                  <p>
                    <strong>Color de ojos: </strong>
                    {personaje.eye_color}
                  </p>
                  <p>
                    <strong>Año de nacimiento: </strong>
                    {personaje.birth_year}
                  </p>
                  <p>
                    <strong>Género: </strong>
                    {personaje.gender}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailPersonaje;

