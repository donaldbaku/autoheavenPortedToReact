package com.autoheaven.security;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.autoheaven.dao.user.AutoheavenUserDao;
import com.autoheaven.model.Users;

@Service
public class UserService implements UserDetailsService{
	

	private AutoheavenUserDao autoheavenUserDao;



	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		try {
		return autoheavenUserDao.getUserByUsername(email);
		}catch(Exception e) {
			throw new UsernameNotFoundException("User not found");
		
		}
	}

	public void loginUser(String username, String password) throws Exception {
		try {
			this.loadUserByUsername(username);
		}catch(Exception e) {
			throw new Exception("smth went wrong");
		
		}
	}

	public void registerUser(@Valid Users user) throws Exception {
		try {
			autoheavenUserDao.registerUser(user);
		}catch(Exception e) {
			throw new Exception("smth went wrong");
		
		}
	}
	

}
