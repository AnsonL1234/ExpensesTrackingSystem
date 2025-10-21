package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.User;
import com.expensetracking.Expensio.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "/findUser/{username}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {
        Optional<User> userRepo = userService.getUserByUsername(username);
        return new ResponseEntity<>(userRepo.orElseThrow(() -> new RuntimeException("User not found")), HttpStatus.OK);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<User> register(@RequestBody User user) {

        if (userService.isUserRegistered(user.getUsername()) || userService.isPasswordExist(user.getPassword()))
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        user.setCreate_at(LocalDateTime.now());
        user.setUpdate_at(LocalDateTime.now());

        userService.registerUser(user);

        return ResponseEntity.ok(user);
    }
}
