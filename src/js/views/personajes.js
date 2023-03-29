import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ShowPersonajes } from "../component/showpersonajes"

export const Personajes = () => {

  return (
    <Container fluid className="star-wars">
      <Row>
        <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
        <Col>
          <h1 className="text-center">Star Wars Personajes</h1>
        </Col>
      </Row>
      <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
      <ShowPersonajes />
    </Container>
  );
};