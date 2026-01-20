
package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.model.StockHistory;

@Repository
public interface StockHistoryRepository
        extends JpaRepository<StockHistory, Long> {
}

