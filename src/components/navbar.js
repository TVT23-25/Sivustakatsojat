import React, { useState } from "react";
import './navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
    // Käytetään useMatch-koukkua saamaan nykyinen sijainti
    const match = useMatch("/moviepage");
    // Käytetään useResolvedPath-koukkua saamaan resolvaus polusta
    const resolvedPath = useResolvedPath("/moviepage");

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{ width: '100%' }}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                {/* Tarkistetaan, onko nykyinen sijainti /moviepage */}
                {match && match.path === "/moviepage" ? (
                    // Käytetään resolvausta varmistaaksesi oikean polun
                    <Link to={resolvedPath.pathname}>Hae elokuvia</Link>
                ) : (
                    <Link to="/moviepage">Hae elokuvia</Link>
                )}
                <Link to="/signin">Kirjaudu</Link>
                <Link to="/signup">Uusi käyttäjä</Link>
                <Link to="/informationpage">Omat tiedot</Link>
            </div>
        </div>
    )
}

export default Navbar;