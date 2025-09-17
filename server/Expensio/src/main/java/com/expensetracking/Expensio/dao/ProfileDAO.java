package com.expensetracking.Expensio.dao;

import com.expensetracking.Expensio.repository.ProfileRepo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileDAO extends JpaRepository<ProfileRepo, Integer> {

}
