import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import { DataGrid } from '@mui/x-data-grid';
import AddCar from './AddCar';
import EditCar from './EditCar';
import { Stack } from '@mui/material';

function CarList(props) {
    const[cars, setCars] = useState([]);
    //마운트될때 실행 시키는 명령어 []연관되는 상태 위치 //빈 배열일때는 마운트 될떄 한번만 실행 한다.
    useEffect(()=>{
        fetchCar();
        //fetchCar로 함수로 만들어 사용 
        //fetch("http://localhost:8010/api/cars")
        // fetch(`${SERVER_URL}api/cars`)
        // .then(response => response.json())
        // .then(data => setCars(data._embedded.cars))
        // .catch(e => console.log(e))
    },[cars])
    //목록요청 함수 
    const fetchCar = () =>{
        //get요청
        fetch(`${SERVER_URL}api/cars`,{
            headers: {'Authorization': sessionStorage.getItem("jwt")}
        })
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(e => console.log(e))
    }
    //삭제요청 
    const onDelete = (url)=> {
        if(window.confirm("정말 삭제 하시겠습니까>")){
            fetch(url,{method:"DELETE",
            headers: {'Authorization': sessionStorage.getItem("jwt")}
        })
            .then(response=> {
                if(response.ok){
                    window.alert("삭제되었습니다.");
                    fetchCar();
                }else{
                    // window. 없어도 같다
                    alert("삭제되지 않았습니다.")
                }
                
            })
            .catch(e=> console.log(e));
        }
    }
    //수정요청
    const updateCar = (car, link) => {
            //url을 link로 가져 온다 
        fetch(link,{
            method:"PUT",
            headers:{
            "Content-Type": "application/json",
            'Authorization': sessionStorage.getItem("jwt")
            },
            //바디로 데이터를 가져간다
            body: JSON.stringify(car)
        })
        .then(response => {
            if(response.ok){
                alert("수정되었습니다.")
                fetchCar();
            }else {
                alert("수정되지 않았습니다.")
            }
        })
        .catch(e=>console.log(e))
    }
    //등록요청
    //추가하기  ---> post 전송하기 
    const addCar = (car) => {
        fetch(SERVER_URL+"api/cars", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': sessionStorage.getItem("jwt")
        }, 
        body : JSON.stringify(car) // JSON.stringify(obj) 객체를 --> json직렬화
    })
    .then(response=>{
        if(response.ok){
            alert("등록되었습니다.");
            fetchCar();
        }else{
            alert("등록되지 않았습니다.");
        }
    })
    .catch(e=>console.log(e))
}
    const columns= [
        {field: "brand", headerName: "Brand", width: 200},
        {field: "model", headerName: "Model", width: 200},
        {field: "color", headerName: "Color", width: 200},
        {field: "year", headerName: "Year", width: 200},
        {field: "price", headerName: "Price", width: 200},
        {
            field:"_links.self.href", //get으로 요청해서 받아올 데이터로 지정 할 수 있다.
            headerName: "",
            sorttable : false,
            filterable: false,
            renderCell: row =>
            <EditCar data={row} updateCar={updateCar} />
        },
        {
            field: "_links.car.href", 
            headerName: "", 
            sorttable: false,
            filterable: false,
            renderCell : row => 
            <button onClick={()=>onDelete(row.id)}>삭제</button>
        }
    ]

    return (
        <div>
            {/* AddCar에 props전달 */}
            <Stack mt={4} mb={4}>
            <AddCar addCar={addCar}/></Stack>
            <div style={{ width: 1200, margin:"0 auto"}}>
                <DataGrid rows={cars} columns={columns}
                getRowId={row=>row._links.self.href}/>
            </div>
            {/* 테이블 주석 */}
            {/* <table>
                <tbody>
                {
                    //jsx 구문에서 자바스크립트 쓸거면 {}를 해준다 
                    //자바스크립트 구문 
                    cars.map((car,index)=> 
                        <tr key={index}>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.color}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                        </tr>
                    )
                }
                </tbody>
            </table> */}
        </div>
    );
}

export default CarList;