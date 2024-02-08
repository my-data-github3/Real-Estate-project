package com.app.service;

import javax.validation.Valid;

import com.app.dto.AuthRequestDTO;
import com.app.dto.UserDTO;

public interface UserService {

//		AddUserDto addNewProductDetails(Long categoryId, AddProductDto dto);
//
//		List<ProductDto> getProductsByCategory(@NotBlank String categoryName);
//
//		String deleteProductById(@NotNull Long productId);
//
//		String updateProductsById(UpdateProductPriceDto dto, Long productId);

		 UserDTO addUser(UserDTO dto);

		UserDTO authenticateUser( AuthRequestDTO dto);
			
	}
