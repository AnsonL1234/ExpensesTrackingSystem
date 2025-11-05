import LogoIconsDark from '../assets/logo/dark_logo.png';
import LogoIconsLight from '../assets/logo/light_logo.png';

// Top menu icons
import HomeIconDark from '../assets/general_icons/home.png';
import LayerIconDark from '../assets/general_icons/layers.png';
import DashboardIconDark from '../assets/general_icons/dashboard.png';
import CardIconDark from '../assets/general_icons/credit-card.png';

// Bottom menu icons
import ProfileIconDark from '../assets/general_icons/account.png';
import SettingIconDark from '../assets/general_icons/settings.png';
import InfoIconDark from '../assets/general_icons/info.png';
import LogOutIconDark from '../assets/general_icons/exit.png';

import DefaultImage from '../assets/general_icons/cat.png';

import Navigation from '../main-page/Navigator/Navigator.jsx';
import '../index.css';
import './MainPage.css';

export default function MainPage({theme}) {
const menuIconTop = [HomeIconDark, LayerIconDark, DashboardIconDark, CardIconDark];
const menuIconBottom = [ProfileIconDark, SettingIconDark, InfoIconDark, LogOutIconDark];
const imgIcons = theme === 'dark' ? LogoIconsLight: LogoIconsDark;

    return(
        <div className="main_page_container h-100 w-100 display-flex flex-row ">
            <div className="left_navigation">
                <Navigation titleIcons={imgIcons} menuIcons={menuIconTop} menuIcons2={menuIconBottom} />
            </div>
            <div className="main_container">
                <div className="top_panel_container">
                    <input type="text" name="" id="" placeholder="Search content" className='searchField' />
                    <div className="usertag_container">
                        <img src={DefaultImage} alt="profile_image" className='profile_image' />
                        <div className="profile_content">
                            <span className='username'>Anson Ling</span>
                            <span className='email'>ansontan1001@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="balance_panel_container">

                </div>
            </div>
        </div>
    );
}