package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.dto.ExpenseDTO;
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

    @GetMapping(value = "/expense/totalExpenses")
    private double getTotalExpenses(@RequestParam String userID) {
        return expenseService.getTotalExpenses(userID);
    }

    @GetMapping(value = "/expense/recentExpenses")
    private List<ExpenseDTO> getRecentExpensesByYearMonth(
            @RequestParam String userID,
            @RequestParam int year,
            @RequestParam int month
    ) {
        return expenseService.getRecentExpenseByYearMonth(userID, year, month);
    }
}
