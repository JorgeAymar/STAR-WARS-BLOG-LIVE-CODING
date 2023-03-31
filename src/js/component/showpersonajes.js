import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart } from 'react-icons/fa';

const cardStyle = { height: '100%' };

export const ShowPersonajes = () => {

  const { store } = useContext(Context);

  return (
    <Container>
      <Row className="character-cards">
        {store.personajes?.results?.map((personaje, index) => (
          <Col key={index}>
            <Card className="card-custom d-flex flex-column" style={{ ...cardStyle, width: '18rem' }}>
              <Card.Img
                variant="top"
                src={'https://starwars-visualguide.com/assets/img/characters/' + (index + 1) + '.jpg'}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{personaje.name}</Card.Title>

                <div className="d-flex justify-content-between align-items-center w-100">
                  <Button variant="primary" className="mr-2">Más información</Button>
                  <span className="text-muted d-flex align-items-center">
                    <FaHeart size={24} />
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
