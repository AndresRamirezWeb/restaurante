package cadena.restaurante.controller;

import cadena.restaurante.model.Camarero;
import cadena.restaurante.service.CamareroService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/camareros")
@Log4j2
@CrossOrigin(value ="http://localhost:4200")
public class CamareroController {

    @Autowired
    private CamareroService camareroService;

    @GetMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Camarero>> getAllClientes() {
        List<Camarero> camareros = camareroService.getAllCamareros();
        return ResponseEntity.ok().body(camareros);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Camarero> getCamareroById(@PathVariable Long id) {
        Camarero camarero = camareroService.getCamareroById(id);
        return ResponseEntity.ok().body(camarero);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Camarero> createCamarero(@RequestBody Camarero camarero) {
        Camarero createdCamarero = camareroService.createCamarero(camarero);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCamarero);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Camarero> updateCamarero(@PathVariable Long id, @RequestBody Camarero camarero) {
        Camarero updatedCamarero = camareroService.updateCamarero(id, camarero);
        return ResponseEntity.ok().body(updatedCamarero);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCamarero(@PathVariable Long id) {
        camareroService.deleteCamarero(id);
        return ResponseEntity.noContent().build();
    }

}
