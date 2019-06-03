import {Group} from '@models/group';
import {Subject} from '@models/subject';
import {User, User2} from '@models/user';

export interface TeacherSubject {
  Id: number;

  TeacherId: string;

  SubjectId: number;

  GroupId: number;

  Semester: number;

  Teacher?: User2;

  Group?: Group;

  Subject: Subject;
}

export interface TeacherSubject2 {
  Id: number;

  TeacherId: string;

  SubjectId: number;

  GroupId: number;

  Subject: Subject;
}
