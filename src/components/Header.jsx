import React, { useContext, useState } from "react";
import ThemeColor from "../context/ThemeColor";

function Header() {
    const [darkMode, setDarkmode] = useState(false);
    const color = useContext(ThemeColor);
    
    const handleClick = () => {
        setDarkmode(!darkMode);
        }
    return (
        <header className="Header">
            <h1 style={{color}}>Rick & Morty</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Light mode' : 'Dark mode'}</button>
        </header>
    )
}

export default Header;