package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.User;
import com.expensetracking.Expensio.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/auth")
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<User> userLogin(@RequestParam String username, @RequestParam String password) {
        Optional<User> userRepo = userService.getUserByUsername(username);

        // check if the user is empty
        if (userRepo.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        // check if the password is incorrect
        if (!userRepo.get().getPassword().equals(password)) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        // if both are not empty and correct then return the response
        return new ResponseEntity<>(userRepo.get(), HttpStatus.OK);
    }
}
