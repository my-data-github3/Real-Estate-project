package com.estate.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.dtos.FeedbackDTO;
import com.estate.dtos.ForgotPasswordDTO;
import com.estate.dtos.LoginDTO;
import com.estate.dtos.LoginResponse;
import com.estate.dtos.MailSenderDTO;
import com.estate.exceptions.ResourceNotFoundException;
import com.estate.models.Admin;
import com.estate.models.Customer;
import com.estate.models.Owner;
import com.estate.services.AdminService;
import com.estate.services.CustomerService;
import com.estate.services.EmailService;
import com.estate.services.FeedbackService;
import com.estate.services.OwnerService;

@CrossOrigin
@RestController   //transfer data into xml file or jason object
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired private AdminService adminService;
	@Autowired private CustomerService cservice;
	@Autowired private OwnerService oservice;
	@Autowired private FeedbackService fservice;
	@Autowired private EmailService emailservice;
	
	@GetMapping("feedbacks")
	public ResponseEntity<?> findAll() {		
		return ResponseEntity.ok(fservice.listAll());
	}
	
	@PostMapping("reset")
	public ResponseEntity<?> resetpassword(@RequestBody ForgotPasswordDTO dto) {
		if(adminService.validate(dto)) {
			adminService.updatePassword(dto);
			return ResponseEntity.ok("Password updated successfully");
		}else if(cservice.validate(dto)) {
			cservice.updatePassword(dto);
			return ResponseEntity.ok("Password updated successfully");
		}else if(oservice.validate(dto)) {
			oservice.updatePassword(dto);
			return ResponseEntity.ok("Password updated successfully");
		}else
			return ResponseEntity.badRequest().body("Invalid details provided");
	}
	
	@PostMapping("feedbacks")
	public ResponseEntity<?> saveFeedback(@RequestBody FeedbackDTO dto) throws ResourceNotFoundException{
		fservice.saveFeedback(dto);
		return ResponseEntity.ok("Feedback submitted");
	}
	
	@PostMapping("sendmail")
	public ResponseEntity<?> sendMail(@RequestBody MailSenderDTO dto) throws ResourceNotFoundException {
		System.out.println(dto);
		emailservice.sendMail(cservice.findById(dto.getUserid()).getUserid(), dto.getSubject(), dto.getMessage());
		return ResponseEntity.ok("Mail send successfully");
	}
	
	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) throws ResourceNotFoundException {
		System.out.println(dto);
		Customer cust=cservice.validate(dto);
		Owner owner=oservice.validate(dto);
		if(cust!=null) {
			return ResponseEntity.ok(new LoginResponse(cust.getId(), cust.getUserid(), cust.getName(), "Customer"));
		}
		if(owner!=null) {
			return ResponseEntity.ok(new LoginResponse(owner.getId(), owner.getUserid(), owner.getName(), "Owner")); 
		}
		return ResponseEntity.badRequest().body("Invalid username or password");
		
	}
	
	@PostMapping("/avalidate")
	public ResponseEntity<?> avalidateUser(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Admin admin=adminService.validate(dto.getUserid(),dto.getPwd());
		if(admin!=null) {			
			return ResponseEntity.ok(new LoginResponse(0, admin.getUserid(), admin.getUname(), "Admin"));
		} else {
			return ResponseEntity.badRequest().body("Invalid username or password");
		}
		
	}
	
	@PostMapping
	public ResponseEntity<?> updateProfile(@RequestBody Admin admin) {
		adminService.updateAdmin(admin);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
}
