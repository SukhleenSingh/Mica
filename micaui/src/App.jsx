import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./Components/Hero/Hero"
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Home/Admin';
import Users from './Components/User/User';
import Token from './Components/Token/Token';
import Frontend from './Components/Frontend/Frontend';
import Settings from './Components/Settings/Setting';
import Register from './Components/Register/Register';
import Forgetpass from './Components/Login/Forgetpass';
import Download from './Components/QR/Download';
import OTP from './Components/Login/OTP';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
        <Hero />
        
        <Main />
        
        </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<Forgetpass />} />
        <Route path="/otp" element={<OTP />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/dashboard" element={<Admin />}/> 
        <Route path="/users" element={<Users />}/>
        <Route path="/tokens" element={<Token />}/>
        <Route path="/frontend" element={<Frontend />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/download" element={<Download />}/>
        
      </Routes>
      
    </Router>
  )
}

export default App
