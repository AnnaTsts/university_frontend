import {Component, OnInit} from '@angular/core';
import {StudentMark} from '@models/student-mark';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  constructor() {
  }

  studentMarks: StudentMark[] = [
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        id: 99,
        authority: 'Student',
        authorityId: 2,
        email: 'email',
        password: 'password',
        username: 'student'
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          id: 88,
          authority: 'Teacher',
          authorityId: 1,
          email: 'email',
          password: 'password',
          username: 'teacher'
        },
        Group: {
          Id: 333,
          Name: 'group',
          SpecializationId: 123,
          Specialization: null,
          Students: null,
          FacultyId: 456,
          Faculty: null
        },
        Subject: null,
      },
      Mark: 77,
      NameOfWork: 'Kursach',
      DateTime: 123456789,
    }
  ];

  ngOnInit() {
    // for (let item of this.studentMark) {
    //   for (let i = 1; i < 30; i++) {
    //     item.marks.push(100);
    //   }
    // }
  }

  addNew() {
  }

  remove() {
  }

  checkAll() {
  }

}
