package com.autoheaven.dao.user;

import java.util.HashMap;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.autoheaven.model.Users;

@Repository
@Transactional
public class UserDao {

	@Autowired
	private EntityManager entityManager;

	public void registerUser(Users user) throws Exception {
		try {
			user.setAuthority("user");
			user.setEnabled(true);
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
					userCred.put("email", userFromDB.getEmail());
					userCred.put("firstName", userFromDB.getFirstName());
					userCred.put("lastName", userFromDB.getLastName());
					userCred.put("role", userFromDB.getAuthority());
				}
			}
		}
		return userCred;
	}

}
