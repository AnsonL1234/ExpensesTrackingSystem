package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.dto.ExpenseDTO;
import com.expensetracking.Expensio.repository.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ExpenseDAO extends JpaRepository<Expense, String>  {

    @Query("select sum(e.amount) from Expense e where e.user.userId=:userID")
    double getTotalExpenses(@Param("userID") String userID);

    @Query("select e.spend_at, e.purpose, e.amount, e.spend_time, pm.payment_type, cc.card_number " +
            "from Expense e " +
            "join PaymentMethod pm on pm.payment_method_id = e.paymentMethod.payment_method_id " +
            "left join Card cc on cc.paymentMethod.payment_method_id = pm.payment_method_id " +
            "where e.user.userId=:userID " +
                "and year(e.spend_time)=:year " +
                "and month(e.spend_time)=:month " +
            "order by e.spend_time desc")
    List<ExpenseDTO> getRecentExpensesByYearMonth(
            @Param("userID") String userID,
            @Param("year") int year,
            @Param("month") int month
    );
}
