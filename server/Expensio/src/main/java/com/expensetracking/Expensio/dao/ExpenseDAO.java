package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.ExpenseRepo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ExpenseDAO extends JpaRepository<ExpenseRepo, Integer>  {

    @Query("select e from ExpenseRepo e where e.user.user_id= :userId AND year(e.spend_at)= :year")
    List<ExpenseRepo> listExpenseByUserIDAndYears(@Param("userId") int userId, @Param("year") int year);

    @Query("select e from ExpenseRepo e where e.user.user_id= :userId and month(e.spend_at)= :month and year(e.spend_at)= :year")
    List<ExpenseRepo> listOfExpenseByMonthsAndYears(
            @Param("userId") int userId,
            @Param("month") int month,
            @Param("year") int year
    );

    @Query("select e from ExpenseRepo e where e.user.user_id= :userId and e.purpose= :purpose and month(e.spend_at)= :month and year(e.spend_at)= :year")
    List<ExpenseRepo> findExpenseByPurpose(
            @Param("userId") int userId,
            @Param("purpose") String purpose,
            @Param("month") int month,
            @Param("year") int year
    );

    @Query("select e from ExpenseRepo e where e.user.user_id= :userId and year(e.spend_at)= :year and e.purpose = ( select ex.purpose from ExpenseRepo ex group by ex.purpose order by sum(ex.amount) desc limit 1)")
    List<ExpenseRepo> findTheTopCategory(@Param("userId") int userId, @Param("year") int year);
}
