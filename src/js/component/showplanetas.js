import React, { useContext } from 'react';
import { Container, Row } from "react-bootstrap";
import { Context } from "../store/appContext";
import MyCardPlaneta from "./mycardplaneta";

const ShowPlanetas = ({ showAll }) => {
  const { store } = useContext(Context);

  return (
    <Container fluid className="star-wars">
      <Row className="character-cards">
        {store.planets?.results?.slice(0, showAll ? undefined : 4).map((planeta, index) => (
            <MyCardPlaneta
              planeta={planeta}
              index={index}
            />
        ))}
      </Row>
      <hr />
    </Container>
  );
};

export default ShowPlanetas;
