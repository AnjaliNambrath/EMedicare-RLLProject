package com.medicare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.bean.Account;
import com.medicare.bean.Addtocart;
import com.medicare.repository.AccountRepository;

@Service
public class AccountService {
	@Autowired
	AccountRepository accountrepo;
	public String signUp(Account account) {
		Optional<Account> res=accountrepo.findById(account.getEmail());
		if(res.isPresent()) {
			return "The User already exist";
		}else {
			if(account.getTypeOfUser().equals("admin")) {
				return "You don't have permission to create a admin account";
			}else {
				accountrepo.save(account);
				return "Account created successfully";
			}
		}
	}
	  public String Login(Account acc) {
		 
		  Optional<Account> result = accountrepo.findById(acc.getEmail());
			if(result.isPresent()) {
						Account ll = result.get();
						if(ll.getPassword().equals(acc.getPassword())) {								
							if(acc.getTypeOfUser().equals(ll.getTypeOfUser())) {
								if(acc.getTypeOfUser().equals("admin")) {
									return "Admin sucessfully login";
								}
								else{
									return "User successfully login";
							}
							}else {
								return "Invalid Credentials! Try Again!";
							}					
						}else {
							return "Invalid Password! Try Again!";
						}
			}else{
				return "Invalid EmailId! Try Again!";
			}		
	  }
	  
	  public Account updatePassword(Account account) {
		  Account ac=accountrepo.findById(account.getEmail()).orElse(null);
		  ac.setPassword(account.getPassword());
		  return accountrepo.saveAndFlush(ac);
	  }
	  public String updateProfile(Account account) {
          Account ac=accountrepo.findById(account.getEmail()).orElse(null);
         
          ac.setMobile(account.getMobile());
		  ac.setName(account.getName());
		  accountrepo.saveAndFlush(ac);
		  return "Account Updated";
	  }
	  
	  public Account viewPro(String email){
			return accountrepo.viewProfile(email);
		}
	  
}
