package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.ExpenseRepo;

import java.util.List;

public interface ExpenseService {

    List<ExpenseRepo> retrieveExpenseByUserIdAndYear(int id, int year);

    List<ExpenseRepo> findExpenseMonthAndYear(int id, int month, int year);

    List<ExpenseRepo> retrieveExpenseByPurpose(int userId, String purpose, int month, int year);

    List<ExpenseRepo> retrieveExpenseByTopCategory(int userId, int year);
}
