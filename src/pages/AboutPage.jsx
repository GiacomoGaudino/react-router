import eCommerce from '../assets/imgs/e-commerce.webp'

export default function AboutPage() {

    return (
        <>
            <main>
                <div className="container mb-3 pt-2 pb-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold mb-3" style={{ color: '#802c6e' }}>About Us</h1>
                        <p className="lead text-muted">Empowering your shopping experience — quality, trust, and simplicity at your fingertips.</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src={eCommerce}
                                alt="About our store"
                                className="img-fluid rounded-4 shadow-sm" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-semibold mb-3" style={{ color: '#802c6e' }}>Who We Are</h3>
                            <p> Our e-commerce platform connects customers with <strong>high-quality, curated products</strong> from trusted sellers worldwide.
                                We believe online shopping should be <strong>simple, safe, and enjoyable</strong>, which is why we focus on delivering
                                an experience built around convenience and confidence.</p>
                            <p>From <strong>fast shipping</strong> to <strong>secure payments</strong> and <strong>responsive customer support</strong>,
                                every part of our service is designed to make your journey smooth and satisfying.</p>
                        </div>
                    </div>
                    <div className="row text-center mt-5 pt-4 border-top">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h5 className="fw-bold" style={{ color: '#802c6e' }}>Fast Shipping</h5>
                            <p className="text-muted small">Quick, reliable delivery to your doorstep — no delays, no worries.</p>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h5 className="fw-bold" style={{ color: '#802c6e' }}>Trusted Quality</h5>
                            <p className="text-muted small">All products are carefully reviewed to ensure excellence and authenticity.</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="fw-bold" style={{ color: '#802c6e' }}>Customer First</h5>
                            <p className="text-muted small">Our support team is always here to help you — before and after your purchase.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}