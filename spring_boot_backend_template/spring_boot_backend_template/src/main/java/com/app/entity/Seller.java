package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;



   @Table(name="seller")
   @Entity
   
   public class Seller extends BaseEntity
	{
		@Column(name="user_name" ,length=75,nullable=false,unique=true)
		@NotBlank
		private String sellerName;
		
		@Column(length=75,nullable=false,unique=true)
		@NotBlank
		private String email;
		
		@Column(length=11,nullable=false,unique=true)
		@NotBlank
		private String mobile;
		
		@Column(length=16,nullable=false,unique=true)
		@NotBlank
		private String adhar;
		private String role;
		private String password;
		

	}



