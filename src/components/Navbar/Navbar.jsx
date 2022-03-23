import React from "react";
import { Nav } from "../Style/Navbar";

const Navbar = () => {
    return <Nav>

        <h1>Navbar</h1>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </Nav>
}
export default Navbar;