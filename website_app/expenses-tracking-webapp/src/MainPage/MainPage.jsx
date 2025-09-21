// import axios from "axios";
// import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
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
                    <Link to="/" className="nav_link">Dashboard</Link>
                    <Link to="/" className="nav_link">Expense</Link>
                    <Link to="/" className="nav_link">Transaction</Link>
                </nav>
            </div>
            <div className="mainPage_right">
                
            </div>
           </div>
        </>
    );
}

export default MainPage;