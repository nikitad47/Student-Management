import { Router } from '@angular/router';
import { StudentServiceService } from './../student-service.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit{

  constructor(private studentservice:StudentServiceService,private router:Router){}

  student:Student=new Student();

  errors:any={
    name:"",
    email:"",
    password:"",
    PhoneNumber:"",
    age:"",
    date:"",
    gender:"",
  }

  ngOnInit(): void{

  }

  registerStudent(){
    this.studentservice.registerStudent(this.student).subscribe(data=>{
      console.log(data)
      this.goToLogin();
    },
    err => {
      this.errors=err.error;
      console.log(this.errors);
    },
    );
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    this.registerStudent();
    console.log(this.student);
  }

}
