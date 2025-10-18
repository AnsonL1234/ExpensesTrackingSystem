import PrimaryButton from '../../components/Button/PrimaryButton';
import Button2 from '../../components/Button/Button2.jsx'
import '../../index.css';
import './About.css'

export default function About_HeroSection1({title, content}) {

    const button_info = ["Explore More", "Contact"]

    return (
        <div className='display-flex flex-column grow-1 justify-center align-center'>
            <h1 className='about_title margin-0'>{title}</h1>
            <p className='about_content margin-0 sdy-text-clr'>{content}</p>
            <div className="display-flex gap-06 margin-tp-xl">
                <PrimaryButton name={button_info[0]} />
                <Button2 name={button_info[1]} />
            </div>
        </div>
    );
}