package cadena.restaurante.service;

import cadena.restaurante.dto.ErrorDTO;
import cadena.restaurante.dto.JwtReponseDTO;
import cadena.restaurante.dto.LoginDTO;
import cadena.restaurante.dto.SignupDTO;
import cadena.restaurante.entity.RoleEntity;
import cadena.restaurante.entity.UserEntity;
import cadena.restaurante.enums.ERole;
import cadena.restaurante.exception.BusinessException;
import cadena.restaurante.repository.RoleRepository;
import cadena.restaurante.repository.UserRepository;
import cadena.restaurante.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    public UserRepository userRepository;
    @Autowired
    public PasswordEncoder passwordEncoder;
    @Autowired
    public RoleRepository roleRepository;
    @Autowired
    public AuthenticationManager authenticationManager;
    @Autowired
    public JwtUtil jwtUtil;

    @Override
    public JwtReponseDTO login(@RequestBody LoginDTO loginDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = jwtUtil.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        List<String> roles = userDetails.getAuthorities().stream()
                .map(role->role.getAuthority())
                .collect(Collectors.toList());

        JwtReponseDTO jwtReponseDTO = new JwtReponseDTO();
        jwtReponseDTO.setFirstName(userDetails.getFirstName());
        jwtReponseDTO.setLastName(userDetails.getLastName());
        jwtReponseDTO.setToken(jwtToken);
        jwtReponseDTO.setRoles(roles);
        jwtReponseDTO.setId(userDetails.getId());

        return jwtReponseDTO;
    }

    @Override
    public Long signup(SignupDTO signupDTO) {
        List<ErrorDTO> errorDTOS = new ArrayList<>();
        if(userRepository.existsByEmail(signupDTO.getEmail())){
            errorDTOS.add(new ErrorDTO("AUTH_001", "Email already exist"));
            throw new BusinessException(errorDTOS);
        }
        String hashedPassword = passwordEncoder.encode(signupDTO.getPassword());
        Set<RoleEntity> roleEntities = new HashSet<>();
        Optional<RoleEntity> optRole = null;
        if (signupDTO.getRole() != null && signupDTO.getRole().equals("ADMIN")){
            optRole = roleRepository.findByRoleName(ERole.ROLE_ADMIN);
        }else if (signupDTO.getRole() != null && signupDTO.getRole().equals("MOD")){
            optRole = roleRepository.findByRoleName(ERole.ROLE_MODERATOR);
        }
        else{
            optRole = roleRepository.findByRoleName(ERole.ROLE_USER);
        }

        roleEntities.add(optRole.get());

        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(signupDTO.getEmail());
        userEntity.setFirstName(signupDTO.getFirstName());
        userEntity.setLastName(signupDTO.getLastName());
        userEntity.setPhone(signupDTO.getPhone());
        userEntity.setPassword(hashedPassword);
        userEntity.setRoles(roleEntities);

        userEntity = userRepository.save(userEntity);
        return userEntity.getId();
    }
}
