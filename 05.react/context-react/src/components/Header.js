import React, { useContext } from 'react';
import {UserContext } from '../context/UserContext';
import { DarkContext } from '../context/DarkContext';

function Header() {
    const userName = useContext(UserContext);
    const {isDark} = useContext(DarkContext);
    return (
        <header className='header' style={{
            backgroundColor: isDark ? '#222' : null,
            color: isDark ? '#fff' : '#222'
        }}>
            <h1>{userName}</h1>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
            </ul>
        </header>
    );
}

export default Header;