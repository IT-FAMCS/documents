import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { LoginPage } from './pages/login/LoginPage'
import { HeaderComponent } from './components/header/HeaderComponent';
import { FooterComponent } from './components/footer/FooterComponent';



function App() {
  return (
      <>
      <HeaderComponent/>
        <Routes> 
            <Route path="/" element={<HomePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
        </Routes>
      <FooterComponent/>
      </>
  );
}

export default App;
