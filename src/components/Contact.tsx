import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import React from "react";

const Contact: React.FC<{}> = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <section id="contact">
                <h1>Thank you!</h1>
                <h2>I'll be in touch soon.</h2>
            </section>
        );
    }
    return (
        <section id="contact">
            <Container>
                <h1>Contact Me</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Your message" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </section>
    );
};
export default Contact;