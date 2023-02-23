import React from "react";
import CartWidget from "../CartWidget";

export const NavBar= () => {
    return (
        <div className="container">
            <nav className="nav">
                <div>
                    <a className="navLink" href="#">Books</a>
                </div>
                <ul className="navList">
                    <li>
                     <a className="navLink" href="#">Aventuras</a>
                    </li>
                    <li>
                     <a className="navLink" href="#">Ciencia Ficción</a>
                    </li>
                    <li>
                     <a className="navLink" href="#"><CartWidget /></a>
                    </li>
                </ul>

            </nav>
        </div>
    );

}

export default NavBar;