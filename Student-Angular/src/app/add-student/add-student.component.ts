import { StudentServiceService } from './../student-service.service';
import { Component,OnInit } from '@angular/core';
import { Student } from '../student';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit{

  constructor(private studentservice:StudentServiceService,private router:Router){}
  student:Student=new Student();

  ngOnInit(): void{
  }

  saveStudent(){
    this.studentservice.createStudent(this.student).
    subscribe(data=>{
      console.log(data);
      this.goToStudentList();
    },
    error=>console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}
