import ProgressBar from 'react-bootstrap/ProgressBar';
import './TopSpending.css';

export default function TopSpending({icons, title, year, amount, max_amount}) {
    return (
        <div className="TopSpending_Container">
            <div className="TopPanel_Container">
                <div className="infoPanel">
                    <div className="img_container">
                        <img src={icons} alt="title_icons" className='title_icons' />
                    </div>
                    <span className='topspending_title'>{title}</span>
                    <span className='topspending_year'>{year}</span>
                </div>
                <span className='topspending_amount'>€ {amount}</span>
            </div>
            <ProgressBar 
                now={Number(amount)}
                max={Number(max_amount)}
                className="myProgressBar"
            />
        </div>
    );
}