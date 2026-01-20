
package com.ecommerce.service;

import com.ecommerce.model.Product;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    public String generateSKU(Product product, String color, String size) {
        return product.getName().substring(0, 3).toUpperCase()
                + "-" + color.toUpperCase()
                + "-" + size.toUpperCase()
                + "-" + System.currentTimeMillis();
    }
}
