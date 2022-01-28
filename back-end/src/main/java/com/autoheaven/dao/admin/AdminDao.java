package com.autoheaven.dao.admin;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.autoheaven.dao.product.ProductDao;
import com.autoheaven.model.Product;

@Repository
@Transactional
public class AdminDao {

	@Autowired
	private EntityManager entityManager;
	@Autowired
	private ProductDao productDao;

	public List<Product> addProduct(Product product) {

		try {
			Product existingProduct = (Product) entityManager
					.createQuery("SELECT p from Product p WHERE p.productName LIKE :param")
					.setParameter("param", product.getProductName()).getSingleResult();
			existingProduct.setUnitInStock(existingProduct.getUnitInStock() + product.getUnitInStock());
			entityManager.merge(existingProduct);
		} catch (NoResultException e) {
			entityManager.merge(product);
		}

		return productDao.getAllProducts();
	}
	
	public List<Product> editProduct(Product product){
		entityManager.merge(product);
		return productDao.getAllProducts();
	}

	public List<Product> deleteProduct(Integer id) {
		entityManager.remove(entityManager.find(Product.class, id));
		return productDao.getAllProducts();
	}

}
