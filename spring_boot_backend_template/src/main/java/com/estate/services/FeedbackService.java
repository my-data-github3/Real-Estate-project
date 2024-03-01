package com.estate.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estate.dtos.FeedbackDTO;
import com.estate.exceptions.ResourceNotFoundException;
import com.estate.models.Apartment;
import com.estate.models.Customer;
import com.estate.models.Feedback;
import com.estate.repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired private FeedbackRepository repo;
	@Autowired private CustomerService csrv;
	@Autowired private BookingService bsrv;
	
	public void saveFeedback(FeedbackDTO dto) throws ResourceNotFoundException{
		Customer cust=csrv.findById(dto.getUserid());
		Apartment ap=bsrv.currentBooking(dto.getUserid()).getApartment();
		System.out.println(ap);
		Feedback fb=new Feedback();
		fb.setApartment(ap);
		fb.setCustomer(cust);
		fb.setDescr(dto.getDescr());
		repo.save(fb);
	}
	
	public List<Feedback> listAll(){
		return repo.findAll();
	}
}
