import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../../components/panel.css'

import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
    elements
 } from "chart.js"

 ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardTransactionPanel({userId, purpose, year}) {

    const currentMonth = new Date().getMonth() + 1; // it return 0 - 11 so 11 + 1 = 12
    const [month, setMonth] = useState(currentMonth); // set the default
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:7070/api/user/expense/expenseByPurpose?id=${userId}&purpose=${purpose}&month=${month}&year=${year}`)
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

    const chartOption = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {display: false},
            tooltip: {display: false}
        },
        scales: {
            x: {
                display: false, 
                grid: {display: false}
            },
            y: {
                display: false, 
                grid: {display: false}
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderColor: "red", 
                borderWidth: 1
            }, 
            point: {
                radius: 2,
                pointBackgroundColor: "red", 
                hitRadius: 10
            }
        }
    };

    const chartData = {
        labels: expense.map(ex => ex.spend_at?.split("T")[0] ?? "N/A"),
        datasets: [
            {
                label: "$ ",
                data: expense.map((ex) => ex.amount)
            }
        ]
    };

    return (
        <>
            <div className="totalAmountPanel">
                <div className="topPanel">
                    <h6>Total Number of Transactions</h6>
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
                <h6 className="price">$ {expense.reduce((sum, ex) => sum + (ex.amount || 0), 0)}</h6>
                <div className="line_graph">
                    <Line key={expense.length} data={chartData} options={chartOption}/>
                </div>
            </div>
        </>
    );
}