import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Context } from '../store/appContext';

function DetailPlaneta() {
  const { store } = useContext(Context);
  const { index } = useParams();

  const planet = store.planets?.results?.[index];

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
                    alt={`Imagen de ${planet?.name}`}
                    className="img-fluid"
                  />
                </Col>
                <Col md={8}>
                  <h2>{planet?.name}</h2>
                  <p>
                    <strong>Período de rotación: </strong>
                    {planet?.rotation_period} horas
                  </p>
                  <p>
                    <strong>Período orbital: </strong>
                    {planet?.orbital_period} días
                  </p>
                  <p>
                    <strong>Diámetro: </strong>
                    {planet?.diameter} km
                  </p>
                  <p>
                    <strong>Clima: </strong>
                    {planet?.climate}
                  </p>
                  <p>
                    <strong>Terreno: </strong>
                    {planet?.terrain}
                  </p>
                  <p>
                    <strong>Superficie de agua: </strong>
                    {planet?.surface_water}%
                  </p>
                  <p>
                    <strong>Población: </strong>
                    {planet?.population}
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
