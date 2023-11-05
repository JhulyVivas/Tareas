import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavComponent.module.css'

export const NavComponent = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName={styles.active}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={styles.active}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName={styles.active}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};