package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CardDAO extends JpaRepository<Card, String> {

    @Query("select sum(c.card_cash_amount) as TotalBalance from Card c join PaymentMethod pm on pm.payment_method_id = c.paymentMethod.payment_method_id left join User u on u.userId = pm.user.userId where u.userId= :userId")
    double getTotalBalance(@Param("userId") String userId);
}
