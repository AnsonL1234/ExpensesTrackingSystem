package com.expensetracking.Expensio.dto;

import com.expensetracking.Expensio.repository.Card;
import com.expensetracking.Expensio.repository.PaymentMethod;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseDTO {
    private String spend_at;
    private String purpose;
    private double amount;
    private LocalDateTime spend_time;
    private String payment_type;
    private Long card_number;
}
