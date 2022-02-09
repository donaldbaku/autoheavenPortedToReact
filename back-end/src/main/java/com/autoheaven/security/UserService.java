package com.autoheaven.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.autoheaven.dao.user.AutoheavenUserDao;

@Service
public class UserService implements UserDetailsService{
	
	
	private final AutoheavenUserDao autoheavenUserDao;
	
	
	@Autowired
	public UserService(AutoheavenUserDao autoheavenUserDao) {
		super();
		this.autoheavenUserDao = autoheavenUserDao;
	}



	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return autoheavenUserDao.getUserByEmail(username)
				.orElseThrow(() -> new UsernameNotFoundException("Username not found"));
	}

}
