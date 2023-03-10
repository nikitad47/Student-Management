package com.example.Student.Management.Controller;

import com.example.Student.Management.DTO.StudentDto;
import com.example.Student.Management.Model.ApiResponse;
import com.example.Student.Management.Model.Student;
import com.example.Student.Management.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins="http://localhost:4200")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/createStudent")
    public ResponseEntity<Student> createStudent(@RequestBody Student student){
        Student createStudent=this.studentService.createStudent(student);
        return new ResponseEntity<>(createStudent, HttpStatus.CREATED);
    }
    @GetMapping("/students")
    public ResponseEntity<List<Student>> getALlStudents(){
        List<Student> students=this.studentService.getAllStudents();
        return new ResponseEntity<>(students,HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id){
        Student student=this.studentService.getStudentById(id);
        return new ResponseEntity<>(student,HttpStatus.OK);
    }
    @PutMapping("/updateStudent/{id}")
    public ResponseEntity<Student> UpdateStudent(@RequestBody Student student,@PathVariable int id){
        Student updatestudent=this.studentService.updateStudent(student,id);
        return new ResponseEntity<>(updatestudent,HttpStatus.OK);
    }
    @DeleteMapping("/deleteStudent/{id}")
    public ResponseEntity<ApiResponse> DeleteStudent(@PathVariable int id){
        this.studentService.deleteStudent(id);
        return new ResponseEntity<>(new ApiResponse("Student Deleted Successfully!!",true),HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<StudentDto> registerStudent(@Valid @RequestBody StudentDto studentDto){
        StudentDto registerStudent=this.studentService.RegisterStudent(studentDto);
        return new ResponseEntity<>(registerStudent,HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> loginStudent(@Valid @RequestBody Student student)
    {
        boolean loginStudent = this.studentService.LoginStudent(student);
        return new ResponseEntity<>(loginStudent,HttpStatus.OK);
    }
}
