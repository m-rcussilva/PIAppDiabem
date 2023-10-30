package br.com.diabem.appDiabemBackend.controllers;

import br.com.diabem.appDiabemBackend.models.UserModel;
import br.com.diabem.appDiabemBackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/createuser")
    UserModel createUser(@RequestBody UserModel createUser) {
        return userRepository.save(createUser);
    }

}
