import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"

export default function ProductPage() {
    const { id } = useParams()
    const productsEndPoint = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState(null)

    function fetchProducts() {
        axios
            .get(productsEndPoint)
            .then(res =>
                setProduct(res.data)
            )
            .catch(error =>
                console.error(error.message)
            )
    }

    useEffect(() => fetchProducts(), [id])



    return (
        <>
            {product !== null ?
                <div className="container">
                    <ProductCard product={product} />
                </div> :
                <div>loading...</div>
            }
        </>

    )
}