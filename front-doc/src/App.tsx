import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { ReportPage } from "./pages/other/ReportPage";
import { ReleasePage } from "./pages/other/ReleasePage";
import { OrderPage } from "./pages/other/OrderPage";
import { ListPage } from "./pages/other/ListPage";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
