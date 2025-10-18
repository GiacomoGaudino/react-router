export default function ProductCard({ product }) {

    return (
        <div className="card shadow-sm h-100 border-0">
            <div className="position-relative">
                <img
                    className="card-img-top p-3 rounded"
                    src={product.image}
                    alt={product.title}
                    style={{ backgroundColor: '#ffdde2ff', height: "250px", objectFit: "contain" }} />
                <span className="badge text-white position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#802c6e', fontSize: '0.8rem' }}>{product.category}</span>
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-2" style={{ minHeight: "3rem" }}>{product.title}</h5>
                <p className="card-text text-truncate mb-2" style={{ maxHeight: "4.5rem" }}>{product.description}</p>
                <div className="mt-auto">
                    <p className="h5 fw-bold mb-2">{product.price.toFixed(2)} €</p>
                    <div className="d-flex justify-content-between small text-muted">
                        <span>⭐ {product.rating.rate}</span>
                        <span>{product.rating.count} reviews</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
