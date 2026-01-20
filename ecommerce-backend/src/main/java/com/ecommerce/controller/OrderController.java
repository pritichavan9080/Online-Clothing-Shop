
package com.ecommerce.controller;

import com.ecommerce.model.Order;
import com.ecommerce.repository.OrderRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // =========================
    // PLACE ORDER
    // =========================
    @PostMapping
    public ResponseEntity<?> placeOrder(@RequestBody Order order) {

        if (order.getItems() == null || order.getItems().isEmpty()) {
            return ResponseEntity.badRequest().body("Order items cannot be empty");
        }

        order.setOrderDate(LocalDateTime.now());

        orderRepository.save(order); // saves order + items

        return ResponseEntity.ok("Order placed successfully");
    }

    // =========================
    // GET ALL ORDERS
    // =========================
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderRepository.findAllWithItems(); // fetch items eagerly
        return ResponseEntity.ok(orders);
    }

    // =========================
    // GET ORDER BY ID
    // =========================
    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable Long id) {
        Order order = orderRepository.findByIdWithItems(id);
        if (order == null) {
            return ResponseEntity.badRequest().body("Order not found");
        }
        return ResponseEntity.ok(order);
    }
//   
    @GetMapping("/by-email")
    public ResponseEntity<List<Order>> getOrdersByEmail(@RequestHeader("X-User-Email") String email) {
        List<Order> orders = orderRepository.findByEmailWithItems(email);
        return ResponseEntity.ok(orders);
    }
}




   
 
