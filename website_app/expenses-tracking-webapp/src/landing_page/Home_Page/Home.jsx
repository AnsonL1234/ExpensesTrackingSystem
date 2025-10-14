// import Navbar from "../../components/Navbar/Navbar.jsx";
import InfoSection from "./Home.InfoSection.jsx";
import HomeHeroSection from "./Home.HeroSection.jsx";
import "../../index.css";


export default function HomePage() {
    return (
        <div className="h-100">
            <section className="home-hero-section h-100">
                <span>
                    <HomeHeroSection />
                </span>
                <span>
                    <InfoSection />
                </span>
            </section>
        </div>
    );
}