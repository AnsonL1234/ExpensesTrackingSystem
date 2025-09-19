import HeaderNavbar from "./header.navbar.jsx";
import './header.css'

export default function Nevigation() {
    

    return (
        <header className="header">
            <div className="header_navbar">
                <HeaderNavbar />
            </div>
            <div className="header_logo">
                <i class="fa-solid fa-layer-group"></i>
            </div>
            <div className="header_action">
                <a href="#log-in" className="log-in-btn">Log in</a>
                <button type="button">Get Started</button>
            </div>
        </header>
    );
}