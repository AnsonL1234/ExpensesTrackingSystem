package com.expensetracking.Expensio.service.implementaton;

import com.expensetracking.Expensio.dao.ExpenseDAO;
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
    public List<Expense> retrieveExpenseByUserIdAndYear(String id, int year) {
        return expenseDAO.listExpenseByUserIDAndYears(id, year);
    }

    @Override
    public List<Expense> findExpenseMonthAndYear(String id, int month, int year) {
        return expenseDAO.listOfExpenseByMonthsAndYears(id, month, year);
    }

    @Override
    public List<Expense> retrieveExpenseByPurpose(String userId, String purpose, int month, int year) {
        return expenseDAO.findExpenseByPurpose(userId, purpose, month, year);
    }

    @Override
    public List<Expense> retrieveExpenseByTopCategory(String userId, int year) {
        return expenseDAO.findTheTopCategory(userId, year);
    }


}
