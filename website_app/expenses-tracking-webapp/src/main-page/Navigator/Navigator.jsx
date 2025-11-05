

export default function Navigator({titleIcons, menuIcons, menuIcons2}) {
    const menu_list = ['Home', 'Manage Your Expenses', 'Dashboard', 'Card'];
    const meny_list2 = ['Profile', 'Settings', 'Information & Help', 'Log out'];
    return (
        <div className="navigator_container">
            <div className="top_container">
                <div className="logo_container">
                    <img src={titleIcons} alt="title_icons" className="logo_icon"/>
                    <h2>Expensio</h2>
                </div>
                <span className="underline"></span>
            </div>
                <ul className="middle_menu">
                    {
                        menu_list.map((list, index) => 
                            <li key={index} className="menu_list">
                                <img src={menuIcons[index]} alt="menuIcons" className="menuIcons"/>
                                <span className="menuContent">{list}</span>
                            </li>
                        )
                    }
                    <span className="underline"></span>
                </ul>
                <ul className="bottom_menu">
                    {
                        meny_list2.map((list, index) => 
                            <li key={index} className="menu_list">
                                <img src={menuIcons2[index]} alt="menuIcons2" className="menuIcons" />
                                <span>{list}</span>
                            </li>
                        ) 
                    }
                </ul>
        </div>
    );
}