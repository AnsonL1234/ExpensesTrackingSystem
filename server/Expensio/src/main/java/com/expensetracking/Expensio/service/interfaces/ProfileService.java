package com.expensetracking.Expensio.service.interfaces;

import com.expensetracking.Expensio.repository.Profile;

public interface ProfileService {

    void completeProfile(Profile profile, int userId);
}
