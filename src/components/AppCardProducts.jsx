import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";

export default function AppCardProducts() {
    const { handleToogle, favoriteProduct } = useContext(ProductContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const sortedProducts = [...products].sort((a, b) =>
        a.category.localeCompare(b.category)
    );

    return (
        <>
            {sortedProducts.map(product => {
                const isFavorite = favoriteProduct.includes(product.id);
                return (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
                        <div className="card shadow-sm h-100 border-0">
                            <div className="position-relative">
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        className="card-img-top p-3 rounded"
                                        src={product.image}
                                        alt={product.title}
                                        style={{ backgroundColor: '#ffdde2ff', height: "250px", objectFit: "contain" }}
                                    />
                                </Link>
                                <span className="badge text-white position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#802c6e', fontSize: '0.8rem' }}>
                                    {product.category}
                                </span>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                                    <h5 className="card-title mb-2" style={{ minHeight: "3rem" }}>{product.title}</h5>
                                </Link>
                                <p className="card-text text-truncate mb-2" style={{ maxHeight: "4.5rem" }}>{product.description}</p>
                                <div className="mt-auto">
                                    <p className="h5 fw-bold mb-2">{product.price.toFixed(2)} €</p>
                                    <div className="d-flex justify-content-between small text-muted">
                                        <span>⭐ {product.rating.rate}</span>
                                        <span>{product.rating.count} reviews</span>
                                    </div>
                                </div>
                                <span onClick={() => handleToogle(product)} style={{ cursor: "pointer", fontSize: "1.5rem" }}>
                                    {isFavorite ? "❤️" : "🤍"}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
