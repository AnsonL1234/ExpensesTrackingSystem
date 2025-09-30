import { useEffect, useState } from "react";
import axios from "axios";
import '../../../components/panel.css'

export default function DashboardTopCategoryPanel({userId, year}) {

    const [purpose, setPurpose] = useState([]);
    const [expense, setExpense] = useState([]);
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        axios
        .get(`http://localhost:7070/api/user/expense/expenseByTopCategory?id=${userId}&year=${year}`)
        .then((res) => {
            setExpense(res.data || []);
            setPurpose(res.data[0].purpose)
            setHasError(false);
        })
        .catch((err) => {
             console.log(err);
             setHasError(true);
        })

    }, [purpose, year])

    return (
        <>
            <div className="totalAmountPanel">
                <div className="topPanel">
                    <h6>Top Spend Category</h6>
                    <div className="topCategory">
                        {!hasError ? purpose : "N/A"}
                    </div>
                </div>
                <span className="price">$ {expense.reduce((sum, ex) => sum + (ex.amount || 0), 0)}</span>
            </div>
        </>
    );
}