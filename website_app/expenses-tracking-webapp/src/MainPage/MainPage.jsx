import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const MainPage = () => {

    const location = useLocation();
    const userId = location.state?.userId;
    const [expense, setExpense] = useState(null);

    useEffect(() => {
        if (userId) {
            axios
            .get(`http://localhost:7070/api/user/expense/${userId}`)
            .then((response) => {
                setExpense(response.data);
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [userId]) 

    return (
        <>
           {
                Array.isArray(expense) ? (
                    expense.map((ex, idx) => (
                        <ul key={idx}>
                            <li>Amount: {ex.amount}</li>
                            <li>Purpose: {ex.purpose}</li>
                            <li>Spend At: {ex.spend_at}</li>
                        </ul>
                    ))
                ): (
                    <div>No expense found!</div>
                )
           }
        </>
    );
}

export default MainPage;