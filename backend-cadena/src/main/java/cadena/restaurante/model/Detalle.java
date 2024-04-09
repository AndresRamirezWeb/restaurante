package cadena.restaurante.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "detalle", schema = "cocina_con_cadena")
public class Detalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "cantidad", nullable = false)
    private Integer cantidad;
    @Column(name = "total_detalle", nullable = false)
    private BigDecimal totalDetalle;
    @ManyToOne
    @JoinColumn(name = "factura_id", nullable = false)
    private Factura factura;
    @ManyToOne
    @JoinColumn(name = "plato_id", nullable = false)
    private Plato plato;
}
