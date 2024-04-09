package cadena.restaurante.service;

import cadena.restaurante.model.Camarero;

import cadena.restaurante.repository.CamareroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CamareroService {
    @Autowired
    private CamareroRepository camareroRepository;


    public List<Camarero> getAllCamareros() {
        return camareroRepository.findAll();
    }

    public Camarero getCamareroById(Long id) {
        return camareroRepository.findById(id).orElse(null);
    }

    public Camarero createCamarero(Camarero camarero) {
        return camareroRepository.save(camarero);
    }

    public Camarero updateCamarero(Long id, Camarero camarero) {
        Camarero existingCamarero = camareroRepository.findById(id).orElse(null);
        if (existingCamarero != null) {
            existingCamarero.setNombre(camarero.getNombre());
            existingCamarero.setApellido(camarero.getApellido());
            return camareroRepository.save(existingCamarero);
        }
        return null;
    }

    public void deleteCamarero(Long id) {
        camareroRepository.deleteById(id);
    }
}
