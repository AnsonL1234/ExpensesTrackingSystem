import DashboardPanel from "./dashboard.panel";
import { useState } from "react";
import './dashboard.css'

export default function DashboardPage() {

    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    return (
        <>
            <div className="dashboard_top">
                <h4>Dashboard Overview</h4>
                <select 
                    name="year"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                    <option value={currentYear - 2}>{currentYear - 2}</option>
                    <option value={currentYear - 1}>{currentYear - 1}</option>
                    <option value={currentYear}>{currentYear}</option>
                </select>
            </div>
            <p></p>
            <div className="dashboard_left">
                <div className="dashboard_top_left">
                    <DashboardPanel year={year}/>
                </div>
            </div>
            <div className="dashboard_right">

            </div>
        </>
    );
}