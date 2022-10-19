package com.medicare.test;

import static org.junit.jupiter.api.Assertions.*;



import org.junit.Ignore;
import org.junit.Rule;



import static org.assertj.core.api.Assertions.assertThat;



import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.medicare.bean.Account;
import com.medicare.repository.AccountRepository;




@SpringBootTest
class AccountServiceTest {
    
   
    
    @Autowired
    private AccountRepository accountrepo;
    
    @Test
    @DisplayName("JUnit test for Signup method")
    void testSignUp() {
        Account account=new Account();
        account.setEmail("admin@gmail.com");
        account.setName("Advani");
        account.setMobile((long) 12345);
        account.setPassword("admin123");
        account.setTypeOfUser("Admin");
        accountrepo.save(account);
        assertEquals(account.getEmail(),"admin@gmail.com");
}
    @Test
       @DisplayName("JUnit test for Sign-In")
    void testLogin() {
        Account account =new Account();
        account.setEmail("advani@gmail.com");
        account.setPassword("pswd");
        assertNotNull(accountrepo.findById("advani@gmail.com"));
    }



   
    @Test
    @DisplayName(" Updating Password")
    void testupdatePassword() {
        Account account=new Account();
        account.setPassword("mypassword");
        assertEquals(account.getPassword(),"mypassword");
    }
    
    @Test
       @DisplayName("JUnit test for UpdatingProfile")
    void  testupdateProfile() {
        Account account=new Account();
        account.setEmail("abcd@gmail.com");
        account.setName("XYZ");
        account.setMobile((long) 124);
        account.setPassword("pswd");
        account.setTypeOfUser("User");
        accountrepo.save(account);
        assertEquals(account.getName(),"XYZ");
        
        
    }
    
   
}