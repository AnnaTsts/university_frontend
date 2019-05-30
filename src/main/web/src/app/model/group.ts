import {Faculty, Specialization, User} from './author.model';

export interface Group {
  Id: number ;

  Name: string ;

  SpecializationId: number ;

  Specialization: Specialization ;

  Students: User[] ;

  FacultyId: number ;

  Faculty: Faculty ;
}
