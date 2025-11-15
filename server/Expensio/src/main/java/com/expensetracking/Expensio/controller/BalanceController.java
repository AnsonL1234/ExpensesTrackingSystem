package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.Card;
import com.expensetracking.Expensio.service.interfaces.CardService;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/user")
public class BalanceController {

    private final CardService cardService;


    public BalanceController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping(value = "/balance")
    private double getTotalBalance(@RequestParam String userID) {
        return cardService.getTotalBalance(userID);
    }
}
