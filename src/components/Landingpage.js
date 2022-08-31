import "./style.css";
import videoBg from "../Assets/videobackground.mp4";
import plutogameslogo from "../Assets/plutogameslogowhite.png";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import carouselfortnite from "../Assets/carouselfortnite.png";
import carouselrockpaperscissor from "../Assets/carouselrockpaperscissor.png";
import carouselstray from "../Assets/carouselstray.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardscommunity from "../Assets/cardscommunity.jpg";
import cardstournaments from "../Assets/cardsgametournaments.jpg";
import cardslivestreaming from "../Assets/cardslivestreaming.jpg";
import Form from "react-bootstrap/Form";

export default function Landingpage() {
  return (
    <section className="backgroundcolor">
      <div className="textlandingpage">
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <img src={plutogameslogo} />
          <p>Team two presents</p>
          <p>Play fun and challenging games with your friends.</p>
          <p>PLAY NOW</p>
        </div>
      </div>
      <div className="dropdown-divider"></div>
      <h1 className="carousel-divider" id="gameshighlight">
        GAMES HIGHLIGHT
      </h1>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselfortnite}
              alt="fortnitee"
            />
            <Carousel.Caption>
              <h1>F O R T N I T E</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselrockpaperscissor}
              alt="rock paper scissor"
            />

            <Carousel.Caption>
              <h1>ROCK PAPER SCISSOR</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carouselstray} alt="stray" />

            <Carousel.Caption>
              <h1>S T R A Y</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="column">
        <Container>
          <Row md={4}>
            <Col>
              <Card>
                <Card.Img variant="top" src={cardscommunity} />
                <Card.Body>
                  <Card.Title className="cardtext">
                    BIGGEST COMMUNITY
                  </Card.Title>
                  <Card.Text className="cardtext">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
              <Card>
                <Card.Img variant="top" src={cardstournaments} />
                <Card.Body>
                  <Card.Title className="cardtext">
                    E-SPORT TOURNAMENTS
                  </Card.Title>
                  <Card.Text className="cardtext">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cardslivestreaming} />
                <Card.Body>
                  <Card.Title className="cardtext">LIVE STREAMING</Card.Title>
                  <Card.Text className="cardtext">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Name" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control type="Message" placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
