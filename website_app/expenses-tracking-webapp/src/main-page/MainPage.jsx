import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserTag from '../components/Card_Component/GameTag/UserTag.jsx';
import TotalPanel from '../components/Card_Component/Balance_Panel/TotalPanel.jsx';

// Main Page
import HomePage from './Home_Page/HomePage.jsx';
import ExpensesPage from './ManageExpense/ExpensesPage.jsx';
import DashboardPage from './Dashboard_Page/DashboardPage.jsx';
import CardPage from './Card_Page/CardPage.jsx';

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

import MenuIconDark from '../assets/general_icons/menu.png';
import SearchIconDark from '../assets/general_icons/search.png';
import DefaultImage from '../assets/general_icons/cat.png';

import Navigation from '../main-page/Navigator/Navigator.jsx';
import '../index.css';
import './MainPage.css';

export default function MainPage({theme, userId}) {
const menuIconTop = [HomeIconDark, LayerIconDark, DashboardIconDark, CardIconDark];
const menuIconBottom = [ProfileIconDark, SettingIconDark, InfoIconDark, LogOutIconDark];
const imgIcons = theme === 'dark' ? LogoIconsLight: LogoIconsDark;
const linkPath = ["/", "/expenses", "/dashboard", "card"];
const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="main_page_container h-100 w-100 display-flex">
            <div className={menuOpen ? "left_navigation open": "left_navigation"}>
                <Navigation 
                    titleIcons={imgIcons} 
                    menuIcons={menuIconTop} 
                    menuIcons2={menuIconBottom} 
                    linkPath={linkPath}
                />
            </div>
            <div className="main_container">
                <div className="top_panel_container">
                    <div className="search_field">
                        <img src={MenuIconDark} alt="menuIcons" className='menu' onClick={() => setMenuOpen(!menuOpen)}/>
                        <input type="text" name="" id="" placeholder="Search content" className='searchField' />
                        <img src={SearchIconDark} alt="searchIcon" className='searchIcon' />
                    </div>
                    <UserTag 
                        DefaultImage={DefaultImage} 
                        username={"Anson Ling"} 
                        email={"ansontan@gmail.com"}
                    />
                </div>
                <div className="balance_panel_container">
                    <TotalPanel 
                        title={"Total Balances"} 
                        balance={2336.45}
                    />
                    <TotalPanel 
                        title={"Total Expenses"} 
                        balance={295.78}
                    />
                </div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/expenses' element={<ExpensesPage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/card' element={<CardPage />} />
                </Routes>
                <span className='claim-message'>Developer Reserve @Copy Right</span>
            </div>
        </div>
    );
}