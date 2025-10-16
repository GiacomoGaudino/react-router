
import AppCardProducts from "../components/AppCardProducts";


export default function ProductsPage({ products }) {


    return (
        <>
            <main>
                <div className="container">
                    <div className="row g-4">
                        <AppCardProducts products={products} />
                    </div>
                </div>
            </main>
        </>
    )
}