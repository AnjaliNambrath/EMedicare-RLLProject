package com.medicare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.bean.Addtocart;
import com.medicare.service.CartService;

@RestController
@RequestMapping("cart")
@CrossOrigin
public class CartController {

	@Autowired
	CartService cartservice;
	
	@PostMapping(value = "addcart",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String addCart(@RequestBody Addtocart addcart) {
		return cartservice.addCart(addcart);
	}
	@DeleteMapping(value="deleteItem/{medid}/{email}")
	public String deleteItemUsingId(@PathVariable("medid") int medid,@PathVariable("email") String email) {
		return cartservice.deleteItem(medid,email);
	}
	@GetMapping(value="orderSummary/{email}",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Addtocart> orderSummaryByEmail(@PathVariable("email") String email) {
		return cartservice.orderSummaryByEmail(email);
	}
	@DeleteMapping(value="deleteCart/{email}")
	public String deleteCartAfterPayment(@PathVariable("email") String email) {
		return cartservice.deleteCartAfterPayment(email);
	}
	@GetMapping(value="totalbill/{email}",produces = MediaType.APPLICATION_JSON_VALUE)
	public String billAmount(@PathVariable("email") String email) {
		return cartservice.totalBill(email);
	}
	
	
}
