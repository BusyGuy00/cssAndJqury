import React, { useState } from 'react';
import { SERVER_URL } from '../constants';

function CityTour(props) {
    const [citytourdate, setCdate] = useState({
        cdate: "",
        id: ""
    });
    //배열로 받기 
    const [citytours, setcitytours] = useState([]);
    const onChange = (e) =>{
        setCdate({
            ...citytourdate,
            [e.target.name] : e.target.value
        });
    }
    const getCityTour = () => {
        fetch(`${SERVER_URL}citytour/wea?CurrentDate=${citytourdate.cdate}&CityAreaId=${citytourdate.id}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data.response.body.items.item);//.response.body.items.item
            setcitytours(data.response.body.items.item);
        })
        .catch(e=>console.log(e));
    }
    return (
        <div>
            날씨 조회 
            <input name="cdate" 
            value={citytourdate.cdate} onChange={onChange}/>
            <select name="id" onChange={onChange} >
                <option value="2717000000"> 대구 서구 </option>       
                <option value="2726000000"> 대구 수성구 </option>       
                <option value="2626000000"> 부산 동래구 </option>   
                <option value="2623000000"> 부산 진구 </option>        
                <option value="1168000000"> 서울 강남구 </option>
                <option value="1144000000"> 서울 마포구 </option>
                <option value="3114000000"> 울산 남구 </option>
                <option value="3171000000"> 울산 울주군 </option>
                <option value="4282000000"> 강원 고성군 </option>
                <option value="4221000000"> 강원 속초시 </option>
            </select>
            <button onClick={getCityTour}>조회</button>
            <div>
                <ul>
                    {citytours.map((t,index)=><li key={index}>  도시 :{t.totalCityName}  : 온도 {t.kmaTci} 날씨 {t.TCI_GRADE} 날짜 : {t.tm}  </li>)}
                </ul>
            </div>
        </div>
    );
}

export default CityTour;