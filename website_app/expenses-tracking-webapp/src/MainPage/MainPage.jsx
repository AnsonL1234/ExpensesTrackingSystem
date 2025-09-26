// import axios from "axios";
// import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import DashboardPage from "./dashboard/dashboard";
import { MdDashboard } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import "./MainPage.css"


const MainPage = () => {

    // const location = useLocation();
    // const userId = location.state?.userId;
    // const [expense, setExpense] = useState(null);

    // useEffect(() => {
    //     if (userId) {
    //         axios
    //         .get(`http://localhost:7070/api/user/expense/${userId}`)
    //         .then((response) => {
    //             setExpense(response.data);
    //             console.log(response)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //     }
    // }, [userId]) 



    return (
        <>
           <div className="mainPage">
            <div className="mainPage_left">
                <h2 className="logo-text">
                    Expensio
                </h2>
                <nav className="navigator-left">
                    <Link to="/" className="nav_link">
                        <span className="nav-icons">
                            <MdDashboard size={18} style={{ marginRight: "5px" }}/> 
                            Dashboard
                        </span>
                    </Link>
                    <Link to="/" className="nav_link">
                        <span className="nav-icons">
                            <TbReportMoney size={18} style={{ marginRight: "5px" }} />
                            Expense
                        </span>
                    </Link>
                    <Link to="/" className="nav_link">
                        <span className="nav-icons">
                            <GrTransaction style={{ marginRight: "5px" }} />
                            Transaction
                        </span>
                    </Link>
                </nav>
            </div>
            <div className="mainPage_right">
                <DashboardPage />
            </div>
           </div>
        </>
    );
}

export default MainPage;