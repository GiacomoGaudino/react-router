import AppCardProducts from "../components/AppCardProducts";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function ProductsPage({ products }) {

    return (
        <>
            <AppHeader />
            <main>
                <div className="container">
                    <div className="row g-4">
                        <AppCardProducts products={products} />
                    </div>
                </div>
            </main>
            <AppFooter />
        </>
    )
}