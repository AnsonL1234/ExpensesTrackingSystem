package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.dto.ExpenseDTO;
import com.expensetracking.Expensio.repository.Expense;

import java.util.List;

public interface ExpenseService {

    List<ExpenseDTO> getRecentExpenseByYearMonth(String userID, int year, int month);

    double getTotalExpenses(String userID);
}
