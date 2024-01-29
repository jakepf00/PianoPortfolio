import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import YouTubeEmbed from "./YouTubeEmbed";

const Listen: React.FC<{}> = () => {
    return (
        <section id="listen">
            <h1>Featured Videos</h1>
            <Container>
                <Row>
                    <Col>
                        <YouTubeEmbed videoLink="https://youtube.com/embed/VGSB2iKT9Ws" />
                    </Col>
                    <Col>
                        <YouTubeEmbed videoLink="https://youtube.com/embed/6dQvl02_IvQ" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <YouTubeEmbed videoLink="https://youtube.com/embed/DDUeJZBZdJY" />
                    </Col>
                    <Col>
                        <YouTubeEmbed videoLink="https://youtube.com/embed/ZWKlFfFj6xs" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Listen;