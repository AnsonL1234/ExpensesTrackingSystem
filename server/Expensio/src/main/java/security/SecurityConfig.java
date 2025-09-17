//package security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http // CSRF = Cross-Site Request Forgery protection
//                .authorizeHttpRequests(auth -> auth // this authorizeHttpRequests tell spring how to handle authorization for different paths
//                        .requestMatchers(HttpMethod.POST,"/api/user/signup").permitAll() // allow anyone to access api/login
//                        .anyRequest().authenticated() // for all other endpoints, a user mus tbe authenticated.
//                )
//                .formLogin(AbstractHttpConfigurer::disable); // disable spring default login method
//        http.csrf(AbstractHttpConfigurer::disable);

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
//}
