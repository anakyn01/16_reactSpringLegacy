import React, { useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/getNow")
            .then((response) => response.text())
            .then((message) => {
                setMessage(message);
            });
    }, []);

    return(
  <Container>
    <Row>
      <Col>
      <h1>{message}</h1>
      </Col>
    </Row>
  </Container>
    );
}
export default Home;