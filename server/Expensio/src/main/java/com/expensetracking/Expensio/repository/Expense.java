package com.expensetracking.Expensio.repository;

import com.expensetracking.Expensio.ID_Generator.ExpenseIDGenerator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(generator = "expenses_Id")
    @GenericGenerator(name = "expenses_Id", type = ExpenseIDGenerator.class)
    @Column(name = "expenses_id")
    private String expenses_id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "purpose")
    private String purpose;

    @Column(name = "spend_at")
    private String spend_at;

    @Column(name = "spend_time")
    private LocalDateTime spend_time;

    @ManyToOne(
            cascade =
                    {
                            CascadeType.DETACH,
                            CascadeType.MERGE,
                            CascadeType.PERSIST,
                            CascadeType.REFRESH
                    }
    )
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User user;

    @ManyToOne(
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
            }
    )
    @JoinColumn(name = "payment_method_id")
    private PaymentMethod paymentMethod;
}
