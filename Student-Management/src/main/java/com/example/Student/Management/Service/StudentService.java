package com.example.Student.Management.Service;

import com.example.Student.Management.DTO.StudentDto;
import com.example.Student.Management.Model.Student;

import java.util.List;

public interface StudentService {
    Student createStudent(Student student);
    List<Student> getAllStudents();
    Student getStudentById(int id);
    Student updateStudent(Student student,int id);
    void deleteStudent(int id);
    StudentDto RegisterStudent(StudentDto student);

    boolean LoginStudent(Student student);
}
