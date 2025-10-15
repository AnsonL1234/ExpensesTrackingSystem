import './Button.css';

export default function GeneralButton({name}) {
    return (
        <button type="button" className='general_button'>
            {name}
        </button>
    );
}