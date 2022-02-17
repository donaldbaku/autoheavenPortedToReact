package com.autoheaven;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@SpringBootApplication
@ComponentScan(basePackageClasses = AutoheavenApplication.class)
public class AutoheavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutoheavenApplication.class, args);
	}

	
	
	 @Bean
	    CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration configuration = new CorsConfiguration();

	        configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
	        configuration.setAllowedHeaders(Collections.singletonList("*"));
	        configuration.setAllowedMethods(Arrays.asList("GET","POST", "OPTIONS"));
	        configuration.setAllowCredentials(true);

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", configuration);

	        return source;
	    }
}
