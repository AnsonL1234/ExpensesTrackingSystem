import './UserTag.css';

export default function UserTag({DefaultImage, username, email}) {
    return (
        <div className="usertag_container">
            <img src={DefaultImage} alt="profile_image" className='profile_image' />
            <div className="profile_content">
                <span className='username'>{username}</span>
                <span className='email'>{email}</span>
            </div>
        </div>
    );
}