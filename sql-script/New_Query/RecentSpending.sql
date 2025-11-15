SELECT ex.spend_at, ex.purpose, ex.amount, ex.spend_time, pm.payment_type, cc.card_number
FROM expenses ex
JOIN payment_method pm on pm.payment_method_id = ex.payment_method_id 
LEFT JOIN card_cash cc on cc.payment_method_id = pm.payment_method_id
WHERE ex.user_id = 'UIDA1F3C4E9B23CDEF1'
ORDER BY ex.spend_time DESC 
LIMIT 4;