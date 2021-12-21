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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.autoheaven.dao.admin.AdminDao;
import com.autoheaven.model.Product;

@RestController
@RequestMapping("admin")
public class AdminController {
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	ServletContext servletContext;
	
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
	
	@CrossOrigin
	@PostMapping("images")
	public void addImage(@RequestBody MultipartFile image){
		MultipartFile myImage = image;
		String imagesPath = "/src/main/resources/static";
		if(myImage!=null && !myImage.isEmpty()) {
			try {
				myImage.transferTo(new File(imagesPath));
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	@CrossOrigin
	 @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	    public ResponseEntity uploadFile(@RequestParam MultipartFile file) {
	        System.out.println(String.format("File name '%s' uploaded successfully.", file.getOriginalFilename()));
	        MultipartFile myImage = file;

			String imagesPath =new File("src\\main\\resources\\images").getAbsolutePath() + "\\" + file.getOriginalFilename();
			if(myImage!=null && !myImage.isEmpty()) {
				try {
					myImage.transferTo(new File(imagesPath));
				} catch (IllegalStateException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
	        
	        return ResponseEntity.ok().build();
	    }

}
