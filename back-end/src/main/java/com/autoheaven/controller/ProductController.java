package com.autoheaven.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.autoheaven.dao.ProductDao;
import com.autoheaven.model.Product;


@RestController
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	private ProductDao productDao;

    @GetMapping("/allProducts")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> productList = productDao.getAllProducts();
        return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
    }
	
    @GetMapping("/getProduct")
    public ResponseEntity<Product> getProduct(@RequestParam Integer id) {
        Product product = productDao.getProduct(id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @PostMapping("/searchResults")
    public ResponseEntity<List<Product>> getSearchResults(@RequestParam String searchData) {
		List<Product> searchResults = productDao.getSearchResults(searchData);
        return new ResponseEntity<List<Product>>(searchResults, HttpStatus.OK);
    }
}
