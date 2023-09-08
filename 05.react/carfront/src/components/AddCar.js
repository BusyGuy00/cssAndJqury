import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
// import { SERVER_URL } from '../constants';

function AddCar({addCar}) {
    const [open, setOpen] = useState(false);
    //인풋 입력값 상태관리 
    const [car, setCar] = useState({
        brand: "",
        model : "",
        color : "",
        year : "",
        price : ""
    });
    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        //캔슬 후에 초기화시키기 위해 추가 
        setCar({
            brand: "",
            model : "",
            color : "",
            year : "",
            price : ""
        })
    }
    const handleSave= () => {
        addCar(car);
        handleClose();
    }
    // //추가하기 ---> post 전송하기
    // const addCar = () => {
    //         fetch(SERVER_URL+"api/cars", {
    //             method:"POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //         }, 
    //         body : JSON.stringify(car) // JSON.stringify(obj) 객체를 --> json직렬화
    //     })
    //     .then(response=>{
    //         if(response.ok){
    //             alert("등록되었습니다.");
    //         }else{
    //             alert("등록되지 않았습니다.");
    //         }
    //     })
    //     .catch(e=>console.log(e))
    //     handleClose();
    //     fetchCar();
    // }
    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>New Car</Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" maxWidth="sm" fullWidth={true}
        >
            <DialogTitle>New Car</DialogTitle>
            <DialogContent>
                <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange} 
                style={{width: "90%", padding:"10px", margin: "6px"}}/>
                <br/>
                <input placeholder="Model" name="model" value={car.model} onChange={handleChange} 
                style={{width: "90%", padding:"10px", margin: "6px"}}/>
                <br/>
                <input placeholder="Color" name="color" value={car.color} onChange={handleChange} 
                style={{width: "90%", padding:"10px", margin: "6px"}}/>
                <br/>
                <input placeholder="Year" name="year" value={car.year} onChange={handleChange} 
                style={{width: "90%", padding:"10px", margin: "6px"}}/>
                <br/>
                <input placeholder="Price" name="price" value={car.price} onChange={handleChange} 
                style={{width: "90%", padding:"10px", margin: "6px"}}/>
                <br/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default AddCar;