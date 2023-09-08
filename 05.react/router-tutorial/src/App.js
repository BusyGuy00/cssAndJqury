
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import View from './components/View';
import Header from './components/Header';
import Subpages from './components/Subpages';
import Subpage from './components/Subpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:productname' element={<Product/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/subpages' element={<Subpages/>}>
        <Route path=':id' element={<Subpage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
