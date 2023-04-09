import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Personajes } from "./views/personajes";
import { Planetas } from "./views/planetas";
import DetailPersonaje from "./views/detailpersonaje";
import DetailPlaneta from "./views/detailplaneta";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import NavbarX from "./component/navbarX";
import { Footer } from "./component/footer";
import { Container } from 'react-bootstrap';

const Layout = ({ children, favoritosMenu, setFavoritosMenu }) => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container>
        <NavbarX
          favoritosMenu={favoritosMenu}
          setFavoritosMenu={setFavoritosMenu}
        />
      </Container>
      <BrowserRouter basename={basename}>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/planetas" element={<Planetas />} />
            <Route
              path="/detailpersonaje/:index"
              element={<DetailPersonaje />}
            />
            <Route path="/detailplaneta/:index" element={<DetailPlaneta />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

