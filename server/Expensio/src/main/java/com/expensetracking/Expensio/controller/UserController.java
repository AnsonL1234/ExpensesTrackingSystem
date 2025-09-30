package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.UserRepo;
import com.expensetracking.Expensio.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/users")
    public List<UserRepo> getAllUsers() {
        return userService.getAllUsers();
    }



    @PostMapping(value = "/register")
    public ResponseEntity<UserRepo> register(@RequestBody UserRepo user) {

        if (userService.isUserRegistered(user.getUsername()) || userService.isPasswordExist(user.getPassword()))
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        user.setCreate_at(LocalDateTime.now());
        user.setUpdate_at(LocalDateTime.now());

        userService.registerUser(user);

        return ResponseEntity.ok(user);
    }
}
