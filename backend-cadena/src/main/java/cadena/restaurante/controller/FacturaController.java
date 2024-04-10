package cadena.restaurante.controller;

import cadena.restaurante.model.Camarero;
import cadena.restaurante.model.Cliente;
import cadena.restaurante.model.Factura;
import cadena.restaurante.service.FacturaService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facturas")
@Log4j2
@CrossOrigin(value ="http://localhost:4200")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @GetMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Factura>> getAllFacturas() {
        List<Factura> facturas = facturaService.getAllFacturas();
        return ResponseEntity.ok().body(facturas);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Factura> getFacturaById(@PathVariable Long id) {
        Factura factura = facturaService.getFacturaById(id);
        return ResponseEntity.ok().body(factura);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Factura> createFactura(@RequestBody Factura factura) {
        Factura createdFactura = facturaService.createFactura(factura);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdFactura);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Factura> updateFactura(@PathVariable Long id, @RequestBody Factura factura) {
        Factura updatedFactura = facturaService.updateFactura(id, factura);
        return ResponseEntity.ok().body(updatedFactura);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFactura(@PathVariable Long id) {
        facturaService.deleteFactura(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/camareros")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Camarero>> getTotalFacturadoPorCamareroPorMes() {
        List<Camarero> camarerosTotales = facturaService.getTotalFacturadoPorCamareroPorMes();
        return ResponseEntity.ok().body(camarerosTotales);
    }

    @GetMapping("/clientes")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Cliente>> getClientesConMasDeCienMilPesosGastados() {
        List<Cliente> clientes = facturaService.getClientesConMasDeCienMilPesosGastados();
        return ResponseEntity.ok().body(clientes);
    }

}