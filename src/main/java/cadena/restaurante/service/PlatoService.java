package cadena.restaurante.service;

import cadena.restaurante.model.Plato;

import cadena.restaurante.repository.PlatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlatoService {
    @Autowired
    private PlatoRepository platoRepository;


    public List<Plato> getAllPlatos() {
        return platoRepository.findAll();
    }

    public Plato getPlatoById(Long id) {
        return platoRepository.findById(id).orElse(null);
    }

    public Plato createPlato(Plato plato) {
        return platoRepository.save(plato);
    }

    public Plato updatePlato(Long id, Plato plato) {
        Plato existingPlato = platoRepository.findById(id).orElse(null);
        if (existingPlato != null) {
            existingPlato.setNombre(plato.getNombre());
            existingPlato.setPrecio(plato.getPrecio());
            return platoRepository.save(existingPlato);
        }
        return null;
    }

    public void deletePlato(Long id) {
        platoRepository.deleteById(id);
    }
}
