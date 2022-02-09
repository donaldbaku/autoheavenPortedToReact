package com.autoheaven.dao.user;

import java.util.Optional;

import com.autoheaven.model.Users;

public interface AutoheavenUserDao {
	
	Optional<Users> getUserByEmail(String email);

}
