package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ExpenseDAO extends JpaRepository<Expense, Integer>  {

    @Query("select e from Expense e where e.user.userId= :userId AND year(e.spend_at)= :year")
    List<Expense> listExpenseByUserIDAndYears(@Param("userId") int userId, @Param("year") int year);

    @Query("select e from Expense e where e.user.userId= :userId and month(e.spend_at)= :month and year(e.spend_at)= :year")
    List<Expense> listOfExpenseByMonthsAndYears(
            @Param("userId") int userId,
            @Param("month") int month,
            @Param("year") int year
    );

    @Query("select e from Expense e where e.user.userId= :userId and e.purpose= :purpose and month(e.spend_at)= :month and year(e.spend_at)= :year")
    List<Expense> findExpenseByPurpose(
            @Param("userId") int userId,
            @Param("purpose") String purpose,
            @Param("month") int month,
            @Param("year") int year
    );

    @Query("select e from Expense e where e.user.userId= :userId and year(e.spend_at)= :year and e.purpose = ( select ex.purpose from Expense ex group by ex.purpose order by sum(ex.amount) desc limit 1)")
    List<Expense> findTheTopCategory(@Param("userId") int userId, @Param("year") int year);
}
