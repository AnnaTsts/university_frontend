import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TableSettings} from '@models/table-settings.model';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @Input() records: any;
  @Input() tableName: string;
  @Input() editable: boolean;
  @Input() deleting: boolean;
  @Input() url: string;
  @Input() settings: TableSettings[];

  @Output() infoEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  propertyNames = [];

  /* names of for-loop columns + manually added static columns if editable*/
  columnsToDisplay = [];
  dataSource = new MatTableDataSource([]);

  /* I simply don`t know how to pass data to modal window so i wrote it to local variable*/
  record;

  flagOfDeletingButtons = false;

  constructor() {
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.records);
    this.propertyNames = this.settings.map(x => x.propertyName);

    this.columnsToDisplay = this.propertyNames;

    if (this.editable) {
      this.columnsToDisplay = this.propertyNames.concat('edit');
      if (this.deleting === true) {
        this.flagOfDeletingButtons = true;
      }
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getProperty(columnName: string) {
    return this.settings.find(x => x.propertyName === columnName);
  }

  public info(id: number) {
    this.infoEvent.emit(id);
  }

  public delete() {
    this.deleteEvent.emit(this.record);
    this.dataSource = new MatTableDataSource(this.records);
  }
}
