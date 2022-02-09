package com.autoheaven.dao.user;

import java.util.HashMap;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.autoheaven.model.Users;

@Repository
@Transactional
public class UserDao  implements AutoheavenUserDao{

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public Optional<Users> getUserByEmail(String email) {
		return null;
		// return getAllUsers()
		// .stream()
		// .filter(user -> email.equals(user.getEmail or getUsername)
		// .findFirst();
	}

	public void registerUser(Users user) throws Exception {
		try {
			entityManager.persist(user);

		} catch (ConstraintViolationException c) {
			throw new ConstraintViolationException("An account with this email already exists", null);
		}

	}

	public HashMap<String, String> loginUser(String email, String password) {

		Users userFromDB = entityManager.find(Users.class, email);
		HashMap<String, String> userCred = new HashMap<>();

		if (userFromDB != null) {
			if (password.equals(userFromDB.getPassword())) {
				if (userFromDB.isEnabled()) {
					userCred.put("email", userFromDB.getUsername());
					userCred.put("firstName", userFromDB.getFirstName());
					userCred.put("lastName", userFromDB.getLastName());
					userCred.put("role", userFromDB.getAuthorities().toString());
				}
			}
		}
		return userCred;
	}

}
