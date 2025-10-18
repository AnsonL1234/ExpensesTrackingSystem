import About_HeroSection1 from "./About.HeroSection1";
import About_HeroSection2 from "./About.HeroSection2";
import '../../index.css';

export default function About({theme}) {

    const content = ["About Expensio", "Expensio is a website that empowers you to control your finances with data-driven charts and an intuitive, user-friendly interface. "]

    return (
        <div className="vh-100 display-flex flex-column grow-1 gap-03">
                <span className="display-flex flex-column grow-1">
                    <About_HeroSection1 title={content[0]} content={content[1]} />
                </span>
                <span className="display-flex flex-column grow-1">
                    <About_HeroSection2 theme={theme} />
                </span>
        </div>
    );
}