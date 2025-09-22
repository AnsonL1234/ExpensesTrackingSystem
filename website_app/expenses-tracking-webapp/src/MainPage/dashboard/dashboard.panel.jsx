import { Line } from "react-chartjs-2";
import lineGraph from '../../data/lineGraph.js'
import { data } from "react-router-dom";

export default function DashboardPanel() {

    console.log(lineGraph);

    return (
        <>
            <div className="totalAmountPanel">
                <div className="topPanel">
                    <h5>Total Expense</h5>
                    <select name="months" id="months">
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                    </select>
                </div>
                <h6>$ {}</h6>
                <div className="line_graph">
                    <Line 
                        data={{
                            labels: lineGraph.map((data) => data.label),
                            datasets: {
                                label: data.label,
                                data: data.amount
                            }
                        }}
                    />
                </div>
            </div>
        </>
    );
}