import {Specialization} from '@models/specialization';
import {User, User2} from '@models/user';
import {Faculty} from '@models/faculty';


export interface Group {
  Id: number ;

  Name: string ;

  SpecializationId: number ;

  Specialization: Specialization ;

  Students: User2[] ;

  FacultyId: number ;

  Faculty: Faculty ;
}
