package br.com.diabem.appDiabemBackend.controllers;

import br.com.diabem.appDiabemBackend.models.UserModel;
import br.com.diabem.appDiabemBackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/createuser")
    UserModel createUser(@RequestBody UserModel createUser) {
        return userRepository.save(createUser);
    }

    @GetMapping("/glucose-results")
    List<UserModel> getAllResults() {
        return userRepository.findAll();
    }
}
