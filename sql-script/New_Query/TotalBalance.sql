SELECT sum(card_cash_amount) as TotalBalance 
FROM card_cash cc
Join payment_method pm on pm.payment_method_id = cc.payment_method_id
LEFT JOIN user u on u.user_id = pm.user_id 
WHERE u.user_id = 'UIDA1F3C4E9B23CDEF1';