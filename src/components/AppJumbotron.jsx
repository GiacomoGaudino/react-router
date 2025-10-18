import { Link } from 'react-router-dom'
import intro from '../assets/imgs/intro.svg'

export default function AppJumbotron() {

    return (
        <div className="p-5 mb-4 rounded-3" id="jumbotron">
            <div className="container d-flex gap-3 py-5">
                <div className='col-md-5'>
                    <h1 className="display-5 fw-bold">My e-Commerce</h1>
                    <p className="fs-4">Discover curated products, exclusive deals, and a fast, secure checkout — your
                        one‑stop shop for quality items and great prices.</p>
                    <Link to={'/products'}>
                        <button
                            className='btn btn-lg'
                            style={{
                                backgroundColor: '#802c6e',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '10px 30px',
                            }}>
                            Explore Our Products
                        </button>
                    </Link>
                </div>
                <img className='w-50' src={intro} alt="" />
            </div>
        </div>
    )
}