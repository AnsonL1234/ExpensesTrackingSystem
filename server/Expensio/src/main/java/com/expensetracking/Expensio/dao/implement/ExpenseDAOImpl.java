package com.expensetracking.Expensio.dao.implement;

import com.expensetracking.Expensio.dao.ExpenseDAO;
import com.expensetracking.Expensio.repository.ExpenseRepo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    @Override
    public List<ExpenseRepo> listExpenseByUserID(int user_id) {

        // create the query
        TypedQuery<ExpenseRepo> retrieveExpenseQuery = entityManager.createQuery(
                "SELECT e FROM ExpenseRepo e WHERE e.user.user_id =:theData", ExpenseRepo.class
        );

        // set the parameter for theData
        retrieveExpenseQuery.setParameter("theData", user_id);

        // return the result
        return retrieveExpenseQuery.getResultList();
    }
}
