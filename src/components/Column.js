import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardscommunity from "../Assets/cardscommunity.jpg"
import cardstournaments from "../Assets/cardsgametournaments.jpg"
import cardslivestreaming from "../Assets/cardslivestreaming.jpg"

export default function Column() {
  return (
    <Container>
      <Row md={4}>
        <Col>
          <Card>
            <Card.Img variant="top" src={cardscommunity} />
            <Card.Body>
              <Card.Title>BIGGEST COMMUNITY</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
        <Card>
            <Card.Img variant="top" src={cardstournaments} />
            <Card.Body>
              <Card.Title>E-SPORT TOURNAMENTS</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src={cardslivestreaming} />
            <Card.Body>
              <Card.Title>LIVE STREAMING</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
