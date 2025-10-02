package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileDAO extends JpaRepository<Profile, Integer> {

}
