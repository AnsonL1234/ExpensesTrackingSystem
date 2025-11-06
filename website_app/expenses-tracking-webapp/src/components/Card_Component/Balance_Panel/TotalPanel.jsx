import './TotalPanel.css';

export default function TotalPanel({title, balance}) {
    return (
        <div className="total_container">
            <span className='title'>{title}</span>
            <span className='balance'>€ {balance}</span>
        </div>
    );
}