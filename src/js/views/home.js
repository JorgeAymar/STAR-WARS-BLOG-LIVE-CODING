import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/home.css";

export const Home = () => {

	const personajes = [
		{
			nombre: "Luke Skywalker",
			descripcion:
				"Luke Skywalker es un personaje ficticio y el protagonista principal de la trilogía original de la franquicia de Star Wars.",
			imagen:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTKxtIppU46L_tuECBbAftlforOuVliYNEg&usqp=CAU",
		},
		{
			nombre: "Darth Vader",
			descripcion:
				"Darth Vader es un personaje ficticio de la franquicia de Star Wars. Es el principal antagonista de la trilogía original y el principal protagonista de la trilogía de precuelas.",
			imagen:
				"https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg",
		},
		{
			nombre: "Princesa Leia",
			descripcion:
				"La Princesa Leia es un personaje ficticio de la franquicia de Star Wars, interpretado en las películas por Carrie Fisher. Es miembro del Senado Imperial y agente de la Alianza Rebelde.",
			imagen:
				"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/princesa-leia-carrie-fisher-1540113645.png",
		},
		{
			nombre: "Han Solo",
			descripcion:
			  "Han Solo es un personaje ficticio de la franquicia de Star Wars, interpretado en las películas por Harrison Ford. Es un contrabandista y piloto del Halcón Milenario que se une a la Alianza Rebelde.",
			imagen:
			  "https://images3.alphacoders.com/865/86515.jpg",
		  }
	];

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
									un fenómeno mundial de la cultura pop. La serie se ha ampliado desde entonces.
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
				<div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
				<Container fluid className="star-wars">
					<Row>
						<Col>
							<h1 className="text-center">Personajes de Star Wars</h1>
						</Col>
					</Row>
					<div className="my-5"></div> {/* Agrega un elemento div con un margen superior de 5 */}
					<Row className="character-cards">
						{personajes.map((personaje, index) => (
							<Col key={index}>
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant="top"
										src={personaje.imagen}
										className="img-fluid"
									/>
									<Card.Body>
										<Card.Title>{personaje.nombre}</Card.Title>
										<Card.Text>{personaje.descripcion}</Card.Text>
										<Button variant="primary">Más información</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</Container >
	)
};
