import {User} from '@models/user';
import {TeacherSubject} from '@models/teacher-subject';


export interface StudentMark {
  Id: number;

  ApplicationUserId: string;

  Student: User;

  TeacherSubjectId: number;

  TeacherSubject: TeacherSubject;

  Mark: number;

  NameOfWork: string;

  DateTime: number;
}
