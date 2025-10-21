import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Tailspin } from 'ldrs/react';
import ProductContext from "../contexts/ProductContext";

export default function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { handleToogle, favoriteProduct } = useContext(ProductContext);

    const [product, setProduct] = useState(null);
    const isFavorite = product ? favoriteProduct.includes(product.id) : false;


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.data.id) {
                    navigate('/404');
                    setTimeout(() => navigate('/products'), 5000);
                    return;
                }
                setProduct(res.data);
            })
            .catch(err => {
                console.error(err.message);
                navigate('/products');
            });
    }, [id, navigate]);


    function prevProduct() {
        const currentId = Number(id);
        if (currentId > 1) {
            navigate(`/products/${currentId - 1}`);
        }
    }


    function succProduct() {
        const currentId = Number(id);
        if (currentId < 20) {
            navigate(`/products/${currentId + 1}`);
        }
    }


    if (!product) {
        return (
            <div className="vh-100 text-center d-flex justify-content-center align-items-center">
                <Tailspin size="40" stroke="5" speed="0.9" color="black" />
            </div>
        );
    }

    return (
        <div className="container col-6 product text-center">
            <ProductCard product={product} />
            <span onClick={() => handleToogle(product)} style={{ cursor: "pointer", fontSize: "1.5rem" }}>
                {isFavorite ? "❤️" : "🤍"}
            </span>
            <div className="d-flex justify-content-center gap-2 my-2">
                <button className="btn btn-prev" onClick={prevProduct}>Prev</button>
                <button className="btn btn-succ" onClick={succProduct}>Succ</button>
            </div>
        </div>
    );
}
