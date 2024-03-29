package cadena.restaurante.service;

import cadena.restaurante.entity.UserEntity;
import cadena.restaurante.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl  implements UserDetailsService {

    @Autowired
    public UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByEmail(email).orElseThrow(()->new UsernameNotFoundException("User does not exist with email "+email));
        UserDetails userDetails = UserDetailsImpl.build(userEntity);
        return userDetails;
    }
}
