
package com.autoheaven.security;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
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
	private final UserService userService;
	
	@Autowired 
	public AutoheavenSecurityConfig(PasswordEncoder passwordEncoder, UserService userService) {
		this.passwordEncoder = passwordEncoder;
		this.userService = userService;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()
			.authorizeRequests()
			.antMatchers("/products/**","/h2-console/**", "/user/**").permitAll()
			.antMatchers("/admin/**").hasRole(AutoheavenUserRole.ADMIN.name())
			.anyRequest()
			.authenticated()
			.and()
			.formLogin()
			.loginPage("/user/login")
			.defaultSuccessUrl("/", true)
			.and()
			.rememberMe() //session expires after 2 weeks instead of 30 minutes
		//  .tokenValiditySeconds((int) TimeUnit.DAYS.toSeconds(21)) //session extended to 21 days
		//	.key("somethingverysecure");
			.and()
			.logout()
			.logoutUrl("/user/logout")
			.clearAuthentication(true)
			.invalidateHttpSession(true)
			.deleteCookies("JSESSIONID", "remember-me")
			.logoutSuccessUrl("/user.login");
	}
	
	
	
//	@Override
//	@Bean
//	protected UserDetailsService userDetailsService() {
//		UserDetails user = User.builder()
//		.username("db")
//		.password(passwordEncoder.encode("d"))
//		.roles(AutoheavenUserRole.ADMIN.name()) //ROLE_ADMIN
//		.build();
//		
//		UserDetails userDonald = User.builder()
//				.username("donald")
//				.password(passwordEncoder.encode("d"))
//				.roles(AutoheavenUserRole.USER.name()) //ROLE_USER
//				.build();
//		
//		return new InMemoryUserDetailsManager(user, userDonald);
//	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(daoAuthenticationProvider());
	}
	
	
	@Bean
	public DaoAuthenticationProvider daoAuthenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setPasswordEncoder(passwordEncoder); //decodes the passwords
		authProvider.setUserDetailsService(userService);
		return authProvider;
	}

	

}
