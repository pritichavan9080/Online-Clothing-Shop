// // package com.ecommerce;

// // import org.springframework.boot.SpringApplication;
// // import org.springframework.boot.autoconfigure.SpringBootApplication;

// // @SpringBootApplication
// // public class EcommerceBackendApplication {

// // 	public static void main(String[] args) {
// // 		SpringApplication.run(EcommerceBackendApplication.class, args);
// // 	}

// // }

// package com.ecommerce;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
// import org.springframework.boot.autoconfigure.domain.EntityScan;

// @SpringBootApplication
// @EnableJpaRepositories(basePackages = "com.ecommerce.repository")
// @EntityScan(basePackages = "com.ecommerce.model")
// public class EcommerceBackendApplication {

//     public static void main(String[] args) {
//         SpringApplication.run(EcommerceBackendApplication.class, args);
//     }
// }
// package com.ecommerce;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.annotation.ComponentScan;
// import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
// import org.springframework.boot.autoconfigure.domain.EntityScan;

// @SpringBootApplication
// @ComponentScan(basePackages = "com.ecommerce")   // ✅ THIS LINE FIXES EVERYTHING
// @EnableJpaRepositories(basePackages = "com.ecommerce.repository")
// @EntityScan(basePackages = "com.ecommerce.model")
// public class EcommerceBackendApplication {

//     public static void main(String[] args) {
//         SpringApplication.run(EcommerceBackendApplication.class, args);
//     }
// }
package com.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class EcommerceBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommerceBackendApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*");
            }
        };
    }
}
