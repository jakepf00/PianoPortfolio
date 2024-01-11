import { type } from "os";
import React from "react";

type MyProps = {};
type MyState = {};

export class Navbar extends React.Component<MyProps, MyState> {
    render() {
        return (
            <section id="about">
                <h1>Navbar...</h1>
            </section>
        );
    }
}