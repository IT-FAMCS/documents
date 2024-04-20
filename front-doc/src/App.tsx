import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import { ReportPage } from "./pages/documentPages/ReportPage";
import { ReleasePage } from "./pages/documentPages/ReleasePage";
import { OrderPage } from "./pages/documentPages/OrderPage";
import { ListPage } from "./pages/documentPages/ListPage";

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="release" element={<ReleasePage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="list" element={<ListPage />} />
        </Routes>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
