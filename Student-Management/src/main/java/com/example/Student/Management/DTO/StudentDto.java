package com.example.Student.Management.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.util.Date;

@Data
@JsonIgnoreProperties
public class StudentDto {
    private int id;
    @NotBlank(message = "username must not be empty!")
    @Size(min=3,message="Name must be minimum of 4 character!")
    private String name;
    @NotBlank(message = "email must not be empty!!")
    @Email(message = "Please enter a valid e-mail address")
    private String email;
    @NotBlank(message = "Password must not be empty!")
    @Size(min=8,message = "password must be minimum of 8 characters")
    private String password;
    @NotNull(message = "Phone number must not be empty!")
    @Min(value = 1000000000,message = "Phone Number should have atleast 10 digits")
    @Max(value = 9999999999L,message = "PhoneNumber should contain 10 digits")
    private Long PhoneNumber;
    @NotNull(message = "age must not be empty")
    @Min(value = 1,message = "Age should be minimum of 1 integer")
    private int age;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    @NotNull(message = "Date must not be empty")
    private Date date;
    @Size(min=4,max=6,message = "Enter the valid data for gender")
    @NotNull(message = "Gender should not be empty!")
    private String gender;
}
