import React, { useContext } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const Favoritos = () => {
  const { store, actions } = useContext(Context);

  const handleEliminarFavorito = (favorito) => {
    actions.eliminarFavorito(favorito);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Favoritos
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {store.favoritos?.map((favorito, index) => (
          <div key={index} className="d-flex align-items-center justify-content-between">
            <Dropdown.Item>{favorito}</Dropdown.Item>
            <Button variant="danger" onClick={() => handleEliminarFavorito(favorito)}>
              <i className="fas fa-trash-alt"></i>
            </Button>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Favoritos;
