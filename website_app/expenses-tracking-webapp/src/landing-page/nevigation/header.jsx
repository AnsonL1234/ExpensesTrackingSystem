import { useNavigate } from "react-router-dom";
import HeaderNavbar from "./header.navbar.jsx";
import './header.css'
import '../../components/button.css'

export default function Header() {
    
    const navigate = useNavigate();

    return (
        <header>
            <div className="header_left">
                <HeaderNavbar />
            </div>
            <div className="header_logo">
                <h2 className="logo-text">Expensio</h2>
            </div>
            <div className="header_right">
                <a onClick={() => navigate("/login")} className="log-in-btn">Log in</a>
                <button 
                    type="button"
                    onClick={() => navigate("/register")}
                >
                    Register
                </button>
            </div>
        </header>
    );
}