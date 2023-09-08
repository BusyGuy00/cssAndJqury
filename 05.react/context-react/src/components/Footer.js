import React, { useContext } from 'react';
import { DarkContext } from '../context/DarkContext';

function Footer() {
    const {isDark,darkToggle} = useContext(DarkContext);
    return (
        <div className='footer' style={{
            backgroundColor : isDark ? '#222' : null,
            color : isDark ? '#fff' : '#222'
        }}>
            <button onClick={darkToggle}>다크모드</button>
        </div>
    );
}

export default Footer;