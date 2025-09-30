import DashboardPanel from "./dashboard_components/dashboard.totalExpensePanel"
import DashboardTransactionPanel from "./dashboard_components/dashboard.totalNumberTrans"
import DashboardTopCategoryPanel from "./dashboard_components/dashboard.topCategoryPanel"
import DashboardExpenseReportPanel from "./dashboard_components/dashboard.expenseReportPanel"
import DashboardBarChart from "./dashboard_components/dashboard.barChart"
import { useState } from "react";
import './dashboard.css'
import { useLocation } from "react-router-dom";

export default function DashboardPage({userId}) {

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
                    className="monthDropdown"
                >
                    <option value={currentYear - 2}>{currentYear - 2}</option>
                    <option value={currentYear - 1}>{currentYear - 1}</option>
                    <option value={currentYear}>{currentYear}</option>
                </select>
            </div>
            <p></p>
            <div className="dashboard_left">
                    <div className="dashboard_section1">
                        <DashboardPanel userId={userId} year={year}/>
                        <DashboardTransactionPanel userId={userId} purpose={"Transaction"}  year={year}/>
                        <DashboardTopCategoryPanel userId={userId} year={year} />
                    </div>
                    <div className="dashboard_section2">
                        <div className="dashboard_section2_left">
                            <DashboardExpenseReportPanel userId={userId} year={year} />
                        </div>
                        <div className="dashhboard_section2_right">
                        </div>
                    </div>
                    <div className="dashboard_section3">

                    </div>
            </div>
            <div className="dashboard_right">

            </div>
        </>
    );
}