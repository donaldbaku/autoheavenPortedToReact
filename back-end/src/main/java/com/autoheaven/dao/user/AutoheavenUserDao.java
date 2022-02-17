package com.autoheaven.dao.user;

import com.autoheaven.model.Users;
import com.autoheaven.security.AutoheavenUserDetails;

public interface AutoheavenUserDao {
	
	AutoheavenUserDetails getUserByUsername(String email);
	AutoheavenUserDetails registerUser(Users user);
	AutoheavenUserDetails updateUserDetails(AutoheavenUserDetails user);
	void deleteUser(AutoheavenUserDetails user);

}
