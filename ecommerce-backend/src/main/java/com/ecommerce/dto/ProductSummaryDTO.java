
package com.ecommerce.dto;

public class ProductSummaryDTO {
    private String description;
    private double price;
    private String imagePath;

    public ProductSummaryDTO(String description, double price, String imagePath) {
        this.description = description;
        this.price = price;
        this.imagePath = imagePath;
    }

    // Getters & Setters
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public String getImagePath() { return imagePath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }
}
