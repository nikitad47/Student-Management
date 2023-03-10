import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from './../student-service.service';
import { Student } from './../student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  id?:number;
  student?:Student;
  constructor(private studentservice:StudentServiceService,private route:ActivatedRoute)
  {}

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.student=new Student();
    this.studentservice.getStudentById(this.id!).subscribe(data=>{
      console.log(data);
      this.student=data;
    })
  }

}
