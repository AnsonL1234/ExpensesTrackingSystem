SELECT purpose, sum(amount) AS top_spending
FROM expenses ex 
WHERE ex.user_id = 'UIDA1F3C4E9B23CDEF1'
	AND year(ex.spend_time) = 2025 
GROUP BY ex.purpose
ORDER BY top_spending DESC
LIMIT 4;