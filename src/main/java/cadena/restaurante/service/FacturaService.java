package cadena.restaurante.service;

import cadena.restaurante.model.Factura;
import cadena.restaurante.repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaService {

    @Autowired
    private FacturaRepository facturaRepository;

    public List<Factura> getAllFacturas() {
        return facturaRepository.findAll();
    }

    public Factura getFacturaById(Long id) {
        return facturaRepository.findById(id).orElse(null);
    }

    public Factura createFactura(Factura factura) {
        return facturaRepository.save(factura);
    }

    public Factura updateFactura(Long id, Factura factura) {
        Factura existingFactura = facturaRepository.findById(id).orElse(null);
        if (existingFactura != null) {
            existingFactura.setFecha(factura.getFecha());
            existingFactura.setTotalFacturado(factura.getTotalFacturado());
            return facturaRepository.save(existingFactura);
        }
        return null;
    }

    public void deleteFactura(Long id) {
        facturaRepository.deleteById(id);
    }

}