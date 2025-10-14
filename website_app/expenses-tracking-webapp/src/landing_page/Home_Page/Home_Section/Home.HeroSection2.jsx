import HeroCard from "../../../components/Card_Component/Hero_Card/HeroCard.jsx";
import Doughnut from "../../../assets/chart_icons/dougnut.png"
import Bar from "../../../assets/chart_icons/bar.png"

export default function HomeHeroSection2() {
    return (
        <div className="hero_section_children2">
            <HeroCard amount={600} icon={Doughnut} />
            <HeroCard amount={350} icon={Bar} />
        </div>
    );
}