import { Link, NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.png"


export default function AppHeader() {

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
        <header>
            <div className="container d-flex justify-content-between align-items-center p-4">
                <div className="logo">
                    <Link to='/'>
                        <img className="img-fluid logo-img" width='50px' src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
                                {menu.map(item =>
                                    <li className="nav-item mx-4 " key={item.id}>
                                        <NavLink to={item.path} className={({ isActive }) =>
                                            isActive ? "nav-link active text-dark fw-bold" : "nav-link text-secondary"}>
                                            {item.text}
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}