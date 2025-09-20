package com.expensetracking.Expensio.dao.implement;

import com.expensetracking.Expensio.dao.ExpenseDAO;
import com.expensetracking.Expensio.repository.ExpenseRepo;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ExpenseDAOImpl implements ExpenseDAO {

    private final EntityManager entityManager;

    @Autowired
    public ExpenseDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void save(ExpenseRepo expenseRepo) {
        entityManager.persist(expenseRepo);
    }
}
