package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {

    // 🔍 Find by SKU
    Stock findBySku(String sku);

    // ⚠ Low stock alert
    java.util.List<Stock> findByQuantityLessThan(int quantity);

}
