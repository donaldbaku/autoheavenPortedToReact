package com.autoheaven.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.autoheaven.model.Users;

public class AutoheavenUserDetails implements UserDetails{

	private static final long serialVersionUID = 2418377407340279141L;
	private Users user;

	public AutoheavenUserDetails(Users user) {
		this.user = user;
	}
	
	
	@Override
	public List<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> grantedAuthority = new ArrayList();
		grantedAuthority.add(new SimpleGrantedAuthority(user.getAuthority()));
		
		return grantedAuthority;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return user.isEnabled();
	}


	public Users getUser() {
		return user;
	}


	public void setUser(Users user) {
		this.user = user;
	}
	
	
	
	

}
