import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { ShowPersonajes } from '../component/showpersonajes';
import { ShowPlanetas } from '../component/showplanetas';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/home.css";

export const Home = () => {
  return (
    <Container>
      <div className="App">
        <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
        <div className="main-section">
          <Container>
            <Row>
              <Col md={6}>
                <h1>Star Wars</h1>
                <p>
                  Star Wars es una franquicia épica de ópera espacial creada por George Lucas.
                  La franquicia comenzó con la película homónima de 1977 y rápidamente se convirtió en
                  un fenómeno mundial de la cultura pop. La serie se ha ampliado desde entonces
                  para incluir varias formas de medios, incluyendo series de televisión,
                  cómics, novelas y videojuegos.
                </p>
              </Col>
              <Col md={6}>
                <img
                  src="https://as01.epimg.net/meristation/imagenes/2021/05/04/noticias/1620123558_111953_1647427912_noticia_normal.jpg"
                  alt="Star Wars"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid className="star-wars">
          <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
          <Col>
            <h1 className="text-center">Star Wars Personajes</h1>
          </Col>
          <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
          <ShowPersonajes />

          <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
          <Col>
            <h1 className="text-center">Star Wars Planetas</h1>
          </Col>
          <div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
          <ShowPlanetas />
        </Container> {/* Agrega el cierre de la etiqueta Container */}
      </div>
    </Container>
  )
};
