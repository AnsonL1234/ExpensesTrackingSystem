package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.Expense;
import com.expensetracking.Expensio.service.interfaces.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/user")
public class ExpensesController {

    private final ExpenseService expenseService;

    @Autowired
    public ExpensesController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping(value = "/expense/expenses")
    public List<Expense> retrieveExpenseByUserIDAndYear(@RequestParam String user_id, @RequestParam int year) {
        return expenseService.retrieveExpenseByUserIdAndYear(user_id, year);
    }

    @GetMapping(value = "/expense/totalExpenses")
    public List<Expense> findRecentExpense(
            @RequestParam String id,
            @RequestParam int month,
            @RequestParam int year
    ) {
        return expenseService.findExpenseMonthAndYear(id, month, year);
    }

    @GetMapping(value = "/expense/expenseByPurpose")
    public List<Expense> findExpenseByPurpose(
            @RequestParam String id,
            @RequestParam String purpose,
            @RequestParam int month,
            @RequestParam int year
    ) {
        return expenseService.retrieveExpenseByPurpose(id, purpose, month, year);
    }

    @GetMapping(value = "/expense/expenseByTopCategory")
    public List<Expense> findExpenseByTopCategory(@RequestParam String id, @RequestParam int year) {
        return  expenseService.retrieveExpenseByTopCategory(id, year);
    }
}
