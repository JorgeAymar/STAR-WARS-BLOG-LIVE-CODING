import React from 'react';
import { Card } from 'react-bootstrap';
import BotonMasInformacion from './botonmasinformacion';
import BotonCorazonFavorito from './botoncorazonfavorito';

const MyCardPlaneta = ({ planeta, index }) => {

  return (
    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{planeta.name}</Card.Title>
          <div className="d-flex justify-content-between">
            <BotonMasInformacion index={index} tipo={2} />
            <BotonCorazonFavorito cardName={planeta.name} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCardPlaneta;

