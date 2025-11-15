package com.expensetracking.Expensio.service.implementaton;

import com.expensetracking.Expensio.dao.ExpenseDAO;
import com.expensetracking.Expensio.dto.ExpenseDTO;
import com.expensetracking.Expensio.repository.Expense;
import com.expensetracking.Expensio.service.interfaces.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    private final ExpenseDAO expenseDAO;

    @Autowired
    public ExpenseServiceImpl(ExpenseDAO expenseDAO) {
        this.expenseDAO = expenseDAO;
    }


    @Override
    public List<ExpenseDTO> getRecentExpenseByYearMonth(String userID, int year, int month) {
        return expenseDAO.getRecentExpensesByYearMonth(userID, year, month);
    }

    @Override
    public double getTotalExpenses(String userID) {
        return expenseDAO.getTotalExpenses(userID);
    }
}
