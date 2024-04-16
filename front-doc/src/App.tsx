import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { HeaderComponent } from './component/header/HeaderComponent';
import { FooterComponent } from './component/footer/FooterComponent';



function App() {
  return (
      <>
      <HeaderComponent/>
        <Routes> 
            <Route path="/" element={<HomePage/>}/>
        </Routes>
      <FooterComponent/>
      </>
  );
}

export default App;
