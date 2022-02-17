package com.autoheaven.dao.user;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;

import com.autoheaven.model.Users;
import com.autoheaven.security.AutoheavenUserDetails;

public class AutoheavenUserDaoImpl implements AutoheavenUserDao {
	
	@Autowired
	EntityManager entityManager;
	

	@Override
	public AutoheavenUserDetails getUserByUsername(String email) {
		
		return new AutoheavenUserDetails(entityManager.find(Users.class, email));
	}

	@Override
	public AutoheavenUserDetails registerUser(Users user) {

		return new AutoheavenUserDetails(entityManager.merge(user));
	}

	@Override
	public AutoheavenUserDetails updateUserDetails(AutoheavenUserDetails user) {

		return new AutoheavenUserDetails(entityManager.merge(user.getUser()));
	}

	@Override
	public void deleteUser(AutoheavenUserDetails user) {

		entityManager.remove(user);
	}

}
