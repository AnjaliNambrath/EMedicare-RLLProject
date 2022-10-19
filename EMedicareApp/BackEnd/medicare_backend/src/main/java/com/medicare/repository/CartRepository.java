package com.medicare.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.medicare.bean.Addtocart;

@Repository
public interface CartRepository extends JpaRepository<Addtocart, Integer>{

	@Query("select q from Addtocart q where q.medid = :medid and q.email = :email")
	public Optional<Addtocart> deleteItem(@Param("medid") Integer medid,@Param("email") String email);
	
	@Query("select q from Addtocart q where q.email = :email")
	public List<Addtocart> orderSummary(@Param("email") String email);
	
	@Query("select q from Addtocart q where q.email = :email")
	public List<Addtocart> deleteCartAfterPayment(@Param("email") String email);
	
	@Query("select SUM(q.price) from Addtocart q where q.email = :email")
	public String billAmount(@Param("email") String email);
	
}
