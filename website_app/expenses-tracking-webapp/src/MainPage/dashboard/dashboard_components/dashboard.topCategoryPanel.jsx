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
                label: "Top Category",
                data: expense.map((ex) => ex.amount)
            }
        ]
    };

    return (
        <>
            <div className="totalAmountPanel">
                <div className="topPanel">
                    <h6>Top Spend Category</h6>
                    <div className="topCategory">
                        {!hasError ? purpose : "N/A"}
                    </div>
                </div>
                <h6 className="price">$ {expense.reduce((sum, ex) => sum + (ex.amount || 0), 0)}</h6>
                <div className="line_graph">
                    <Line key={expense.length} data={chartData} options={chartOption}/>
                </div>
            </div>
        </>
    );
}