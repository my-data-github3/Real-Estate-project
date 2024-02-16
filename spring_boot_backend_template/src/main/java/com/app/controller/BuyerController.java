package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.service.UserService;

public class BuyerController {
	@RestController
	@RequestMapping("/user")
	public class UserController {
		@Autowired
		private UserService userService;
		
		@PostMapping("/register")
		public UserDTO addUser(@RequestBody UserDTO dto) {
			System.out.println("In add user" + dto);
			
			
			return userService.addUser(dto);
			
			
		}
//		@DeleteMapping("/{id}")
//		public String deleteAppointment(@PathVariable Long id) {
//			return appService.deleteAppointment(id);
//		}
//		@GetMapping("/doctor/{id}")
//		public List<Appointmnet> getAllAppointmentById(@PathVariable Long id){
//			return abdfbdbdfbdbppService.getAllAppointmentById(id);
		}
}
