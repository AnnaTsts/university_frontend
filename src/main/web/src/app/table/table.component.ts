import {Component} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  // displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  // data: PeriodicElement[] = ELEMENT_DATA;
  //
  // addColumn() {
  //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  // }
  //
  // removeColumn() {
  //   if (this.columnsToDisplay.length) {
  //     this.columnsToDisplay.pop();
  //   }
  // }
  //
  // shuffle() {
  //   let currentIndex = this.columnsToDisplay.length;
  //   while (0 !== currentIndex) {
  //     const randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //
  //     // Swap
  //     const temp = this.columnsToDisplay[currentIndex];
  //     this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
  //     this.columnsToDisplay[randomIndex] = temp;
  //   }
  // }

  testData = [
    {
      fname: 'Muhammed',
      lname: 'Shanid',
      email: 'shanid@shanid.com'
    },
    {
      fname: 'John',
      lname: 'Abraham',
      email: 'john@john.com'
    },
    {
      fname: 'Roy',
      lname: 'Mathew',
      email: 'roy@roy.com'
    }];

  addNew(newRecord) {
    this.testData.push({
      fname: '',
      lname: '',
      email: '',
    });
  }

//   remove() {
//     var newDataList = [];
//     $scope.selectedAll = false;
//
//     forEach(this.testData, v => {
//       if (!v.selected) {
//         newDataList.push(selected);
//       }
//     })
//
//     $scope.personalDetails = newDataList;
//   }
//
//   $scope
// .
//   checkAll = function () {
//     if (!$scope.selectedAll) {
//       $scope.selectedAll = true;
//     } else {
//       $scope.selectedAll = false;
//     }
//     angular.forEach($scope.personalDetails, function (personalDetail) {
//       personalDetail.selected = $scope.selectedAll;
//     });
//   };

  checkAll() {

  }
}
