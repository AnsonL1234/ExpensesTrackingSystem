import TopSpending from '../../components/Card_Component/TopSpending_Panel/TopSpending';
import Button3 from '../../components/Button/Button3.jsx'
import TableList from './TableList/HomePage.TableList.jsx';
import './HomePage.css';

import GroceryIcons from'../../assets/general_icons/grocery-store.png';
import ListIcon from '../../assets/general_icons/list.png';

export default function HomePage() {

    const icons = [];

    return (
        <div className="HomePage_Container">
            <div className="Home_Panel1" >
                <div className="toppanel_container">
                    
                    <div className="section_left">
                        <Button3 name={"+ Add"} />
                        <Button3 name={"- Remove"} />
                    </div>
                    <div className="section_right">
                        <Button3 name={"2025"} />
                    </div>

                </div>
                <div className="middle_container">
                    <TopSpending 
                    icons={GroceryIcons} 
                    title={'Restaurant'} 
                    year={2025} 
                    amount={300} 
                    max_amount={2336.46} 
                    style="grid-area: panel1"
                    />
                    <TopSpending 
                        icons={GroceryIcons} 
                        title={'Shopping'} 
                        year={2025} 
                        amount={400} 
                        max_amount={2336.46} 
                        style="grid-area: panel2"
                    />
                    <TopSpending 
                        icons={GroceryIcons} 
                        title={'Entertainment'} 
                        year={2025} 
                        amount={51.99} 
                        max_amount={2336.46} 
                        style="grid-area: panel3"
                    />
                    <TopSpending 
                        icons={GroceryIcons} 
                        title={'Subcription'} 
                        year={2025} 
                        amount={41.33} 
                        max_amount={2336.46} 
                        style="grid-area: panel4"
                    />
                </div>
                <div className="bottom_container">
                    <div className="title_container">
                        <img src={ListIcon} alt="listIcons" className='listIcons' />
                        <h4>Recent Expenses</h4>
                    </div>
                    <TableList />
                </div>
            </div>
            <div className="Home_Panel2">
                <div className="shortcut_container">

                </div>
                <div className="info_container">
                    <div className="card_container">

                    </div>
                    <div className="chart_container">

                    </div>
                </div>
            </div>
        </div>
    );
}