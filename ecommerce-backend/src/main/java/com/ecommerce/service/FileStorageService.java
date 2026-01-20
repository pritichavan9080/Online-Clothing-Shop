

package com.ecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;



import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@Service
public class FileStorageService {

    private final Path uploadDir = Paths.get("src/main/resources/static/uploads");

    public String saveFile(MultipartFile file) throws IOException {

        // Create directory if not exists
        Files.createDirectories(uploadDir);

        // Keep original extension
        String originalFilename = file.getOriginalFilename();

        // Generate unique filename WITH extension
        String fileName = UUID.randomUUID() + "_" + originalFilename;

        // Save file
        Path filePath = uploadDir.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // ✅ Return filename only (stored in DB)
        return fileName;
    }
}
