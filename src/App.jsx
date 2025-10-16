import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import Page404NotFound from "./pages/Page404NotFound";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/404" element={<Page404NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
