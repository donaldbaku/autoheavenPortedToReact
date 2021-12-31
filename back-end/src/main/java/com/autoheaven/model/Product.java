package com.autoheaven.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;
import java.util.List;

@Entity
public class Product implements Serializable {

	private static final long serialVersionUID = 2591151653447964968L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int productId;

	private String productName;
	private String productManufacturer;
	private String productModel;
	private String productEngine;
	private String productTransmission;
	private String productDescription;
	private double productPrice;
	private int productYear;
	private String productStatus;
	private int unitInStock;
	private String productBodyType;
	private String productImagePath;
	@Column(columnDefinition = "LONGTEXT")
	private String productLongDescription;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnore
	private List<CartItem> cartItemList;

	


	
	public String getProductLongDescription() {
		return productLongDescription;
	}

	public void setProductLongDescription(String productLongDescription) {
		this.productLongDescription = productLongDescription;
	}

	public String getProductImagePath() {
		return productImagePath;
	}

	public void setProductImagePath(String productImagePath) {
		this.productImagePath = productImagePath;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductManufacturer() {
		return productManufacturer;
	}

	public void setProductManufacturer(String productManufacturer) {
		this.productManufacturer = productManufacturer;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductStatus() {
		return productStatus;
	}

	public void setProductStatus(String productStatus) {
		this.productStatus = productStatus;
	}

	public int getUnitInStock() {
		return unitInStock;
	}

	public void setUnitInStock(int unitInStock) {
		this.unitInStock = unitInStock;
	}

	public String getProductModel() {
		return productModel;
	}

	public void setProductModel(String productModel) {
		this.productModel = productModel;
	}

	public String getProductEngine() {
		return productEngine;
	}

	public void setProductEngine(String productEngine) {
		this.productEngine = productEngine;
	}

	public String getProductTransmission() {
		return productTransmission;
	}

	public void setProductTransmission(String productTransmission) {
		this.productTransmission = productTransmission;
	}

	public int getProductYear() {
		return productYear;
	}

	public void setProductYear(int productYear) {
		this.productYear = productYear;
	}

	public String getProductBodyType() {
		return productBodyType;
	}

	public void setProductBodyType(String productBodyType) {
		this.productBodyType = productBodyType;
	}

	public List<CartItem> getCartItemList() {
		return cartItemList;
	}

	public void setCartItemList(List<CartItem> cartItemList) {
		this.cartItemList = cartItemList;
	}

}
