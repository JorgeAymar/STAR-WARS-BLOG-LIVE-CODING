import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Context } from '../store/appContext';
import MyCardPersonaje from './mycardpersonaje';

const ShowPersonajes = ({ showAll }) => {
  const { store } = useContext(Context);

  return (
    <Container>
      <Row className="character-cards">
        {store.personajes?.results?.slice(0, showAll ? undefined : 4).map((personaje, index) => (
          <MyCardPersonaje
            personaje={personaje}
            index={index}
          />
        ))}
      </Row>
      <hr />
    </Container>
  );
};

export default ShowPersonajes;

