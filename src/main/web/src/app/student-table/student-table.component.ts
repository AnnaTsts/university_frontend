import {Component, OnInit} from '@angular/core';
import {StudentMark} from '@models/student-mark';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

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
      Mark: 99,
      NameOfWork: 'Kursach',
      DateTime: 123456789,
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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

  }
}
