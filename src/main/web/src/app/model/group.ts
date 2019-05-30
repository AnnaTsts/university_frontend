import {Specialization} from "@models/specialization";
import {User} from "@models/user";
import {Faculty} from "@models/faculty";


export interface Group {
  Id: number ;

  Name: string ;

  SpecializationId: number ;

  Specialization: Specialization ;

  Students: User[] ;

  FacultyId: number ;

  Faculty: Faculty ;
}
