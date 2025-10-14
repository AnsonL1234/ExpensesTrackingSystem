import "../../index.css";
import "./Navbar.css";

export default function NavbarLogo({logoIcons, titles}) {

    return (
        <div className="display-flex align-center gap-03 margin-lf-xxl">
            <img src={logoIcons} />
            <h2>{titles}</h2>
        </div>
    );
}