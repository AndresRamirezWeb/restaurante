package cadena.restaurante.controller;

import cadena.restaurante.model.Detalle;
import cadena.restaurante.service.DetalleService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/detalles")
@Log4j2
@CrossOrigin(value ="http://localhost:4200")
public class DetalleController {

    @Autowired
    private DetalleService detalleService;

    @GetMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Detalle>> getAllDetalles() {
        List<Detalle> detalles = detalleService.getAllDetalles();
        return ResponseEntity.ok().body(detalles);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Detalle> getDetalleById(@PathVariable Long id) {
        Detalle detalle = detalleService.getDetalleById(id);
        return ResponseEntity.ok().body(detalle);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Detalle> createDetalle(@RequestBody Detalle detalle) {
        Detalle createdDetalle = detalleService.createDetalle(detalle);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDetalle);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Detalle> updateDetalle(@PathVariable Long id, @RequestBody Detalle detalle) {
        Detalle updatedDetalle = detalleService.updateDetalle(id, detalle);
        return ResponseEntity.ok().body(updatedDetalle);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDetalle(@PathVariable Long id) {
        detalleService.deleteDetalle(id);
        return ResponseEntity.noContent().build();
    }

}
