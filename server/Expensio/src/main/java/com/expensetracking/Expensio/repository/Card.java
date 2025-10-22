package com.expensetracking.Expensio.repository;

import com.expensetracking.Expensio.ID_Generator.CardIDGenerator;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "card")
public class Card {

    @Id
    @GeneratedValue(generator = "card_Id")
    @GenericGenerator(name = "card_Id", type = CardIDGenerator.class)
    @Column(name = "card_cash_id")
    private String card_cash_id;

    @Column(name = "card_type")
    private String card_type;

    @Column(name = "card_number")
    private int card_number;

    @Column(name = "card_amount")
    private double card_cash_amount;

    @Column(name = "issues_organization")
    private String issues_faculty;

    @Column(name = "issues_countries")
    private String issues_countries;

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
}
