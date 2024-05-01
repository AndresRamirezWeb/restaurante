package cadena.restaurante.filter;

import cadena.restaurante.service.UserDetailsServiceImpl;
import cadena.restaurante.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Log4j2
@Component
public class AuthJwtTokenFilter extends OncePerRequestFilter {

    private JwtUtil jwtUtil;
    private UserDetailsServiceImpl userDetailsService;

    public AuthJwtTokenFilter(JwtUtil jwtUtil, UserDetailsServiceImpl userDetailsService){
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            String token = extractJwtToken(request);
            if(token != null && jwtUtil.validateJwtToken(token)){
                String email = jwtUtil.getUsernameFromJwtToken(token);
                UserDetails userDetails = userDetailsService.loadUserByUsername(email);
                UsernamePasswordAuthenticationToken upat =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                upat.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(upat);
            }
        }catch (Exception e){
            log.error("User authentication cannot be performed: {}", e);
        }
        filterChain.doFilter(request, response);
    }

    public String extractJwtToken(HttpServletRequest httpServletRequest){
        //Bearer GmrPUV53i8YCFez4MTDMPjkRP43XWSHkXPVAWgL8S5HZgHMFmz6bhVXpDyMnpBS7pe3oqnhtFQrGW2g6Szn8jvNdYSJus2MwVTnXVrbaoX9Yt9amvqzycUtFJB25b4TN
        String header = httpServletRequest.getHeader("Authorization");
        if(StringUtils.hasText(header) && header.startsWith("Bearer ")){
            return header.substring(7);
        }
        return null;
    }
}
