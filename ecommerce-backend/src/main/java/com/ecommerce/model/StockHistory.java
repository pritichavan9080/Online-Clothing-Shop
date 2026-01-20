package com.ecommerce.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "stock_history")
public class StockHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 🔗 Many history records belong to one stock
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

    @Column(name = "change_type", length = 20, nullable = false)
    private String changeType; // IN / OUT / ADJUST

    @Column(nullable = false)
    private int quantity;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // ✅ Default constructor (REQUIRED)
    public StockHistory() {
        this.createdAt = LocalDateTime.now();
    }

    // 🔹 Parameterized constructor (optional)
    public StockHistory(Stock stock, String changeType, int quantity) {
        this.stock = stock;
        this.changeType = changeType;
        this.quantity = quantity;
        this.createdAt = LocalDateTime.now();
    }

    // ================= GETTERS & SETTERS =================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public String getChangeType() {
        return changeType;
    }

    public void setChangeType(String changeType) {
        this.changeType = changeType;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}

