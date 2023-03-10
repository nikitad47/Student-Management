import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from './../student-service.service';
import { Student } from '../student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss']
})
export class LoginStudentComponent {

  constructor(private studentservice:StudentServiceService,private router:Router){}

  student:Student=new Student();

  errors:any={
    email:"",
    password:""
  }

  ngOnInit(): void{

  }

  loginStudent(){
    this.studentservice.loginStudent(this.student).subscribe(data=>{
      console.log(data)
      if(data)
      {
        this.goToStudent();
      }
      else{
        Swal.fire("Invalid Credentials");
      }
    },
    err => {
      this.errors=err.error;
      console.log(this.errors);
    },
    );
  }

  goToStudent(){
    this.router.navigate(['/students']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  onSubmit(){
    this.loginStudent();
    console.log(this.student);
  }

}
