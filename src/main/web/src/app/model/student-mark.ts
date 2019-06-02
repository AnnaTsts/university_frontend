import {User, User2} from '@models/user';
import {TeacherSubject} from '@models/teacher-subject';


export interface StudentMark {
  Id: number;

  ApplicationUserId: string;

  Student: User2;

  TeacherSubjectId: number;

  TeacherSubject: TeacherSubject;

  Mark: number;

  NameOfWork?: string;

  DateTime: Date;
}
