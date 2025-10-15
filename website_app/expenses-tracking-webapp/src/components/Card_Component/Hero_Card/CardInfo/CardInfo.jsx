import '../../../../index.css';

export default function CardInfo({number}) {
    return (
        <div className="display-flex align-center justify-space-between">
            <div className="flex-column margin-lf-md">
                <p className='margin-0 text-16 text-bold-400'>Inflows by</p>
                <p className='margin-0 text-12 sdy-text-clr'>Category</p>
            </div>
            <span className="margin-0 text-20 text-bold-400 margin-rg-md">
                <p>${number}</p>
            </span>
        </div>
    );
}