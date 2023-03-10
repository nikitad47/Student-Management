package com.example.Student.Management.Repository;

import com.example.Student.Management.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
    boolean existsByEmailAndPassword(String email, String password);

    @Query(nativeQuery = true,value = "Select password from student where email=?1")
    String validateLogin(String email);

}
