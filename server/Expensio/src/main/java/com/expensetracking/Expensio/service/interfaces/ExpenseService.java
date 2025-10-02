package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.Expense;

import java.util.List;

public interface ExpenseService {

    List<Expense> retrieveExpenseByUserIdAndYear(int id, int year);

    List<Expense> findExpenseMonthAndYear(int id, int month, int year);

    List<Expense> retrieveExpenseByPurpose(int userId, String purpose, int month, int year);

    List<Expense> retrieveExpenseByTopCategory(int userId, int year);
}
