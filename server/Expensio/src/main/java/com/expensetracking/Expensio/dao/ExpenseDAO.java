package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.ExpenseRepo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ExpenseDAO  {

    void save(ExpenseRepo expenseRepo);

    List<ExpenseRepo> listExpenseByUserID(int user_id);

    List<ExpenseRepo> listOfExpenseByDays(int user_id);
}
