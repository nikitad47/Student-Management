import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"students",component:StudentListComponent},
  {path:"create-student",component:AddStudentComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'register',component:RegisterStudentComponent},
  {path:'login',component:LoginStudentComponent},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'student-details/:id',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
