import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import { ReportPage } from "./pages/documentPages/ReportPage";
import { ReleasePage } from "./pages/documentPages/ReleasePage";
import { OrderPage } from "./pages/documentPages/OrderPage";
import { ListPage } from "./pages/documentPages/ListPage";
import { LoginPage } from "./pages/login/LoginPage";
import Loader from "./components/loader/Loader";
import { time } from "console";

function App() {
  
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation(); //hook for set url pathname

  useEffect(() => {
     const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      setLoading(true);
      clearTimeout(timeout);
    }
  }, [pathname]); //if location pathname changing -> useEffect start work

  if(loading) {
     return (<Loader/>);
  }

  return (
    <>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="release" element={<ReleasePage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="login" element={<LoginPage />}/>
        </Routes>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
