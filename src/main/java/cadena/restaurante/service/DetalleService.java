package cadena.restaurante.service;

import cadena.restaurante.model.Detalle;
import cadena.restaurante.model.Factura;
import cadena.restaurante.repository.DetalleRepository;
import cadena.restaurante.repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetalleService {

    @Autowired
    private DetalleRepository detalleRepository;

    public List<Detalle> getAllDetalles() {
        return detalleRepository.findAll();
    }

    public Detalle getDetalleById(Long id) {
        return detalleRepository.findById(id).orElse(null);
    }

    public Detalle createDetalle(Detalle detalle) {
        return detalleRepository.save(detalle);
    }

    public Detalle updateDetalle(Long id, Detalle detalle) {
        Detalle existingDetalle = detalleRepository.findById(id).orElse(null);
        if (existingDetalle != null) {
            existingDetalle.setCantidad(detalle.getCantidad());
            existingDetalle.setTotalDetalle(detalle.getTotalDetalle());
            return detalleRepository.save(existingDetalle);
        }
        return null;
    }

    public void deleteDetalle(Long id) {
        detalleRepository.deleteById(id);
    }

}
