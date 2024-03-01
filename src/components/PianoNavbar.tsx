import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

type NavProps = {
    tabs: {
        label: string;
        index: number;
        Component: React.FC<{ index: number }>;
    }[];
    selectedTab: number;
    onClick: (index: number) => void;
    orientation?: "horizontal" | "vertical";
    className?: string;
};

const PianoNavbar: React.FC<NavProps> = ({
    className = "nav-component",
    tabs = [],
    selectedTab = 0,
    onClick,
    orientation = "horizontal"
}) => {
    const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

    return (
        <header className={"header"}>
            <Navbar expand="sm" className="bg-body-tertiary">
                <Navbar.Brand>Jacob Pfeifer Piano</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {tabs.map((tab) => (
                            <Nav.Link
                                className={selectedTab === tab.index ? "active" : ""}
                                onClick={() => onClick(tab.index)}
                                key={tab.index}
                                type="button"
                                role="tab"
                                aria-selected={selectedTab === tab.index}
                                aria-controls={`tabpanel-${tab.index}`}
                                tabIndex={selectedTab === tab.index ? 0 : -1}
                                id={`btn-${tab.index}`}
                            >
                                {tab.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div
                role="tabpanel"
                aria-labelledby={`btn-${selectedTab}`}
                id={`tabpanel-${selectedTab}`}
            >
                {Panel && <Panel.Component index={selectedTab} />}
            </div>
        </header>
    );
};
export default PianoNavbar;