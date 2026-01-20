
package com.ecommerce.repository;

import com.ecommerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    // Fetch orders along with their items to avoid LazyInitializationException
    @Query("SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.items")
    List<Order> findAllWithItems();

    @Query("SELECT o FROM Order o LEFT JOIN FETCH o.items WHERE o.id = :id")
    Order findByIdWithItems(Long id);


// 🔥 USER: Fetch ONLY logged-in user's orders (My Orders page)
    @Query("SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.items " +
           "WHERE LOWER(o.email) = LOWER(:email) " +
           "ORDER BY o.orderDate DESC")
    List<Order> findByEmailWithItems(@Param("email") String email);
}