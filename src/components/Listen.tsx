import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import React, { FC } from "react";
import Row from "react-bootstrap/Row"
import '../CSS/Video.css';

const Listen: FC<{}> = () => {
    return (
        <section id="listen">
            <h1>Featured Videos</h1>
            <Container>
                <Row>
                    <Col>
                        <div className="video-container">
                            <Image src="https://placehold.co/160x90" width="100%" style={{ visibility: "hidden" }} />
                            <iframe
                                src="https://youtube.com/embed/VGSB2iKT9Ws"
                                allowFullScreen />
                        </div>
                    </Col>
                    <Col>
                        <div className="video-container">
                            <Image src="https://placehold.co/160x90" width="100%" style={{ visibility: "hidden" }} />
                            <iframe
                                src="https://youtube.com/embed/6dQvl02_IvQ"
                                allowFullScreen />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="video-container">
                            <Image src="https://placehold.co/160x90" width="100%" style={{ visibility: "hidden" }} />
                            <iframe
                                src="https://youtube.com/embed/DDUeJZBZdJY"
                                allowFullScreen />
                        </div>
                    </Col>
                    <Col>
                        <div className="video-container">
                            <Image src="https://placehold.co/160x90" width="100%" style={{ visibility: "hidden" }} />
                            <iframe
                                src="https://youtube.com/embed/ZWKlFfFj6xs"
                                allowFullScreen />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Listen;