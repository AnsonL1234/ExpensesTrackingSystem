import './Button.css';

export default function PrimaryButton({name}) {
    return (
        <button type="button" className='primary_button'>
            {name}
        </button>
    );
}