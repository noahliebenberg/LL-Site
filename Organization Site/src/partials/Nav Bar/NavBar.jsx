import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css'

function NavBar() {
    // State variable to track whether menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();  // Create a ref for the dropdown menu
    const buttonRef = useRef();
    // Function to toggle menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    // Added this function to close the menu on scroll
    const closeMenuOnScroll = () => {
        if (window.innerWidth <= 1400 && menuOpen) {
            setMenuOpen(false);
        }
    }

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const nav = document.querySelector("nav");
            closeMenuOnScroll();
            if (window.scrollY > 100) {  // Change "100" to whatever threshold you want
                if (lastScrollY < window.scrollY) {
                    nav.classList.add("hide");
                } else {
                    nav.classList.remove("hide");
                }
            } else {
                nav.classList.remove("hide");
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpen]);

    // Function to close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = event => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        // Attach the listeners on component mount.
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Detach the listeners on component unmount.
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div>
            <nav className={`NavBar ${menuOpen ? "menu-open" : ""}`}>
                <div className="Logo">
                    <span><strong>Lieben</strong> Logistics</span>
                </div>

                <ul className="links">
                    <li><a href="#Featured">Upcoming Projects</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contact">Contact Us</a></li>
                </ul>
                <ul>
                    <button className="menu-button" onClick={toggleMenu} ref={buttonRef}>Menu</button>
                </ul>

                <div className={`dropdown-menu ${menuOpen ? "show" : ""}`} ref={menuRef}>
                    <div className="links-dropdown">
                        <button className="drop-link"><a href="#Featured">Upcoming Projects</a></button>
                        <button className="drop-link"><a href="#About">About</a></button>
                        <button className="drop-link"><a href="#Portfolio">Portfolio</a></button>
                        <button className="drop-link"><a href="#Contact">Contact Us</a></button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
