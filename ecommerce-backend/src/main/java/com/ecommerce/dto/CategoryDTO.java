package com.ecommerce.dto;

public class CategoryDTO {

    private Long id;
    private String name;
    private String image;
    private Long parentId;

    public CategoryDTO(Long id, String name, String image, Long parentId) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.parentId = parentId;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public Long getParentId() { return parentId; }
    public void setParentId(Long parentId) { this.parentId = parentId; }
}
