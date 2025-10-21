import AppJumbotron from "../components/AppJumbotron";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
    const { favoriteProduct, handleToogle } = useContext(ProductContext);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err.message));
    }, []);


    const favoriteProductsList = products.filter(p => favoriteProduct.includes(p.id));

    return (
        <>
            <main>
                <AppJumbotron />
                <div className="container my-4 favorite">
                    <h2>Prodotti Preferiti</h2>
                    {favoriteProductsList.length === 0 ? (
                        <p>Nessun prodotto preferito</p>
                    ) : (
                        <div className="row">
                            {favoriteProductsList.map(product => (
                                <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
                                    <div className="card shadow-sm h-100">
                                        <Link to={`/products/${product.id}`}>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="card-img-top p-3 rounded"
                                                style={{ height: "250px", objectFit: "contain" }}
                                            />
                                        </Link>
                                        <div className="card-body d-flex flex-column">
                                            <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                                                <h5 className="card-title">{product.title}</h5>
                                            </Link>
                                            <p className="mt-auto fw-bold">{product.price.toFixed(2)} €</p>
                                            <div className="d-flex justify-content-between small text-muted">
                                                <span>⭐ {product.rating.rate}</span>
                                                <span>{product.rating.count} reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}