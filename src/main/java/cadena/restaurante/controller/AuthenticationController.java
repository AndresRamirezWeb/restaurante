package cadena.restaurante.controller;

import cadena.restaurante.dto.JwtReponseDTO;
import cadena.restaurante.dto.LoginDTO;
import cadena.restaurante.dto.SignupDTO;
import cadena.restaurante.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/openapi/v1")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<JwtReponseDTO> login(@RequestBody LoginDTO loginDTO){
        JwtReponseDTO jwtReponseDTO = authenticationService.login(loginDTO);
        ResponseEntity re = new ResponseEntity(jwtReponseDTO, HttpStatus.OK);
        return re;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupDTO signupDTO){
        Long userId = authenticationService.signup(signupDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("User Registered Successfully with id: "+userId);
    }
}