import { Link } from "react-router-dom";
import './header.css'

export default function HeaderNavbar() {

    return (
        <nav className="header-navbar">
            <Link to="/" className="navbar">Home</Link>
            <Link to="/about" className="navbar">About</Link>
            <Link to="/feature" className="navbar">Feature</Link>
        </nav>
    );
}