import "../../index.css";

export default function Navigation(props) {

    return (
        <ul className="display-flex gap-07 list-style-none text-12">
            <li className="">{props.about}</li>
            <li>{props.service}</li>
            <li>{props.blog}</li>
            <li>{props.contact}</li>
        </ul>
    );
}