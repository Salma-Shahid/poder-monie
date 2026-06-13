import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CalculatorsPage from "./pages/CalculatorsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/calculators" element={<CalculatorsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
