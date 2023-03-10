import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private url='http://localhost:8080/student/';

  constructor(private http:HttpClient) { }

  registerStudent(student:object):Observable<any>{
    return this.http.post(`${this.url}`+'register',student);
  }

  loginStudent(student:object):Observable<any>{
    return this.http.post(`${this.url}`+'login',student);
  }

  getStudentList():Observable<any>{
    return this.http.get(`${this.url}`+'students');
  }

  createStudent(student:object):Observable<object>{
    return this.http.post(`${this.url}`+'createStudent',student);
  }

  deleteStudent(id:number):Observable<any>{
    return this.http.delete(`${this.url}deleteStudent/${id}`,{responseType:'text'});
  }

  getStudentById(id:number):Observable<Object>{
    return this.http.get(`${this.url}${id}`);
  }

  updateStudent(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.url}updateStudent/${id}`,value);
  }
}
