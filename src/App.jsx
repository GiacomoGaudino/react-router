import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import Page404NotFound from "./pages/Page404NotFound";
import ProductContext from "./contexts/ProductContext";
import { useEffect, useState } from "react";

function App() {

  const [favoriteProduct, setFavoriteProduct] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  function handleToogle(product) {
    console.log(product.id);
    setFavoriteProduct(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id)
      }
      return [...prev, product.id]
    }
    )
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteProduct));
  }, [favoriteProduct]);

  return (
    <ProductContext.Provider value={{ handleToogle, favoriteProduct, }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/404" element={<Page404NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  )
}

export default App
