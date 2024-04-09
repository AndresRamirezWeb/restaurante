package cadena.restaurante.service;

import cadena.restaurante.model.Camarero;
import cadena.restaurante.model.Cliente;
import cadena.restaurante.model.Factura;
import cadena.restaurante.repository.FacturaRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaService {

    @Autowired
    private EntityManager entityManager;

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

    public List<Camarero> getTotalFacturadoPorCamareroPorMes() {
        String jpql = "SELECT " +
                "    f.camarero, " +
                "    EXTRACT(MONTH FROM f.fecha) AS mes, " +
                "    SUM(f.totalFacturado) AS totalFacturado " +
                "FROM Factura f " +
                "GROUP BY f.camarero, EXTRACT(MONTH FROM f.fecha) " +
                "ORDER BY mes, totalFacturado DESC";

        Query query = entityManager.createQuery(jpql);
        List<Camarero> resultados = query.getResultList();

        return resultados;
    }

    public List<Cliente> getClientesConMasDeCienMilPesosGastados() {
        String jpql = "SELECT " +
                "    f.cliente, " +
                "    SUM(f.totalFacturado) AS totalGastado " +
                "FROM Factura f " +
                "GROUP BY f.cliente " +
                "HAVING SUM(f.totalFacturado) > 100000 " +
                "ORDER BY totalGastado DESC";

        Query query = entityManager.createQuery(jpql);
        List<Cliente> resultados = query.getResultList();

        return resultados;
    }

}