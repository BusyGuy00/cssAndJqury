import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    const goBack = () => {
            //이전 페이지 이동 
            navigate(-1)
    }
    const goHome = () => {
        //경로로 이동 
        navigate("/")
    }
    const activeStyle = {
        backgroundColor : 'pink',
        fontSize        : '24px'
    }
    return (
        <div>
            <h1>Green</h1>
            <ul>
                <li><NavLink to="/" style={({isActive})=> isActive ? activeStyle : null} > home </NavLink></li>
                <li><NavLink to="/product/product1"  style={({isActive})=> isActive ? activeStyle : null}> product </NavLink></li>
                <li><NavLink to="/view?name=green&color=white" style={({isActive})=> isActive ? activeStyle : null} > view </NavLink></li>
                <li><NavLink to="/subpages"   style={({isActive})=> isActive ? activeStyle : null}> subpages </NavLink></li>
            </ul>
            <div>
                <button onClick={goBack}>뒤로 가기</button>
                <button onClick={goHome}>홈으로 가기</button>
            </div>
        </div>
    );
}

export default Header;