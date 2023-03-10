import { TestBed } from '@angular/core/testing';

import { StudentServiceService } from './student-service.service';
// import { HttpClient } from '@angular/common/http';
import {Student} from './student';

fdescribe('StudentServiceService', () => {
  let service: StudentServiceService;
  // let httpClient:HttpClient;
  const student:Student={
    "id":1,
    "name":"Nikki",
    "email":"nikki@gmail.com",
    "phoneNumber":7017267889,
    "age":21
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServiceService);

  });

  it('should be created', () => {
      service.getStudentById(1).subscribe(res => {
        expect(res).toEqual(student);
       });

  });
});
