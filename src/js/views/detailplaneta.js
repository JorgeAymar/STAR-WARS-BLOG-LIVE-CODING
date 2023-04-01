import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function DetailPlaneta() {
    const { obj, index } = useParams();

    const planeta = JSON.parse(obj);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="my-4">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(index) + 1}.jpg`}
                    alt={`Imagen de ${planeta.name}`}
                    className="img-fluid"
                  />
                </Col>
                <Col md={8}>
                  <h2>{planeta.name}</h2>
                  <p>
                    <strong>Período de rotación: </strong>
                    {planeta.rotation_period} horas
                  </p>
                  <p>
                    <strong>Período orbital: </strong>
                    {planeta.orbital_period} días
                  </p>
                  <p>
                    <strong>Diámetro: </strong>
                    {planeta.diameter} km
                  </p>
                  <p>
                    <strong>Clima: </strong>
                    {planeta.climate}
                  </p>
                  <p>
                    <strong>Terreno: </strong>
                    {planeta.terrain}
                  </p>
                  <p>
                    <strong>Superficie de agua: </strong>
                    {planeta.surface_water}%
                  </p>
                  <p>
                    <strong>Población: </strong>
                    {planeta.population}
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

export default DetailPlaneta;
