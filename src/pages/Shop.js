import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Shop = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // API 호출
        fetch("http://localhost:8080/api/getShops")
            .then((response) => response.json())  // JSON 형식으로 응답 처리
            .then((data) => {
                setShops(data);
                setLoading(false);  // 데이터 로딩이 끝났음을 표시
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
                    <h1>쇼핑몰 목록</h1>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <ListGroup>
                            {shops.map((shop) => (
                                <ListGroup.Item key={shop.id}>
                                    <h5>{shop.name}</h5>
                                    <p>{shop.location}</p>
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