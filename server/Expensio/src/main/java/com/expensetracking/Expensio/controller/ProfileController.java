package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.Profile;
import com.expensetracking.Expensio.service.interfaces.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/user")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @PostMapping(value = "/completeProfile/{userId}")
    public ResponseEntity<Profile> completeProfile(@RequestBody Profile profile, @PathVariable("userId") String userId) {
        profileService.completeProfile(profile, userId);
        return ResponseEntity.ok(profile);
    }
}
