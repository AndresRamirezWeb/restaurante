package cadena.restaurante.controller;

import cadena.restaurante.model.Mesa;
import cadena.restaurante.service.MesaService;
import cadena.restaurante.util.JwtUtil;
import cadena.restaurante.filter.AuthJwtTokenFilter;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mesas")
@Log4j2
@CrossOrigin(value ="http://localhost:4200")
public class MesaController {

    @Autowired
    private MesaService mesaService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthJwtTokenFilter authJwtTokenFilter;

    @GetMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Mesa>> getAllMesas() {
        List<Mesa> mesas = mesaService.getAllMesas();
        return ResponseEntity.ok().body(mesas);
    }

//    @GetMapping()
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<List<Mesa>> getAllMesas(@RequestHeader("Authorization") HttpServletRequest token) {
//        String jwtToken = authJwtTokenFilter.extractJwtToken(token);
//
//        if (jwtUtil.validateJwtToken(jwtToken)) {
//            List<Mesa> mesas = mesaService.getAllMesas();
//            return ResponseEntity.ok().body(mesas);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
//        }
//    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Mesa> getMesaById(@PathVariable Long id) {
        Mesa mesa = mesaService.getMesaById(id);
        return ResponseEntity.ok().body(mesa);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Mesa> createMesa(@RequestBody Mesa mesa) {
        Mesa createdMesa = mesaService.createMesa(mesa);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMesa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mesa> updateMesa(@PathVariable Long id, @RequestBody Mesa mesa) {
        Mesa updatedMesa = mesaService.updateMesa(id, mesa);
        return ResponseEntity.ok().body(updatedMesa);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMesa(@PathVariable Long id) {
        mesaService.deleteMesa(id);
        return ResponseEntity.noContent().build();
    }
}
