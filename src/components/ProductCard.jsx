export default function ProductCard({ product }) {

    return (
        <div className="card h-100">
            <img className="card-img-top mt-4" src={product.image} alt="Title" style={{ height: "300px", objectFit: "contain" }} />
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
    )
}