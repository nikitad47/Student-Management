import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapOptions } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { LoginStudentComponent } from './login-student/login-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    RegisterStudentComponent,
    LoginStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
