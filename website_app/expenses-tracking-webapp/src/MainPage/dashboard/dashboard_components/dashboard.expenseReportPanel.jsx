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

export default function DashboardExpenseReportPanel({userId, year}) {


    const [expense, setExpense] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:7070/api/user/expense/expenses?user_id=${userId}&year=${year}`)
        .then((res) => {
            setExpense(res.data || []);
            console.log(res.data);
        })
        .catch((err) => {
             console.log(err);
        })

    }, [userId, year])

    const chartOption = {
        responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
                },
        stacked: false,
        maintainAspectRatio: true,
        
        plugins: {
            legend: {display: true},
            tooltip: {display: true}
        },
        scales: {
            x: {
                type: 'linear',
                display: true,
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
            }
        }
    };

    const labels = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const grouped = {};
    expense.forEach((ex) => {
        const data = new Date(ex.spend_at);
        const monthIndex = data.getMonth();
        
        if (!grouped[ex.purpose]) {
            grouped[ex.purpose] = Array(12).fill(0);
        }

        grouped[ex.purpose][monthIndex] += ex.amount;
    });

    const datasets = Object.keys(grouped).map((purpose, index) => ({
        labels: purpose,
        datasets: grouped[purpose],
        fill: false,
        borderColor: `hsl(${index * 60 % 360}, 70%, 50%)`,
        backgroundColor: `hsl(${index * 60 % 360}, 70%, 50%)`,
        yAxisID: 'y',
    }));

    const chartData = {labels, datasets};

    return (
        <>
            <div className="expenseReportPanel">
                <div className="topPanel">
                    <h6>Expense Report By Categories</h6>
                </div>
                <div className="multiLineChart">
                    <Line key={expense.length} data={chartData} options={chartOption}/>
                </div>
            </div>
        </>
    );
}