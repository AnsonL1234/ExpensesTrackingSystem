package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.ExpenseRepo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseDAO  {

    void save(ExpenseRepo expenseRepo);
}
