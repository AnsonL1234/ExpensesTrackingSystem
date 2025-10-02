package com.expensetracking.Expensio.service.implementaton;

import com.expensetracking.Expensio.dao.UserDAO;
import com.expensetracking.Expensio.repository.UserRepo;
import com.expensetracking.Expensio.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    public List<UserRepo> getAllUsers() {
        return userDAO.findAll();
    }

    @Override
    public void registerUser(UserRepo user) {
        userDAO.save(user);
    }

    @Override
    public boolean isUserRegistered(String username) {
        return userDAO.existsByUsername(username);
    }

    @Override
    public boolean isPasswordExist(String password) {
        return userDAO.existsByPassword(password);
    }

    @Override
    public Optional<UserRepo> getUserByUsername(String username) {
        return userDAO.findByUsername(username);
    }

    @Override
    public Optional<UserRepo> getUserById(int userId) {
        return userDAO.getUserInfo(userId);
    }


}
