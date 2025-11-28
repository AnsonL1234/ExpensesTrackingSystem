import './HomePage.TableList.css';

export default function TableList() {

    

    return (
        <div>
            <table className="table_list">
                <tr>
                    <th>NAME</th>
                    <th>AMOUNT</th>
                    <th>DATETIME</th>
                    <th>METHOD</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>$100</td>
                    <td>2023-10-01 12:00</td>
                    <td>Credit Card</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>$200</td>
                    <td>2023-10-02 14:30</td>
                    <td>PayPal</td>
                </tr>
                <tr>
                    <td>Mike Johnson</td>
                    <td>$150</td>
                    <td>2023-10-03 09:15</td>
                    <td>Bank Transfer</td>
                </tr>
            </table>
        </div>
    );
}