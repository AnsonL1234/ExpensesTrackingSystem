import BuiltTools from "./Home_Section/Home.BuiltTools.jsx";
import ReactIcon from "../../assets/tech_icons/react.png" 
import APIIcon from "../../assets/tech_icons/restapi.png"
import SpringIcon from "../../assets/tech_icons/spring-boot.png"
import JavaIcon from "../../assets/tech_icons/java.png"
import JavaScriptIcon from "../../assets/tech_icons/java-script.png"
import HtmlIcon from "../../assets/tech_icons/html.png"
import CSSIcons from "../../assets/tech_icons/css-3.png"

export default function InfoSection() {
    const IconImage = [ReactIcon, APIIcon, SpringIcon, JavaIcon, JavaScriptIcon, HtmlIcon, CSSIcons];
    const IconTitle = ["REACT", "REST APIs", "SPRING BOOT", "JAVA", "JAVASCRIPT", "HTML", "CSS"];

    return (
        <div className="display-flex flex-column align-center">
            <h5 className="text-12 sdy-text-clr">TEH WEBSITE IS POWER BY</h5>
            <div className="built_tools">
                <ul className="display-flex align-center gap-08 list-style-none text-12">
                    <li><BuiltTools icon={IconImage[0]} name={IconTitle[0]}/></li>
                    <li><BuiltTools icon={IconImage[1]} name={IconTitle[1]}/></li>
                    <li><BuiltTools icon={IconImage[2]} name={IconTitle[2]}/></li>
                    <li><BuiltTools icon={IconImage[3]} name={IconTitle[3]}/></li>
                    <li><BuiltTools icon={IconImage[4]} name={IconTitle[4]}/></li>
                    <li><BuiltTools icon={IconImage[5]} name={IconTitle[5]}/></li>
                    <li><BuiltTools icon={IconImage[6]} name={IconTitle[6]}/></li>
                </ul>
            </div>
        </div>
    );
}