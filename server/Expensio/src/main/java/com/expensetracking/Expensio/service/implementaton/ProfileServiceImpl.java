package com.expensetracking.Expensio.service.implementaton;

import com.expensetracking.Expensio.dao.ProfileDAO;
import com.expensetracking.Expensio.dao.UserDAO;
import com.expensetracking.Expensio.repository.Profile;
import com.expensetracking.Expensio.repository.User;
import com.expensetracking.Expensio.service.interfaces.ProfileService;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {

    private final ProfileDAO profileDAO;
    private final UserDAO userDAO;

    public ProfileServiceImpl(ProfileDAO profileDAO, UserDAO userDAO) {
        this.profileDAO = profileDAO;
        this.userDAO = userDAO;
    }

    @Override
    public void completeProfile(Profile profile, int userId) {
        User user = userDAO.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        profile.setUser(user); // set foreign key
        profileDAO.save(profile);
    }
}
