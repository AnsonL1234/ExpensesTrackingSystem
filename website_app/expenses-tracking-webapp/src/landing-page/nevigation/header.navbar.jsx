import { Link } from "react-router-dom";

export default function HeaderNavbar() {

    return (
        <nav className="header-navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/feature">Feature</Link>
        </nav>
    );
}