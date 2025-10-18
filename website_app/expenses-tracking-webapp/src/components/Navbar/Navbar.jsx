import NavbarLogo from "./Navbar.Logo"
import Navigation from "./Navbar.Navigation";
import NavbarData from "./NavbarData"
import Logo from "../../assets/logo/dark_logo.png"
import NavbarButton from "./Navbar.Button";

export default function Navbar() {



    return (
        <div className="navbar display-flex justify-space-between align-center">
            <NavbarLogo logoIcons={Logo} titles={"Expensio"}/>
            <Navigation {...NavbarData} />
            <NavbarButton />
        </div>
    );
}