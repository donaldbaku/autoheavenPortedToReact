
package com.autoheaven.security;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;



/**
 *
 * @author Donald Baku
 */

@Configuration
@EnableWebSecurity
public class AutoheavenSecurityConfig extends WebSecurityConfigurerAdapter {
	
	private final PasswordEncoder passwordEncoder;
	
	@Autowired
	public AutoheavenSecurityConfig(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
			.antMatchers("/allProducts","/h2-console/**").permitAll()
			.antMatchers("/admin/**").hasRole(AutoheavenUserRole.ADMIN.name())
			.anyRequest()
			.authenticated()
			.and()
			.httpBasic();
	}
	
	@Override
	@Bean
	protected UserDetailsService userDetailsService() {
		UserDetails user = User.builder()
		.username("db")
		.password(passwordEncoder.encode("d"))
		.roles(AutoheavenUserRole.ADMIN.name()) //ROLE_ADMIN
		.build();
		
		UserDetails userDonald = User.builder()
				.username("donald")
				.password(passwordEncoder.encode("d"))
				.roles(AutoheavenUserRole.USER.name()) //ROLE_USER
				.build();
		
		return new InMemoryUserDetailsManager(user, userDonald);
	}

}
