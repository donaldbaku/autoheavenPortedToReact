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
	private String interiorImagePath;
	private String exteriorImagePath;
	@Column(columnDefinition = "varchar(max)")
	private String longDescription;
	@Column(columnDefinition = "varchar(max)")
	private String exteriorDescription;
	@Column(columnDefinition = "varchar(max)")
	private String interiorDescription;


	

	public String getLongDescription() {
		return longDescription;
	}

	public void setLongDescription(String longDescription) {
		this.longDescription = longDescription;
	}

	public String getInteriorImagePath() {
		return interiorImagePath;
	}

	public void setInteriorImagePath(String interiorImagePath) {
		this.interiorImagePath = interiorImagePath;
	}

	public String getExteriorImagePath() {
		return exteriorImagePath;
	}

	public void setExteriorImagePath(String exteriorImagePath) {
		this.exteriorImagePath = exteriorImagePath;
	}

	public String getExteriorDescription() {
		return exteriorDescription;
	}

	public void setExteriorDescription(String exteriorDescription) {
		this.exteriorDescription = exteriorDescription;
	}

	public String getInteriorDescription() {
		return interiorDescription;
	}

	public void setInteriorDescription(String interiorDescription) {
		this.interiorDescription = interiorDescription;
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


}
