import {Group} from '@models/group';
import {Subject} from '@models/subject';
import {User} from '@models/user';

export interface TeacherSubject {
  Id: number;

  TeacherId: string;

  SubjectId: number;

  GroupId: number;

  Semester: number;

  Teacher: User;

  Group: Group;

  Subject: Subject;
}
