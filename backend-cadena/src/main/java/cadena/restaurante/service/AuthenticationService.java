package cadena.restaurante.service;

import cadena.restaurante.dto.JwtReponseDTO;
import cadena.restaurante.dto.LoginDTO;
import cadena.restaurante.dto.SignupDTO;

public interface AuthenticationService {

    public JwtReponseDTO login(LoginDTO loginDTO);
    public Long signup(SignupDTO signupDTO);
}
