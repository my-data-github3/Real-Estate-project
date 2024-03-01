package com.estate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estate.models.Apartment;
import com.estate.models.Booking;
import com.estate.models.Customer;
import com.estate.models.Owner;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

	List<Booking> findByCustomer(Customer customer);
	List<Booking> findByApartmentAndStatus(Apartment apartment,String status);
	Booking findByCustomerAndStatus(Customer customer,String status);
	List<Booking> findByOwnerAndStatus(Owner owner,String status);
	
}
