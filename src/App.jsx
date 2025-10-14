import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import axios from "axios";
import { useEffect, useState } from "react";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {

  const productsEndPoint = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([])

  function fetchProducts() {
    axios
      .get(productsEndPoint)
      .then(res =>
        setProducts(res.data)
      )
      .catch(error =>
        console.error(error.message)
      )
  }

  useEffect(fetchProducts, [])



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage products={products} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
