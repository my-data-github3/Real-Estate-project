package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Table(name="users")
@Entity
@Getter
@Setter
@ToString
public class Users extends BaseEntity{
	@Column(name="user_name")

	private String name;
	
	@Column(length=75,nullable=false,unique=true)
	private String email;
	
	@Column(length=11,nullable=false,unique=true)
	
	private String mobile;
	
@Column (length=16,nullable=false,unique=true)

	private String adhar;
	private String role;
	private String password;
	

}
