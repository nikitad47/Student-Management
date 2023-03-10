package com.example.Student.Management.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse {
    private static final long serialVersionUID = 1L;

    String message;
    boolean success;
}
