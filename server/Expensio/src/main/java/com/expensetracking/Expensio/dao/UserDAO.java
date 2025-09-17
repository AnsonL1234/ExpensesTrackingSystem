package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.UserRepo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDAO extends JpaRepository<UserRepo, Integer> {
    boolean existsByUsername(String username);
    boolean existsByPassword(String password);
    Optional<UserRepo> findByUsername(String username);
}
