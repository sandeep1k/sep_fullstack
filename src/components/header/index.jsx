import { NavLink } from "react-router-dom";
import brandLogo from "../../assets/images/logo.png"
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand me-auto" to="/">
                    <img src={brandLogo} alt='' width="200" />
                </NavLink>

                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/" style={({ isActive }) => ({
                                color: isActive ? 'green' : '#000'
                            })}>
                                Home
                            </NavLink>
                            {/* <NavLink className="nav-link active" to="/">Home</NavLink> */}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/products"
                                style={({ isActive }) => ({
                                    color: isActive ? 'green' : '#000'
                                })}
                            >Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/contact"
                                style={({ isActive }) => ({
                                    color: isActive ? 'green' : '#000'
                                })}
                            >Contact</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}
export default Header