package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.AuthRequestDTO;
import com.app.dto.UserDTO;
import com.app.entity.Users;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepo;
	
	@Autowired 
	private ModelMapper mapper;	

	@Override
	public UserDTO addUser(UserDTO dto) {
		return mapper.map(userRepo.save(mapper.map(dto, Users.class)), UserDTO.class);
	}
	
	
	@Override
	public UserDTO authenticateUser( AuthRequestDTO dto)
	{
		Users user =userRepo.findByEmailAndPassword
				       (dto.getEmail(), dto.getPassword())
				       .orElseThrow(()->new ResourceNotFoundException("Invalid Email or Password"));
		return mapper.map(user,UserDTO.class);
		
	}

}
