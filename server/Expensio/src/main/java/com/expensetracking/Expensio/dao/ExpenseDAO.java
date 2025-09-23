package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.ExpenseRepo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ExpenseDAO extends JpaRepository<ExpenseRepo, Integer>  {

    @Query("select e from ExpenseRepo e where e.user.user_id= :userId")
    List<ExpenseRepo> listExpenseByUserID(@Param("userId") int userId);

    @Query("select e from ExpenseRepo e where e.user.user_id= :userId and month(e.spend_at)= :month and year(e.spend_at)= :year")
    List<ExpenseRepo> listOfExpenseByMonthsAndYears(
            @Param("userId") int userId,
            @Param("month") int month,
            @Param("year") int year);
    }
