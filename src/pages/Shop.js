import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup,Card } from "react-bootstrap";


const Shop = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/getShops")
            .then((response) => response.json())
            .then((data) => {
                setShops(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching shops:", error);
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="mt-4 mb-2">쇼핑몰 목록</h1>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <ListGroup horizontal>
                            {shops.map((shop) => (
                                <ListGroup.Item key={shop.id}  className="border-0">
                                    <Card>
                                        <Card.Img variant="top" src={shop.imageUrl} className="thumb"/>
                                        <Card.Body>
                                            <Card.Title>{shop.name}</Card.Title>
                                            <Card.Text>{shop.location}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;