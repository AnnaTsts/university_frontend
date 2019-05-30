import {TeacherSubject, User} from './author.model';

export interface StudentMark {
  Id: number;

  ApplicationUserId: string ;

  Student: User ;

  TeacherSubjectId: number ;

  TeacherSubject: TeacherSubject ;

  Mark: number ;

  NameOfWork: string ;

  DateTime: number ;
}
