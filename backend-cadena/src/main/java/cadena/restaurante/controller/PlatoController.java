package cadena.restaurante.controller;

import cadena.restaurante.model.Plato;
import cadena.restaurante.service.PlatoService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/platos")
@Log4j2
@CrossOrigin(value ="http://localhost:4200")
public class PlatoController {

    @Autowired
    private PlatoService platoService;

    @GetMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Plato>> getAllPlatos() {
        List<Plato> platos = platoService.getAllPlatos();
        return ResponseEntity.ok().body(platos);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Plato> getPlatoById(@PathVariable Long id) {
        Plato plato = platoService.getPlatoById(id);
        return ResponseEntity.ok().body(plato);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Plato> createPlato(@RequestBody Plato plato) {
        Plato createdPlato = platoService.createPlato(plato);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlato);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Plato> updatePlato(@PathVariable Long id, @RequestBody Plato plato) {
        Plato updatedPlato = platoService.updatePlato(id, plato);
        return ResponseEntity.ok().body(updatedPlato);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlato(@PathVariable Long id) {
        platoService.deletePlato(id);
        return ResponseEntity.noContent().build();
    }

}
