package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> getAllUsers();

    void registerUser(User user);

    boolean isUserRegistered(String username);

    boolean isPasswordExist(String password);

    Optional<User> getUserByUsername(String username);

    Optional<User> getUserById(int userId);
}
