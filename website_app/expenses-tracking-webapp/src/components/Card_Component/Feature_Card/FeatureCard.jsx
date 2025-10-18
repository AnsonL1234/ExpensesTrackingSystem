import '../../../index.css';
import './FeatureCard.css';

export default function FeaturesCard({icons, title, content}) {
    return (
        <div className='feature_card padding-md bg-clr-03 display-flex flex-column align-center'>
            <section className="section_top w-100 display-flex justify-space-between">
                <img src={icons} alt="icons" className='card_icons' />
                <div className='point'></div>
            </section>
            <section className="section_bottom display-flex flex-column grow-1 justify-end gap-01">
                <h5 className='card_title margin-0 pry-text-clr '>{title}</h5>
                <p className='card_content margin-0 sdy-text-clr text-16'>{content}</p>
            </section>
        </div>
    );
}