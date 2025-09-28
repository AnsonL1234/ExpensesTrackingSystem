import { Doughnut  } from "react-chartjs-2"
import { useEffect, useState } from "react"
import axios from "axios";
import '../../../components/panel.css'

import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    ArcElement,
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
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardBarChart({userId, year}) {

    const [expense, setExpense] = useState([]);
    const [month, setMonth] = useState(0);

    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    useEffect(() => {
        axios
        .get(`http://localhost:7070/api/user/expense/expenses?user_id=${userId}&year=${year}`)
        .then((res) => {
            const d = new Date(res.data.spend_at);
            setMonth(d.getMonth());
            console.log("Month", d);
            setExpense(res.data);
        })
        .catch((err) => {
             console.log(err);
        })

    }, [userId, year]);

    const grouped = expense.reduce((acc, curr) => {
        const data = new Date(curr.spend_at);
        const monthIndex = data.getMonth();
        
        if (!acc[curr.purpose]) {
            acc[curr.purpose] = Array(12).fill(0);
        }

        acc[curr.purpose][monthIndex] += curr.amount;

        return acc;
    }, {});

    const label = Object.keys(grouped)
    const dataValues = Object.values(grouped)

    const datasets = {
        label, 
        datasets: [ 
            {
                label: ` Expenses`,
                data: dataValues,
                backgroundColor: label.map((_, i) => `hsl(${(i * 60) % 360}, 70%, 50%)`),
                borderwidth: 1,
            }
        ]
    }

    const chartOption = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
            title: {
                display: true,
                text: 'Yearly Sales Data', // Chart title
            },
        },
    }

    return (
        <>
            <div className="expenseReportPanel">
                <div className="topPanel">
                    <h6 className="panel_title">Bar Chart Expense Report By Categories</h6>
                </div>
                <div className="barChart">
                    <Doughnut  data={datasets} options={chartOption}/>
                </div>
            </div>
        </>
    );
}