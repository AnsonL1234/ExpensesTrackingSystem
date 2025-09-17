package com.expensetracking.Expensio.service.implementaton;

import com.expensetracking.Expensio.dao.ProfileDAO;
import com.expensetracking.Expensio.repository.ProfileRepo;
import com.expensetracking.Expensio.service.interfaces.ProfileService;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {

    private final ProfileDAO profileDAO;

    public ProfileServiceImpl(ProfileDAO profileDAO) {
        this.profileDAO = profileDAO;
    }

    @Override
    public void completeProfile(ProfileRepo profile) {
        profileDAO.save(profile);
    }
}
