import React from "react";

import Nav from 'react-bootstrap/Nav'

function Navbar(props) {
    return (
        <Nav variant="tabs" className="justify-content-end" defaultActiveKey={props.location} >
            <Nav.Item>
                <Nav.Link href="/" eventKey="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/newlesson"  eventKey="newlesson">New Lesson</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/curriculumoverview" eventKey="curriculumoverview">Curriculum Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/profile" eventKey="profile">Profile</Nav.Link>
            </Nav.Item>
        </Nav>

    );
}

export default Navbar;