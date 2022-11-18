import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import './App.css';
import  NavBar  from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './Contact';
import { useState } from 'react';


function App() {

  const[mode,setMode]=useState('dark');
    
  const handleMode =()=>{
   if(mode === 'light'){
    setMode('dark')
    // console.log(setMode)
    // document.body.style.background='grey'
   }
   else{
    setMode('light')
    
    // document.body.style.background='White'
   }
  }
  return (
    <Router>
    <div className="App">
     <NavBar  title="Texutils"  object={mode} handleModea={handleMode} />
     <div className="container">
     <Routes>
     <Route path='/' element={ <TextForm heading="Enter text blow for enalysis" />}/>
     <Route path="/about" element={<About/>}/>
     <Route patth="/contact" element={<Contact />} />
     </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
