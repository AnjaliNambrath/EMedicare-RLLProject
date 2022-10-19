package com.medicare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.medicare.bean.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Integer>{
	
//	public java.util.List<Medicine> findByCategoryadmin(String category);

	//Medicine findByMedicine(String medname) ;
	@Query(
			value = "SELECT * FROM Medicine u WHERE u.medname = ?",
			nativeQuery = true)
			Medicine findByMedicine(String medname);
	@Query(
			value = "SELECT * FROM Medicine u WHERE u.category = ?",
			nativeQuery = true)
			List<Medicine> findByCategory(String category);

	
}