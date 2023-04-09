import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

const Favoritos = () => {
  const { store } = useContext(Context);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Favoritos
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {store.favoritos?.map((favorito, index) => (
          <Dropdown.Item key={index}>{favorito}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Favoritos;
