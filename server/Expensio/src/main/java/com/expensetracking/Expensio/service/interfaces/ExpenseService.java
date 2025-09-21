package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.ExpenseRepo;

import java.util.List;

public interface ExpenseService {

    List<ExpenseRepo> retrieveExpenseByUserId(int id);
}
