

export default function Profolio({imageURL, fullName, emailAddress}) {
    
    
    return (
        <div className="profolio">
            <div className="profileImage">
                <img src={imageURL} />
            </div>
            <div className="infoPanel">
                <span>{fullName}</span>
                <p>{emailAddress}</p>
            </div>
        </div>
    );
}