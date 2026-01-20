
package com.ecommerce.controller;

import com.ecommerce.dto.StockRequest;
import com.ecommerce.model.Product;
import com.ecommerce.model.Stock;
import com.ecommerce.model.StockHistory;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.StockHistoryRepository;
import com.ecommerce.repository.StockRepository;
import com.ecommerce.service.StockService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/stock")
@CrossOrigin(origins = "*")
public class StockController {

    @Autowired
    private StockRepository stockRepo;

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private StockHistoryRepository historyRepo;

    @Autowired
    private StockService stockService;

    // ===========================
    // ➕ ADD STOCK
    // ===========================
    @PostMapping("/add")
    public Stock addStock(@RequestBody StockRequest request) {

        // 1️⃣ Fetch Product
        Product product = productRepo.findById(request.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // 2️⃣ Create Stock
        Stock stock = new Stock();
        stock.setProduct(product);
        stock.setColor(request.getColor());
        stock.setSize(request.getSize());
        stock.setQuantity(request.getQuantity());
        stock.setMinStock(request.getMinStock());

        // 3️⃣ Generate SKU
        String sku = stockService.generateSKU(
                product,
                request.getColor(),
                request.getSize()
        );
        stock.setSku(sku);

        // 4️⃣ Save Stock
        Stock savedStock = stockRepo.save(stock);

        // 5️⃣ Save Stock History
        StockHistory history = new StockHistory();
        history.setStock(savedStock);
        history.setChangeType("IN");
        history.setQuantity(request.getQuantity());
        historyRepo.save(history);

        return savedStock;
    }

    // ===========================
    // 📦 VIEW ALL STOCK
    // ===========================
    @GetMapping
    public List<Stock> getAllStock() {
        return stockRepo.findAll();
    }
}
