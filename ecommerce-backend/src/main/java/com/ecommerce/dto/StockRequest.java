package com.ecommerce.dto;

public class StockRequest {

    private Long productId;
    private String size;
    private String color;
    private int quantity;
    private int minStock;

    // ✅ Default constructor (required)
    public StockRequest() {
    }

    // ✅ Parameterized constructor (optional)
    public StockRequest(Long productId, String size, String color, int quantity, int minStock) {
        this.productId = productId;
        this.size = size;
        this.color = color;
        this.quantity = quantity;
        this.minStock = minStock;
    }

    // ================= GETTERS & SETTERS =================

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getMinStock() {
        return minStock;
    }

    public void setMinStock(int minStock) {
        this.minStock = minStock;
    }
}
