import DashboardPanel from "./dashboard.panel";

export default function DashboardPage() {


    return (
        <>
            <h4>Dashboard Overview</h4>
            <p></p>
            <div className="dashboard_left">
                <div className="dashboard_top_left">
                    <DashboardPage />
                    <DashboardPage />
                    <DashboardPage />
                </div>
            </div>
            <div className="dashboard_right">

            </div>
        </>
    );
}