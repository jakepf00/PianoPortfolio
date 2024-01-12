import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from "react";

type MyProps = {};
type MyState = {};

export class PianoNavbar extends React.Component<MyProps, MyState> {
    render() {
        return (
            <div>
                <header className={"header"}>
                    <Navbar>
                        <Navbar.Brand>
                            Jacob Pfeifer Piano
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>About</Nav.Link>
                                <Nav.Link>Listen</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}