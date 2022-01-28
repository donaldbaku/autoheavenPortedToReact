package com.autoheaven.controller.user;

import java.util.HashMap;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.autoheaven.dao.user.UserDao;
import com.autoheaven.model.Users;

@CrossOrigin("/**")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserDao userDao;

	@PostMapping("/signup")
	@CrossOrigin("http://localhost:3000")
	public ResponseEntity<String> signUp(@RequestBody @Valid Users user) throws Exception {
		userDao.registerUser(user);
		return new ResponseEntity<String>(HttpStatus.OK);

	}

	@GetMapping("/login")
	@CrossOrigin("http://localhost:3000")
	public ResponseEntity<HashMap<String, String>> login(@RequestParam String email, @RequestParam String password) {
		HashMap<String, String> loginSuccess = userDao.loginUser(email, password);
		return new ResponseEntity<HashMap<String, String>>(loginSuccess, HttpStatus.OK);
	}

}
