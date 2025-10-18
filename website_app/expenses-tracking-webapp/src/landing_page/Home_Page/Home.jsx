// import Navbar from "../../components/Navbar/Navbar.jsx";
import InfoSection from "./Home.InfoSection.jsx";
import HomeHeroSection from "./Home.HeroSection.jsx";
import "../../index.css";


export default function HomePage({theme}) {
    return (
        <div className="vh-100">
            <section className="h-100">
                <span>
                    <HomeHeroSection theme={theme}/>
                </span>
                <span>
                    <InfoSection />
                </span>
            </section>
        </div>
    );
}