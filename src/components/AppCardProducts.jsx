import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AppCardProducts() {

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

    const sortedProducts = [...products].sort((a, b) =>
        a.category.localeCompare(b.category)
    );



    return (
        <>
            {
                sortedProducts.map(product =>
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
                        <div className="card h-100">
                            <Link to={`/products/${product.id}`}>
                                <img className="card-img-top mt-4" src={product.image} alt="Title" style={{ height: "300px", objectFit: "contain" }} />
                            </Link>
                            <div className="card-body d-flex flex-column gap-2" style={{ minHeight: '180px' }}>
                                <div className="d-flex justify-content-end mt-2">
                                    <span className="badge bg-info text-dark rounded-pill mb-3">
                                        {product.category}
                                    </span>
                                </div>
                                <h4 className="card-title" style={{ height: "120px" }}>{product.title}</h4>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text mt-auto fw-medium">{product.price.toFixed(2)} €</p>
                                <div className="d-flex justify-content-between mt-1 small text-muted">
                                    <span>Rate: {product.rating.rate}</span>
                                    <span>Count: {product.rating.count}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}