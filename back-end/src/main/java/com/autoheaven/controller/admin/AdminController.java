package com.autoheaven.controller.admin;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.autoheaven.dao.admin.AdminDao;
import com.autoheaven.model.Product;

@CrossOrigin
@RestController
@RequestMapping("admin")
public class AdminController {
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	ServletContext servletContext;
	
	
	@PostMapping("addProduct")
	public ResponseEntity<List<Product>> addProduct(@RequestBody Product product){
		
		List<Product> productList = adminDao.addProduct(product);
		
		return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
	}
	

	@PostMapping("editProduct")
	public ResponseEntity<List<Product>> editProduct(@RequestBody Product product){
		
		List<Product> productList = adminDao.editProduct(product);
		
		return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
	}
	

	@PostMapping("deleteProduct")
	public ResponseEntity<List<Product>> deleteProduct(@RequestParam Integer id){
		
		List<Product> productList = adminDao.deleteProduct(id);
		
		return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
	}


	@GetMapping("test")
	public ResponseEntity<String> test(){

		
		return new ResponseEntity<String>("Admin Access", HttpStatus.OK);
	}
	
}
