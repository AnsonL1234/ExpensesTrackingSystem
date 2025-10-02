package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.UserRepo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserDAO extends JpaRepository<UserRepo, Integer> {
    boolean existsByUsername(String username);
    boolean existsByPassword(String password);
    Optional<UserRepo> findByUsername(String username);

    @Query("SELECT UserRepo FROM UserRepo u WHERE u.user_id=:userId")
    Optional<UserRepo> getUserInfo(@Param("userId") int userId);
}
