package com.medicare.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.medicare.bean.Account;
import com.medicare.bean.Addtocart;



@Repository
public interface AccountRepository extends JpaRepository<Account,String> {
      boolean existsByEmailAndPassword(String email,String Password);
      
      @Query("select q from Account q where q.email = :email")
  	public Account viewProfile(@Param("email") String email);
      
}




