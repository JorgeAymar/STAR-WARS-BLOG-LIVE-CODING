import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const cardStyle = { height: '100%' };

export const ShowPlanetas = () => {

  const { store, actions } = useContext(Context);

  return (
    <Container fluid className="star-wars">
      <Row className="character-cards">
        {store.planets?.results?.map((planet, index) => (
          <Col key={index}>
            <Card className="card-custom d-flex flex-column" style={{ ...cardStyle, width: '18rem' }}>
              <Card.Img
                variant="top"
                src={'https://starwars-visualguide.com/assets/img/planets/' + (index + 1) + '.jpg'}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{planet.name}</Card.Title>
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

