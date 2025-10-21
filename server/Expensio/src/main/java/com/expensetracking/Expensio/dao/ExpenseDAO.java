package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ExpenseDAO extends JpaRepository<Expense, String>  {

    @Query("select e from Expense e where e.user.userId= :userId AND year(e.spend_time)= :year")
    List<Expense> listExpenseByUserIDAndYears(@Param("userId") String userId, @Param("year") int year);

    @Query("select e from Expense e where e.user.userId= :userId and month(e.spend_time)= :month and year(e.spend_time)= :year")
    List<Expense> listOfExpenseByMonthsAndYears(
            @Param("userId") String userId,
            @Param("month") int month,
            @Param("year") int year
    );

    @Query("select e from Expense e where e.user.userId= :userId and e.purpose= :purpose and month(e.spend_time)= :month and year(e.spend_time)= :year")
    List<Expense> findExpenseByPurpose(
            @Param("userId") String userId,
            @Param("purpose") String purpose,
            @Param("month") int month,
            @Param("year") int year
    );

    @Query("select e from Expense e where e.user.userId= :userId and year(e.spend_time)= :year and e.purpose = ( select ex.purpose from Expense ex group by ex.purpose order by sum(ex.amount) desc limit 1)")
    List<Expense> findTheTopCategory(@Param("userId") String userId, @Param("year") int year);
}
