package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.Expense;

import java.util.List;

public interface ExpenseService {

    List<Expense> retrieveExpenseByUserIdAndYear(String id, int year);

    List<Expense> findExpenseMonthAndYear(String id, int month, int year);

    List<Expense> retrieveExpenseByPurpose(String userId, String purpose, int month, int year);

    List<Expense> retrieveExpenseByTopCategory(String userId, int year);
}
