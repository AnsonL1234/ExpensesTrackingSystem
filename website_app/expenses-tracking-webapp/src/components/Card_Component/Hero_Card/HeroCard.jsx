import CardInfo from "./CardInfo";
import '../../../index.css';
import './HeroCard.css';

export default function HeroCard({amount, icon}) {
    return (
        <div className="hero_card display-flex flex-column">
            <CardInfo number={amount} />
            <div className="image_container h-100 display-flex align-center justify-center margin-bm-lg">
                <img src={icon} alt="icons" className="chart_icons" />
            </div>
        </div>
    );
}