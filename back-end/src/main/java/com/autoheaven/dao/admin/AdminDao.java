package com.autoheaven.dao.admin;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.autoheaven.dao.ProductDao;
import com.autoheaven.model.Product;

@Repository
@Transactional
public class AdminDao {
	
	@Autowired
	private EntityManager entityManager;
	@Autowired 
	private ProductDao productDao;

	public List<Product> addProduct(Product product) {
		entityManager.merge(product);
		return productDao.getAllProducts();
	}

}
