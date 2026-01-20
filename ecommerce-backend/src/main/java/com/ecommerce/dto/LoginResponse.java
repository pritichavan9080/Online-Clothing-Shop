// package com.ecommerce.dto;

// public class LoginResponse {
//     private Long id;   // Added id
//     private String name;
//     private String email;
//     private String role;

//     public LoginResponse(Integer id, String name, String email, String role) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.role = role;
//     }

//     // Getters
//     public Integer getId() {
//         return id;
//     }
//     public String getName() {
//         return name;
//     }
//     public String getEmail() {
//         return email;
//     }
//     public String getRole() {
//         return role;
//     }
// }
package com.ecommerce.dto;

public class LoginResponse {
    private Integer id; // Keep this as Long
    private String name;
    private String email;
    private String role;

    // Constructor should use Long
    public LoginResponse(Integer id, String name, String email, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    // Getters
    public Integer getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getEmail() {
        return email;
    }
    public String getRole() {
        return role;
    }
}
