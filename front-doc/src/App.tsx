import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { ReportPage } from "./pages/ReportPage";
import { ReleasePage } from "./pages/documentForms/release/ReleasePage";
import { OrderPage } from "./pages/OrderPage";
import { ListPage } from "./pages/ListPage";
import { ThemeProvider } from "./providers/ThemeProvider";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import Loader from "./components/loader/Loader";
import { LoginPage } from "./pages/login/LoginPage";
import { AboutCreatorsPage } from "./pages/creators/AboutCreatorsPage";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation(); //hook for set url pathname

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      setLoading(true);
      clearTimeout(timeout);
    };
  }, [pathname]); //if location pathname changing -> useEffect start work

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="release" element={<ReleasePage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="creators" element={<AboutCreatorsPage />} />
        </Routes>
      </main>
      <FooterComponent />
    </ThemeProvider>
  );
}

export default App;
