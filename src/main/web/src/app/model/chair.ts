
import {Faculty} from './faculty';



export interface Chair {
  Id: number;

  Name: string;

  FacultyId: number ;

  Faculty: Faculty ;
}
