package com.medicare.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;



import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;



import com.medicare.bean.Addtocart;
import com.medicare.repository.AccountRepository;
import com.medicare.repository.CartRepository;
import com.medicare.service.AccountService;
import com.medicare.service.CartService;



@SpringBootTest
class CartServiceTest {
    @Autowired
    CartService cartservice;
    
    @Autowired
    CartRepository cartrepo;
    
    
    @Test
    @DisplayName("Junit testing for adding the cart")
    void testAddCart() {
        Addtocart cart=new Addtocart();
        cart.setCartid(102);
        cart.setEmail("abc@gmail.com");
        cart.setMedid(101);
        cart.setMedname("Paracetamol");
        cart.setPrice(432);
        assertEquals(cart.getMedid(),101);
        }
   
    
    @Test
    @DisplayName("Junit testing to delete the item")
    void testDeleteItem() {
        Addtocart cart=new Addtocart();
        
        cart.setEmail("xyz@gmail.com");
        cart.setMedid(102);
        cart.setPrice(778);
        assertFalse(cartrepo.existsById(cart.getMedid()));
    }
    
    @Test
    @DisplayName("Junit testing to delete the Cart")
    void testDeleteCart() {
        Addtocart cart=new Addtocart();
        cart.setCartid(104);
        assertFalse(cartrepo.existsById(cart.getCartid()));
    }
    @Test
    @DisplayName("Junit testing to view Order summary")
    void testOrderSummary() {
        Addtocart cart=new Addtocart();
        cart.setCartid(102);
        cart.setEmail("abc@gmail.com");
        cart.setMedid(111);
        cart.setMedname("Dolo");
        cart.setPrice(234);
        assertEquals(cart.getEmail(),"abc@gmail.com");
    }
    
    @Test
    @DisplayName("Junit testing to view TotalBill")
    void testTotalBill() {
        Addtocart cart=new Addtocart();
        cart.setCartid(101);
        cart.setEmail("gmail.com");
        cart.setPrice(204);
        assertNotNull(cartrepo.findById(101));
    }
}