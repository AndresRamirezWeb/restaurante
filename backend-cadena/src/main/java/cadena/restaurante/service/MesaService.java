package cadena.restaurante.service;

import cadena.restaurante.model.Mesa;
import cadena.restaurante.repository.MesaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MesaService {

    @Autowired
    private MesaRepository mesaRepository;


    public List<Mesa> getAllMesas() {
        return mesaRepository.findAll();
    }

    public Mesa getMesaById(Long id) {
        return mesaRepository.findById(id).orElse(null);
    }

    public Mesa createMesa(Mesa mesa) {
        return mesaRepository.save(mesa);
    }

    public Mesa updateMesa(Long id, Mesa mesa) {
        Mesa existingMesa = mesaRepository.findById(id).orElse(null);
        if (existingMesa != null) {
            existingMesa.setMaxComensales(mesa.getMaxComensales());
            existingMesa.setUbicacion(mesa.getUbicacion());
            return mesaRepository.save(existingMesa);
        }
        return null;
    }

    public void deleteMesa(Long id) {
        mesaRepository.deleteById(id);
    }
}

