package br.com.diabem.appDiabemBackend.repositories;

import br.com.diabem.appDiabemBackend.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {
}
