package com.expensetracking.Expensio.service.implementaton;

import com.expensetracking.Expensio.dao.CardDAO;
import com.expensetracking.Expensio.repository.Card;
import com.expensetracking.Expensio.service.interfaces.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardExpenseServiceImpl implements CardService {

    private final CardDAO cardDAO;

    @Autowired
    public CardExpenseServiceImpl(CardDAO cardDAO) {
        this.cardDAO = cardDAO;
    }


    @Override
    public double getTotalBalance(String userId) {
        return cardDAO.getTotalBalance(userId);
    }
}
