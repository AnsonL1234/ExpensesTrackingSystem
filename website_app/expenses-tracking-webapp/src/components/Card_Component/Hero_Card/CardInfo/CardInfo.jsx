

export default function CardInfo({number}) {
    return (
        <div>
            <div className="display-flex align-center gap-03">
                <span className="flex-column align-start">
                    <h5>Inflows by</h5>
                    <p>Category</p>
                </span>
                <span className="align-end">
                    <h4>${number}</h4>
                </span>
            </div>
        </div>
    );
}