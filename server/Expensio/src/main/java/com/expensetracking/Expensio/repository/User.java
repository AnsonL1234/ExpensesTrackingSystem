package com.expensetracking.Expensio.repository;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import com.expensetracking.Expensio.ID_Generator.UserIDGenerator;


import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(generator = "user_Id")
    @GenericGenerator(name = "user_Id", type = UserIDGenerator.class)
    @Column(name = "user_id")
    private String userId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "status")
    private String status;

    @Column(name = "create_at")
    private LocalDateTime create_at;

    @Column(name = "update_at", nullable = true)
    private LocalDateTime update_at;

    @OneToOne(
            mappedBy = "user",
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
                }
    )
    @JsonBackReference
    private Profile profile;

    @OneToMany(
            mappedBy = "user",
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
            }
    )
    @JsonIgnore
    private List<Expense> expenses;

    @OneToMany(
            mappedBy = "user",
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
            }
    )
    @JsonIgnore
    private List<PaymentMethod> paymentMethods;

    @OneToMany(
            mappedBy = "user",
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
            }
    )
    @JsonIgnore
    private List<Card> card;

}
