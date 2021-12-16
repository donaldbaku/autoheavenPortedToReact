package com.autoheaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = AutoheavenApplication.class)
public class AutoheavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutoheavenApplication.class, args);
	}

}
