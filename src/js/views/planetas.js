import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowPlanetas from "../component/showplanetas";

export const Planetas = () => {
  
  return (
    <Container fluid className="star-wars">
      <Row>
        <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
        <Col>
          <h1 className="text-center">Star Wars Planetas</h1>
        </Col>
      </Row>
      <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
      <ShowPlanetas showAll={true} />
    </Container>
  );
};

