import './App.css'
import React from 'react';
import Home from './Pages/HomePage';
import Signup from './components/Signup';
import { Routes, Route} from 'react-router-dom'
import Signin from './components/Signin';


const App = () => {
  return (
    <>
    <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/home" element={<Home/>} />
    </Routes>
   </>
  );
};

export default App;
