import React from 'react';
import { Card } from 'react-bootstrap';
import BotonMasInformacion from './botonmasinformacion';
import BotonCorazonFavorito from './botoncorazonfavorito';

const MyCardPersonaje = ({ personaje, index }) => {

  return (
    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{personaje.name}</Card.Title>
          <div className="d-flex justify-content-between">
            <BotonMasInformacion index={index} tipo={1} />
            <BotonCorazonFavorito cardName={personaje.name} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCardPersonaje;
