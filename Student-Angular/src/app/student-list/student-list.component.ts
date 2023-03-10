import { Router } from '@angular/router';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{

  students?:Student[];


  constructor(private studentservice:StudentServiceService,private router:Router){
  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentservice.getStudentList().subscribe(data=>{
      this.students=data;
      console.log(data);
    });
  }

  studentDetails(id:number){
    this.router.navigate(['student-details',id]);
  }

  updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }

  addStudent(){
    this.router.navigate(['create-student']);
  }

  deleteStudent(id:number){
    this.studentservice.deleteStudent(id).subscribe(data=>{
      console.log(data);
      this.getStudents();
    })
  }

}
