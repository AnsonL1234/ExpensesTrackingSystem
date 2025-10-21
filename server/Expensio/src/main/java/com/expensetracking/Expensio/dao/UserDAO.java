package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserDAO extends JpaRepository<User, String> {
    boolean existsByUsername(String username);
    boolean existsByPassword(String password);
    Optional<User> findByUsername(String username);

    Optional<User> findByUserId(String userId);

    @Query("FROM User u WHERE u.userId=:userId")
    Optional<User> getUserInfo(@Param("userId") String userId);
}
