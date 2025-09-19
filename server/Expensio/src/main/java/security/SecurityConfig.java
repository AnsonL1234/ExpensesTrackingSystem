package security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(List.of("http://localhost:5173"));
        corsConfiguration.setAllowedMethods(List.of("GET","POST","PUT","DELETE","OPTIONS"));
        corsConfiguration.setAllowedHeaders(List.of("*"));
        corsConfiguration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",corsConfiguration);
        return source;
    }

//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http // CSRF = Cross-Site Request Forgery protection
//                .authorizeHttpRequests(auth -> auth // this authorizeHttpRequests tell spring how to handle authorization for different paths
//                        .requestMatchers(HttpMethod.POST,"/api/user/signup").permitAll() // allow anyone to access api/login
//                        .anyRequest().authenticated() // for all other endpoints, a user mus tbe authenticated.
//                )
//                .formLogin(AbstractHttpConfigurer::disable); // disable spring default login method
//        http.csrf(AbstractHttpConfigurer::disable);
//
//        http
//                .csrf(AbstractHttpConfigurer::disable)
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(HttpMethod.GET, "/api/user/**").permitAll()
//                        .requestMatchers(HttpMethod.POST, "/api/**").permitAll()
//                        .requestMatchers("/api/user/register").permitAll()
//                        .anyRequest().authenticated()
//                )
//                .httpBasic(AbstractHttpConfigurer::disable);
//
//        return http.build();
//    }
}
