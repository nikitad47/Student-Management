import { StudentServiceService } from './../student-service.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit{

  id?:number;
  student?:Student=new Student();

  constructor(private studentservice:StudentServiceService,
    private route:ActivatedRoute,
    private router:Router){ }

    ngOnInit():void{
      this.id=this.route.snapshot.params['id'];
      console.log(this.id);

      this.studentservice.getStudentById(this.id!).subscribe(data=>{
        this.student=data;
      },error=>console.log(error));
    }

    onSubmit(){
      this.studentservice.updateStudent(this.id!,this.student).subscribe(data=>{
        this.gotToStudentList();
      },error=>console.log(error));
    }

    gotToStudentList(){
      this.router.navigate(['/students']);
    }

}
