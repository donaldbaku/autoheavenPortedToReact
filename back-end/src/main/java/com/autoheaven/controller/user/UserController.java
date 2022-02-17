package com.autoheaven.controller.user;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.autoheaven.model.Users;
import com.autoheaven.security.AutoheavenUserRole;
import com.autoheaven.security.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/signup")
	public ResponseEntity<String> signUp(@RequestBody @Valid Users user) throws Exception {
		user.setAuthority(AutoheavenUserRole.USER.name());
		user.setEnabled(true);
		userService.registerUser(user);
		return new ResponseEntity<String>(HttpStatus.OK);

	}

	@GetMapping("/login")
	public ResponseEntity login(@RequestParam String username, @RequestParam String password) {
		 try {
			userService.loginUser(username, password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new ResponseEntity( HttpStatus.OK);
	}

}
