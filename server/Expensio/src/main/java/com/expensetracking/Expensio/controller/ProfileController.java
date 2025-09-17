package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.ProfileRepo;
import com.expensetracking.Expensio.service.interfaces.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @PostMapping(value = "/completeProfile")
    public ResponseEntity<ProfileRepo> completeProfile(@RequestBody ProfileRepo profile) {
        profileService.completeProfile(profile);
        return ResponseEntity.ok(profile);
    }
}
