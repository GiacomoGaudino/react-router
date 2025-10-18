import { Link } from "react-router-dom"

export default function AppFooter() {
    const menu = [
        {
            id: 1,
            text: 'Home',
            path: '/'
        },
        {
            id: 2,
            text: 'Products',
            path: '/products'
        },
        {
            id: 3,
            text: 'About',
            path: '/about'
        }
    ]

    return (
        <footer style={{ height: '100px' }} className="d-flex flex-column align-items-center">
            <div className="link">
                <ul className="nav justify-content-center w-100">
                    {menu.map(item => (
                        <li className="nav-item" key={item.id}>
                            <Link
                                className="nav-link active text-secondary"
                                to={item.path}
                                aria-current="page">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container text-center border-top border-black d-flex justify-content-between px-5">
                <div className="col-4">© 2025 e-Commerce - All Rights Reserved</div>
                <div className="col-4">v2.1.11</div>
                <div className="col-4">Made by Giacomo Gaudino</div>
            </div>
        </footer>
    )
}