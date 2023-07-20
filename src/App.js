import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
function App() {

  const [mode,setMode]=useState('light')
  const togglemode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <BrowserRouter>

    <Navbar title="TextUtils" abouttext="About" home="Home" mode={mode} togglemode={togglemode}/>

    <Routes>

    <Route path='/about' element={<About/>}
    />
    <Route path='/' element={<TextForm heading="Enter Text To Analyze" preview="Preview Text" readtime="Reading Time"/>}
    />

   
  </Routes>
            
    </BrowserRouter>
  );
}

export default App;
