package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.UserRepo;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<UserRepo> getAllUsers();

    void registerUser(UserRepo user);

    boolean isUserRegistered(String username);

    boolean isPasswordExist(String password);

    Optional<UserRepo> getUserByUsername(String username);
}
