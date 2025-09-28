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

    }, [userId, year]);

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
        label: purpose,
        data: grouped[purpose],
        fill: false,
        borderColor: `hsl(${index * 60 % 360}, 70%, 50%)`,
        backgroundColor: `hsl(${index * 60 % 360}, 70%, 50%)`,
        yAxisID: 'y',
    }));

    const chartData = {labels, datasets};

    const chartOption = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    usePointStyle: true, // use point style instead of box
                    pointStyle: "circle", // make it circle
                    boxWidth: 6,  // smaller width
                    boxHeight: 6, // smaller height
                    padding: 18,  // space between text & dot
                    font: {
                        size: 8, // make text smaller
                        weight: 'normal' 
                    }
                }
            },
            tooltip: {
                display: false, 
                enabled: true
            }
        },
        scales: {
            x: {
                type: 'category',
                display: true,
                grid: {display: false},
                ticks: {
                    font: {
                        size: 8,
                    }
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 8,
                    }
                }
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 0.8,
            }, 
            point: {
                radius: 1,
                hitRadius: 10
            }
        }
    };

    return (
        <>
            <div className="expenseReportPanel">
                <div className="topPanel">
                    <h6 className="panel_title">Mutiline Chart Expense Report By Categories</h6>
                </div>
                <div className="multiLineChart">
                    <Line key={expense.length} data={chartData} options={chartOption}/>
                </div>
            </div>
        </>
    );
}