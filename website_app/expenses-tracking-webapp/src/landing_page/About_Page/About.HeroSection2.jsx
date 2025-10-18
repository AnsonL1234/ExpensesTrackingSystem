import '../../index.css';
import FeaturesCard from '../../components/Card_Component/Feature_Card/FeatureCard';
import BarDark from '../../assets/about_icons/dark_icons/bar_dark.png'
import PieDark from '../../assets/about_icons/dark_icons/pie_dark.png'
import CatDark from '../../assets/about_icons/dark_icons/categories_dark.png'
import LayDark from '../../assets/about_icons/dark_icons/layers_dark.png'

import BarLight from '../../assets/about_icons/light_icons/bar_light.png'
import PieLight from '../../assets/about_icons/light_icons/pie_light.png'
import CatLight from '../../assets/about_icons/light_icons/categories_light.png'
import LayLight from '../../assets/about_icons/light_icons/layers_light.png'

export default function About_HeroSection2({theme}) {

    const imgIconsDark = [BarDark, PieDark, CatDark, LayDark];
    const imgIconsLight = [BarLight, PieLight, CatLight, LayLight];
    const imgIcons = theme === "dark" ? imgIconsDark : imgIconsLight;

    const title = ["Data Analysis", "Data Visualization", "Categories", "User-Friendly UI"];
    const content = [
        "Track trends, improve decisions", 
        "Visualize expenses with clarity", 
        "Organize expense by purpose",
        "Easy to use, easy to track"
    ]

    return(
        <div className='display-flex flex-column align-center gap-07'>
            <h2 className="margin-0">Key Features</h2>
            <span className='display-flex align-center justify-center grow-1 flex-wrap shrink-1 gap-07'>
                <FeaturesCard 
                    icons={imgIcons[0]} 
                    title={title[0]} 
                    content={content[0]}
                />
                <FeaturesCard 
                    icons={imgIcons[1]} 
                    title={title[1]} 
                    content={content[1]}
                />
                <FeaturesCard 
                    icons={imgIcons[2]} 
                    title={title[2]} 
                    content={content[2]}
                />
                <FeaturesCard 
                    icons={imgIcons[3]} 
                    title={title[3]} 
                    content={content[3]}
                />
            </span>
        </div>
    );
}