import './App.css';
import { useEffect, useState } from 'react';
import CarFront from './components/CarFront';
import { Route, Routes } from 'react-router-dom';
import Tour from './components/Tour';
import CityTour from './components/CityTour';



function App() {
  const [isAuthenticated, setAuth] = useState(false);
  const loginAuth = () => {
    setAuth(true)
  }
  const logoutAuth = () => {
    setAuth(false)
    //토큰삭제
    sessionStorage.removeItem("jwt")
  }
  //마운트 될때 자동실행
  useEffect(()=>{
    if(sessionStorage.getItem("jwt")){
      setAuth(true);
    }
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <CarFront loginAuth={loginAuth} 
        isAuthenticated={isAuthenticated} logoutAuth={logoutAuth}/>}/>
        <Route path='/tour' element={<Tour/>} />
        <Route path='/citytour' element={<CityTour/>} />
      </Routes>
    
    </div>
  );
}

export default App;
