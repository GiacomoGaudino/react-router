import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import { useNavigate } from "react-router-dom"
import { Tailspin } from 'ldrs/react'

export default function ProductPage() {
    const { id } = useParams()
    const productsEndPoint = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()


    function fetchProducts() {
        axios
            .get(productsEndPoint)
            .then(res =>
                setProduct(res.data)
            )
            .catch(error => {
                console.error(error.message)
                navigate('/products')
            }
            )
    }

    useEffect(() => {
        setTimeout(() => {
            fetchProducts(productsEndPoint)
        }, 2000)

    }, [id, navigate])


    return (
        <>
            {product !== null ?
                <div className="container">
                    <ProductCard product={product} />
                </div> :
                <div className="vh-100 text-center">
                    <Tailspin
                        size="40"
                        stroke="5"
                        speed="0.9"
                        color="black"
                    />
                </div>
            }
        </>

    )
}