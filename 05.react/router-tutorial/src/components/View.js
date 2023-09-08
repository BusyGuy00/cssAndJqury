import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function View(props) {
    const location = useLocation();
    console.log(location)
    const [searchParams, setSearchParams] = useSearchParams();
    // http://localhost:3000/view?name키 에는=green 밸류&color키 에는=white 밸류
    console.log(searchParams.get("name")); //green
    console.log(searchParams.get("color")); //white
    const name = searchParams.get("name");
    const color = searchParams.get("color");
    return (
        <div>
            <h2>상세보기</h2>
            <p>상세보기 페이지.</p>
            <p>name 값은 : {name}</p>
            <p>color 값은 : {color}</p>
        </div>
    );
}

export default View;