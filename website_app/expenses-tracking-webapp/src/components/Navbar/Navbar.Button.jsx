import { GiHamburgerMenu } from "react-icons/gi";
import GeneralButton from "../Button/GeneralButton";
import "./Navbar.css";
import "../../index.css";

export default function NavbarButton() {
    // const [showMenu, setShowMenu] = useState(false);
    return(
        <div className="display-flex align-center margin-rg-xxl">
            <GiHamburgerMenu className="burgerMenu"/>
            <GeneralButton name={"Log In"} />
        </div>
    );
}