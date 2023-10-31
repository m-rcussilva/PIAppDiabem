package br.com.diabem.appDiabemBackend.controllers;

import br.com.diabem.appDiabemBackend.exceptions.UserNotFoundException;
import br.com.diabem.appDiabemBackend.models.UserModel;
import br.com.diabem.appDiabemBackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/user/{id}")
    Optional<UserModel> getUserById(@PathVariable Long id) {
        return userRepository.findById(id);
    }

    @PutMapping("/user/{id}")
    UserModel updateUser(@RequestBody UserModel newUser, @PathVariable Long id) {
        Optional<UserModel> existingUser = userRepository.findById(id);

        if (existingUser.isPresent()) {
            UserModel user = existingUser.get();
            user.setName(newUser.getName());
            user.setAge(newUser.getAge());
            user.setWeight(newUser.getWeight());
            user.setHeight(newUser.getHeight());
            user.setDate(newUser.getDate());
            user.setHour(newUser.getHour());
            user.setGlicose(newUser.getGlicose());
            return userRepository.save(user);
        } else {
            throw new UserNotFoundException("User not found with ID: " + id);
        }
    }

    @DeleteMapping("user/{id}")
    String deleteUserById(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "Usuário deletado";
    }

}
