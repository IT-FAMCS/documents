import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { ReportPage } from './pages/ReportPage';
import { ReleasePage } from './pages/ReleasePage';
import { OrderPage } from './pages/OrderPage';
import { ListPage } from './pages/ListPage';
import { HeaderComponent } from './component/header/HeaderComponent';
import { FooterComponent } from './component/footer/FooterComponent';




function App() {
  return (
      <>
      <HeaderComponent/>
       <main>
        <Routes> 
          <Route path="/" element={<HomePage/>}/> 
          <Route path="report" element={<ReportPage/>}/>
          <Route path="release" element={<ReleasePage/>}/> 
          <Route path="order" element={<OrderPage/>}/> 
          <Route path="list" element={<ListPage/>}/>
        </Routes>
        </main>
      <FooterComponent/>
      </>
  );
}

export default App;
