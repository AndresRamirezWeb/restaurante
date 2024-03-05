package cadena.restaurante.repository;

import cadena.restaurante.entity.RoleEntity;
import cadena.restaurante.enums.ERole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findByRoleName(ERole eRole);
}
