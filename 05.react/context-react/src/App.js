import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import { DarkContext } from './context/DarkContext';
import Mainn from './components/Mainn';


// import { UserContext } from './context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  const darkToggle = () => {
    setIsDark(!isDark);
  }
  return (

    <div className="App">
    {/* <Header isDark={isDark}/>
    <Main isDark={isDark}/>
    <Footer isDark={isDark} darkToggle={darkToggle}/> */}
    <DarkContext.Provider value={{isDark:isDark, darkToggle:darkToggle}}>
    <Header />
    <Mainn/>
    <Footer />
    </DarkContext.Provider>
    </div>

  );
}

export default App;
