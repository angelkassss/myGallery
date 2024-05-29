import React, {useState} from "react";

import styles from "./Navbar.module.css"
import { getImageUrl } from "../../ulils";
export const NavBar = () => {
    const [menuOpen,setMenuOpen] = useState (false)

    return <nav className={styles.navbar}>
        <a className={styles.title} herf="/"> Portfolio </a>
        <div className={styles.menu}>

       
        {/* Menu Bar Addition /*}
          {/* }  <img className={styles.menuBtn} 
            src={
                menuOpen 
                ?getImageUrl("nav/closeIcon.png") 
                : getImageUrl} alt="menu-button"/>
            */}

            <ul className={styles.menuItems}>
                <li>
                    <a href="#home">Home</a> 
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    </nav>
};