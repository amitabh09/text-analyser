//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//react router starts
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App()
{
  const[mode,setMode]=useState('light')
  const toggleMode=() =>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode set Successfully !","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode set Successfully !","success");
    }
  }
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type) =>
  {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 800);
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
        <Routes>
          <Route exact path="/about"element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter Text To Analyze" title="Enter Below" mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;