package com.expensetracking.Expensio.controller;

import com.expensetracking.Expensio.repository.ProfileRepo;
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
    public ResponseEntity<ProfileRepo> completeProfile(@RequestBody ProfileRepo profile, @PathVariable("userId") int userId) {
        profileService.completeProfile(profile, userId);
        return ResponseEntity.ok(profile);
    }
}
