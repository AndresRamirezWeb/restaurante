package cadena.restaurante.repository;

import cadena.restaurante.model.Camarero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamareroRepository extends JpaRepository<Camarero, Long> {
}
