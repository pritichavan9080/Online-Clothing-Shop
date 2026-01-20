
package com.ecommerce.controller;

import com.ecommerce.model.Category;
import com.ecommerce.model.Product;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    // ================= ADD PRODUCT =================
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addProduct(
            @RequestParam String name,
            @RequestParam String description,
            @RequestParam Double price,
            @RequestParam String size,
            @RequestParam Integer stock,
            @RequestParam Long categoryId,
            @RequestParam MultipartFile image
    ) throws IOException {

        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Create upload directory if not exists
        Path uploadPath = Paths.get("uploads");
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Save image
        String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
        Path imagePath = uploadPath.resolve(fileName);
        Files.write(imagePath, image.getBytes());

        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setStock(stock);
        product.setSize(size); 
        product.setImagePath(fileName);
        product.setCategory(category);
        product.setStatus("ACTIVE");
        product.setCreatedAt(LocalDateTime.now());
        product.setDiscountPrice(null);

        productRepository.save(product);

        return ResponseEntity.ok("Product added successfuzlly");
    }

    // ================= GET ALL PRODUCTS =================
    @GetMapping("/users")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // ================= GET PRODUCT BY ID =================
    @GetMapping("/id/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }
}
