import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BotonMasInformacion = ({ index, tipo }) => {

  return (
    <Link to={tipo === 1 ? `/detailpersonaje/${index}` : `/detailplaneta/${index}`}>
      <Button variant="primary" className="mr-2">
        Más información
      </Button>
    </Link>
  );
};

export default BotonMasInformacion;
