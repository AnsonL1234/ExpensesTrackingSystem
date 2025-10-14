import "../Home.css";

export default function BuiltTools({icon, name}) {
    return (
        <div className="display-flex align-center gap-03">
            <img src={icon} alt="icons" className="icon-size"/>
            <p>{name}</p>
        </div>
    );
}