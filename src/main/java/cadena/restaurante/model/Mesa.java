package cadena.restaurante.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "mesa", schema = "cocina_con_cadena")
public class Mesa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "max_comensales", nullable = false)
    private Integer maxComensales;
    @Column(name = "ubicacion", nullable = false)
    private String ubicacion;
}
