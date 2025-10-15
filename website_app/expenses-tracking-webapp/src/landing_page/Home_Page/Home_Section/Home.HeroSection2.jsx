import HeroCard from "../../../components/Card_Component/Hero_Card/HeroCard.jsx";
import PieChartDark from "../../../assets/chart_icons/pie-chart-dark.png"
import BarChartDark from "../../../assets/chart_icons/bar-chart-dark.png"
import PieChartLight from "../../../assets/chart_icons/pie-chart-light.png"
import BarChartLight from "../../../assets/chart_icons/bar-chart-light.png"
import HistogramDark from "../../../assets/chart_icons/histogram-dark.png"
import HistogramLight from "../../../assets/chart_icons/histogram-light.png"

export default function HomeHeroSection2({theme}) {
    const imgIconsDark = [PieChartDark, BarChartDark, HistogramDark];
    const imgIconsLight = [PieChartLight, BarChartLight, HistogramLight]
    const imgIcons = theme === "dark" ? imgIconsDark : imgIconsLight;

    return (
        <div className="hero_section_children2">
            <HeroCard amount={600} icon={imgIcons[0]} style="grid-area: box1"/>
            <HeroCard amount={350} icon={imgIcons[1]} style="grid-area: box2"/>
            <HeroCard amount={400} icon={imgIcons[2]} style="grid-area: box3"/>
        </div>
    );
}