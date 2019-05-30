
export interface TeacherSubject {
  Id: number ;

  TeacherId: string ;

  SubjectId: number ;

  GroupId: number ;

  StartTime: number ;

  EndTime: number ;

  Teacher: User;

  Group: Group ;

  Subject: Subject;
}
