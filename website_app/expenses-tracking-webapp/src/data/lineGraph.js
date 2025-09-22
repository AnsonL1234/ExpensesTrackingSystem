import axios from "axios"
import { useLocation } from "react-router-dom";

const lineGraph = () => {
    
    const location = useLocation();
    const userId = location.state?.userId;
 
    try {
        const res = axios.get(`http://localhost:7070/api/user/recentExpense/${userId}`)
        const rowDate = res.data;
        
        const result = rowDate.map((exp) => {
            const today = new Date();
            const spendDate = new Date(exp.spend_at);

            const calTime = today - spendDate;
            const recentExpense = Math.floor(calTime / (1000 * 60 * 60 * 24));

            return {
                label: `${recentExpense + 1}D`,
                amount: exp.amount
            };
        })

        console.log(result);

        return result;
    } catch (err) {
        console.error(err);
        return [];
    }

}

export default lineGraph;