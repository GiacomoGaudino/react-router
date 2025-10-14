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
        <footer style={{ height: '100px' }} className="d-flex align-items-center">
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
        </footer>
    )
}