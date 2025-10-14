import CardInfo from "./CardInfo/CardInfo";

export default function HeroCard({amount, icon}) {
    return (
        <div className="hero_card display-flex flex-column">
            <CardInfo number={amount} />
            <img src={icon} alt="icons" />
        </div>
    );
}