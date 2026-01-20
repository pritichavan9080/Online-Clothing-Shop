
package com.ecommerce.controller;

import com.ecommerce.dto.CategoryDTO;
import com.ecommerce.model.Category;
import com.ecommerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    // Test endpoint
    @GetMapping("/test")
    public String test() {
        return "API WORKING";
    }

    // Get all categories as DTO
    @GetMapping
    public List<CategoryDTO> getAllCategories() {
        return categoryRepository.findAll().stream()
                .map(c -> new CategoryDTO(
                        c.getId(),
                        c.getName(),
                        c.getImage(),
                        c.getParent() != null ? c.getParent().getId() : null
                ))
                .collect(Collectors.toList());
    }

    // One-time seed categories
    @PostMapping("/seed")
    public String seedCategories() {

        List<String> names = List.of(
            "KURTAS & KURTIS",
            "DRESSES",
            "ETHNIC SETS WITH DUPATTA",
            "ETHNIC SETS",
            "CO-ORDS",
            "STOLES"
        );

        for (String name : names) {
            if (!categoryRepository.existsByName(name)) {
                Category c = new Category();
                c.setName(name);
                c.setParent(null); // root category
                categoryRepository.save(c);
            }
        }
        return "Categories added successfully";
    }
}
