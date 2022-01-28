package com.autoheaven.dao.product;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.autoheaven.model.Product;

@Repository
@Transactional
public class ProductDao {
	
	@Autowired
	private EntityManager entityManager;
	
	public List<Product> getAllProducts(){
		
		List<Product> prodList = entityManager
				.createQuery("select p from Product p")
				.getResultList();
		return prodList;		
	}

	public Product getProduct(Integer id) {
		Product product = entityManager.find(Product.class, id);
		return product;
	}

	public List<Product> getSearchResults(String searchData) {
		List<Product> searchResults = entityManager
				.createQuery("SELECT p from Product p WHERE LOWER(p.productName) LIKE :searchData")
				.setParameter("searchData", "%"+searchData.toLowerCase()+"%").getResultList();
		return searchResults;
	}

}
