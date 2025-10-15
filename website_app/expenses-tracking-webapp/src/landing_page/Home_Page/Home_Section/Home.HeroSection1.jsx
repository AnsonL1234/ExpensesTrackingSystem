import PrimaryButton from "../../../components/Button/PrimaryButton";
import "../../../index.css";
import "../Home.css";

export default function HomeHeroSection1() {
    return (
        <div className="hero_section_children1">
            <h1 className="title margin-0 pry-text-clr text-32-20">TRACK, ORGANIZE, AND UNDERSTAND YOUR SPENDING WITH EXPENSIO</h1>
            <p className="content margin-0 margin-bm-xl sdy-text-clr">
                Simply log your expenses and we'll categorize them by purpose, daily, monthly, and yearly — giving you clarity on your financial habits
            </p>
            <PrimaryButton name={"GET STARTED"}/>
        </div>
    );  
}