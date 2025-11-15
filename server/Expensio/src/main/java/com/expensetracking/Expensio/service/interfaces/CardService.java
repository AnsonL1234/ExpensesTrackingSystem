package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.Card;

public interface CardService {

    double getTotalBalance(String userId);
}
