import React from "react";
import NavLink from "../NavLink";

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink href="/" name="Home" />
        <NavLink href="/newlesson" name="New Lesson" />
        <NavLink href="/curriculumoverview" name="Curriculum Overview" />
        <NavLink href="/profile" name="Profile" />
    </nav>

    );
}

export default Nav;