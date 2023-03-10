package com.example.Student.Management.Service.Impl;

import com.example.Student.Management.DTO.StudentDto;
import com.example.Student.Management.Exception.ResourceNotFoundException;
import com.example.Student.Management.Model.Student;
import com.example.Student.Management.Repository.StudentRepository;
import com.example.Student.Management.Service.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Student createStudent(Student student) {
        Student student1=this.studentRepo.save(student);
        return student1;
    }

    @Override
    public List<Student> getAllStudents() {
        return this.studentRepo.findAll();
    }

    @Override
    public Student getStudentById(int id) {
        Student student=this.studentRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Student","StudentId",id));
        return student;
    }

    @Override
    public Student updateStudent(Student student, int id) {
        Student student1=this.studentRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Student","StudentId",id));
        if(student.getName()!=null)
            student1.setName(student.getName());
        if(student.getEmail()!=null)
            student1.setEmail(student.getEmail());
        if(student.getPassword()!=null)
            student1.setPassword(student.getPassword());
        if(student.getPhoneNumber()!=null)
            student1.setPhoneNumber(student.getPhoneNumber());
        if(student.getAge()!=0)
            student1.setAge(student.getAge());
        if(student.getGender()!=null)
            student1.setGender(student.getGender());
        if(student.getDate()!=null)
            student1.setDate(student.getDate());
        return this.studentRepo.save(student1);
    }

    @Override
    public void deleteStudent(int id) {
        Student student=this.studentRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Student","StudentId",id));
        this.studentRepo.delete(student);
    }

//    private Student dtoToStudent(StudentDto studentDto)
//    {
//        Student student=this.modelMapper.map(studentDto,Student.class);
//        return student;
//    }

    @Override
    public boolean LoginStudent(Student student){
        String email = student.getEmail();
        String password = student.getPassword();
        String getPass = studentRepo.validateLogin(email);
        return password.equals(getPass);
    }

    @Override
    public StudentDto RegisterStudent(StudentDto studentDto) {
        Student student=this.modelMapper.map(studentDto,Student.class);
        boolean isemail=false;
        boolean ispassword=false;
        if(student.getEmail()!=null){
            String regex = "^(.+)@(.+)$";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(student.getEmail());
            if(matcher.matches()){
                isemail=true;
            }
        }
        String password=student.getPassword();
        if(password!=null){
            if(password.length()<8)
                ispassword=false;
            int numcount=0;
            int charcount=0;
            for(int i=0;i<password.length();i++){
                char ch=password.charAt(i);
                if ((ch >= '0' && ch <= '9'))
                    numcount++;
                else if ((ch >= 'A' && ch <= 'Z') || (ch>='a' && ch<='z'))
                    charcount++;
            }
            if(numcount>=2 && charcount>=2){
                ispassword=true;
            }
        }

        if(isemail && ispassword){
            Student student1=this.studentRepo.save(student);
            return this.modelMapper.map(student1, StudentDto.class);
        }
        else if(!isemail){
            throw new ResourceNotFoundException("Email");
        }
        else {
            throw new ResourceNotFoundException("Password");
        }

    }
}
