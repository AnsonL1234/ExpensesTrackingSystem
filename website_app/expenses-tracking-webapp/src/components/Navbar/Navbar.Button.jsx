import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import "../../index.css";

export default function NavbarButton() {
    // const [showMenu, setShowMenu] = useState(false);
    return(
        <div className="display-flex align-center margin-rg-xxl">
            <GiHamburgerMenu className="burgerMenu"/>
           <button type="button" >Log In</button>
        </div>
    );
}