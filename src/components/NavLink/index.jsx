import React from "react";

function NavLink({href, name}) {
    return (
        <a className="navbar-brand" href={href}>
            {name}
        </a>
    );
}

export default NavLink;