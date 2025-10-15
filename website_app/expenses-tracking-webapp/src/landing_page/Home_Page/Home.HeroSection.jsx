import HomeHeroSection1 from "./Home_Section/Home.HeroSection1";
import HomeHeroSection2 from "./Home_Section/Home.HeroSection2";

export default function HomeHeroSection({theme}) {
    return (
        <div className="hero_section">
            <HomeHeroSection1 />
            <HomeHeroSection2 theme={theme}/>
        </div>
    );
}