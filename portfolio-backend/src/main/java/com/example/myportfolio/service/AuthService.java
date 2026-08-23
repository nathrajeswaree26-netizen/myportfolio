package com.example.myportfolio.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.myportfolio.dto.AuthResponse;
import com.example.myportfolio.dto.LoginRequest;
import com.example.myportfolio.dto.RegisterRequest;
import com.example.myportfolio.entity.Role;
import com.example.myportfolio.entity.User;
import com.example.myportfolio.repository.RoleRepository;
import com.example.myportfolio.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            UserRepository userRepository,
            RoleRepository roleRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // =========================
    // REGISTER
    // =========================
    public AuthResponse register(RegisterRequest request) {

        if (request.getName() == null || request.getName().isBlank()) {
            throw new RuntimeException("Name is required");
        }

        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw new RuntimeException("Email is required");
        }

        if (request.getPassword() == null || request.getPassword().isBlank()) {
            throw new RuntimeException("Password is required");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseGet(() ->
                        roleRepository.save(new Role("ROLE_USER"))
                );

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEnabled(true);
        user.setRole(userRole);

        User savedUser = userRepository.save(user);

        return new AuthResponse(
                "Registration successful",
                savedUser.getName(),
                savedUser.getEmail(),
                savedUser.getRole().getName()
        );
    }

    // =========================
    // LOGIN
    // =========================
    public AuthResponse login(LoginRequest request) {

        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw new RuntimeException("Email is required");
        }

        if (request.getPassword() == null || request.getPassword().isBlank()) {
            throw new RuntimeException("Password is required");
        }

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password")
                );

        if (!user.isEnabled()) {
            throw new RuntimeException("User account is disabled");
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException("Invalid email or password");
        }

        return new AuthResponse(
                "Login successful",
                user.getName(),
                user.getEmail(),
                user.getRole().getName()
        );
    }
}