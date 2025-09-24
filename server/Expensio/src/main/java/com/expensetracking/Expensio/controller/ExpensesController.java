package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.ExpenseRepo;
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

    @GetMapping(value = "/expense/{user_id}")
    public List<ExpenseRepo> retrieveExpenseByUserID(@PathVariable int user_id) {
        return expenseService.retrieveExpenseByUserId(user_id);
    }

    @GetMapping(value = "/expense/totalExpenses")
    public List<ExpenseRepo> findRecentExpense(
            @RequestParam int id,
            @RequestParam int month,
            @RequestParam int year
    ) {
        return expenseService.findExpenseMonthAndYear(id, month, year);
    }
}
