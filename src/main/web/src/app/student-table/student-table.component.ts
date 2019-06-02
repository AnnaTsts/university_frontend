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
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
    {
      Id: 1,
      ApplicationUserId: 'id  -_-',
      Student: {
        Id: '99',
        UserName: 'student',
        Email: 'email',
        Password: 'password',
        Chair: null,
        ChairId: 456,
        GroupId: 2
      },
      TeacherSubjectId: 228,
      TeacherSubject: {
        Id: 777,
        TeacherId: '999',
        SubjectId: 666,
        GroupId: 333,
        Semester: 6,
        Teacher: {
          Id: '98',
          UserName: 'student',
          Email: 'email',
          Password: 'password',
          Chair: null,
          ChairId: 456,
          GroupId: 2
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
      NameOfWork: ' KursachKursachKu',
      DateTime: new Date(),
    },
  ];

  ngOnInit() {

  }
}
