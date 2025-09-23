package com.expensetracking.Expensio.service.implementaton;

import com.expensetracking.Expensio.dao.ExpenseDAO;
import com.expensetracking.Expensio.repository.ExpenseRepo;
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
    public List<ExpenseRepo> retrieveExpenseByUserId(int id) {
        return expenseDAO.listExpenseByUserID(id);
    }

    @Override
    public List<ExpenseRepo> findExpenseMonthAndYear(int id, int month, int year) {
        return expenseDAO.listOfExpenseByMonthsAndYears(id, month, year);
    }
}
