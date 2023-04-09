// BotonCorazonFavorito.js
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

const BotonCorazonFavorito = ({ cardName }) => {
  const { store, actions } = useContext(Context);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    if (store.favoritos.includes(cardName)) {
      actions.setFavoritos(store.favoritos.filter((name) => name !== cardName));
      setIsFavorited(false);
    } else {
      actions.setFavoritos([...store.favoritos, cardName]);
      setIsFavorited(true);
    }
  };

  return (
    <button
      className={`boton-corazon-favorito ${isFavorited ? "marcado" : ""}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={isFavorited ? heartSolid : heartRegular} />
    </button>
  );
};

export default BotonCorazonFavorito;