import React, { useContext } from 'react';
import { DarkContext } from '../context/DarkContext';

function Mainn() {
    const { isDark } = useContext(DarkContext);
    return (
        <div className='main' style={{
            backgroundColor : isDark ? '#222' : null,
            color : isDark ? '#fff' : '#222'
        }}>
                메인 페이지 입니다.
        </div>
    )
}

export default Mainn;