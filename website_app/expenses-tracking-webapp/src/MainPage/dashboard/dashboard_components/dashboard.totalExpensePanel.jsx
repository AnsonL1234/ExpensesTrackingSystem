import { useEffect, useState } from "react";
import axios from "axios";
import '../../../components/panel.css'

export default function DashboardPanel({userId, year}) {

    const currentMonth = new Date().getMonth() + 1; // it return 0 - 11 so 11 + 1 = 12
    const [month, setMonth] = useState(currentMonth); // set the default
    const [total, setTotal] = useState(0);
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:7070/api/user/expense/totalExpenses?id=${userId}&month=${month}&year=${year}`)
        .then((res) => {
            setExpense(res.data || []);
            console.log(res.data);
            console.log("Month: ", currentMonth);
        })
        .catch((err) => {
             console.log(err);
             console.log("Month: ", currentMonth);
        })
    }, [month, year])

    return (
        <>
            <div className="totalAmountPanel">
                <div className="topPanel">
                    <h6>Total Expense</h6>
                    <select 
                        name="months" 
                        id="months" 
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="monthDropdown"
                    >
                        <option value={1}>January</option>
                        <option value={2}>February</option>
                        <option value={3}>March</option>
                        <option value={4}>April</option>
                        <option value={5}>May</option>
                        <option value={6}>June</option>
                        <option value={7}>July</option>
                        <option value={8}>August</option>
                        <option value={9}>September</option>
                        <option value={10}>October</option>
                        <option value={11}>November</option>
                        <option value={12}>December</option>
                    </select>
                </div>
                <span className="price">$ {expense.reduce((sum, ex) => sum + (ex.amount || 0), 0.00)}</span>
            </div>
        </>
    );
}