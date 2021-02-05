import React from "react";
import Nav from 'react-bootstrap/Nav'

function NavLink({href, name, ekey}) {
    return (
        <Nav.Link className="navbar-brand" href={href} eventKey={ekey}>
            {name}
        </Nav.Link>
    );
}

export default NavLink;