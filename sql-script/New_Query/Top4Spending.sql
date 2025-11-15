SELECT purpose, spend_time, sum(amount) AS top_spending
FROM expenses ex
WHERE ex.user_id = 'UIDA1F3C4E9B23CDEF1'
	AND year(ex.spend_time) = 2025 
GROUP BY ex.purpose, ex.spend_time
ORDER BY top_spending DESC
LIMIT 4;