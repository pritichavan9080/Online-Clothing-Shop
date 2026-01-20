
package com.ecommerce.Utility;

public class SkuUtil {

    public static String generateSKU(String product, String color, String size) {
        return product.substring(0, 3).toUpperCase() + "-"
             + color.substring(0, 3).toUpperCase() + "-"
             + size.toUpperCase() + "-"
             + System.currentTimeMillis();
    }
}
