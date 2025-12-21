import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Logo from "./pages/CardPage/CardPage";
import Sprzedaj from "./pages/Sprzedaj/Sprzedaj";
import Kup from "./pages/Kup/Kup.tsx";
import Bitwa from "./pages/Bitwa/Bitwa";
import DziennaSkrzynka from "./pages/DziennaSkrzynka/DziennaSkrzynka";
import CardsPage from "./pages/CardPage/CardPage";
import KupSprzedaj from "./pages/Sprzedaj/Sprzedaj";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Logo />} />
                  <Route path="sprzedaj" element={<Sprzedaj />} />
                  <Route path="kup" element={<Kup />} />
                  <Route path="bitwa" element={<Bitwa />} />
                  <Route path="dziennaSkrzynka" element={<DziennaSkrzynka />} />
                  <Route path="cardsPage" element={<CardsPage />} />
               </Route>
      </Routes>
    </BrowserRouter>
  );
}
