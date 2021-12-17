package com.autoheaven.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.autoheaven.dao.admin.AdminDao;
import com.autoheaven.model.Product;

@RestController
@RequestMapping("admin")
public class AdminController {
	
	@Autowired
	private AdminDao adminDao;
	
	@CrossOrigin
	@PostMapping("addProduct")
	public ResponseEntity<List<Product>> addProduct(@RequestBody Product product){
		
		List<Product> productList = adminDao.addProduct(product);
		
		return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping("deleteProduct")
	public ResponseEntity<List<Product>> deleteProduct(@RequestParam Integer id){
		
		List<Product> productList = adminDao.deleteProduct(id);
		
		return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
	}

}
