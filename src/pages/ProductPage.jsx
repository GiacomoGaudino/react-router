import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import { Tailspin } from 'ldrs/react'

export default function ProductPage() {
    const { id } = useParams()
    const productsEndPoint = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()


    function fetchProducts() {
        axios
            .get(productsEndPoint)
            .then(res => {
                if (!res.data.id) {
                    navigate('/404');
                    setTimeout(() => {
                        navigate('/products');
                    }, 5000);
                    return
                }
                setProduct(res.data)
            }
            )
            .catch(error => {
                console.log(error.message)
                navigate('/products')
            }
            )
    }

    useEffect(() => {
        setTimeout(() => {
            fetchProducts(productsEndPoint)
        }, 2000)


    }, [id, navigate])

    function prevProduct() {
        const currentId = Number(id)
        if (currentId > 1) {
            navigate(`/products/${currentId - 1}`)
        }
    }

    function succProduct() {
        const currentId = Number(id)
        if (currentId < 20)
            navigate(`/products/${currentId + 1}`)
    }

    return (
        <>
            {product !== null ?
                <div className="container col-6 product">
                    <ProductCard product={product} />
                    <div className="d-flex justify-content-center gap-2 my-2">
                        <button className="btn btn-prev" onClick={prevProduct}>Prev</button>
                        <button className="btn btn-succ" onClick={succProduct}>Succ</button>
                    </div>
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