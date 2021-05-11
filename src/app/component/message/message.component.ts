import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../../core/service/query/message.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {

  // take paginator & sort DOM refrence
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // table colum list & store data
  displayedColumns: string[] = [
    'name', 
    'email', 
    'subject', 
    'message', 
    'date'
  ];
  quires: MatTableDataSource<any>;

  constructor(private query: MessageService) {}

  ngOnInit(): void {}

  // call after every paginator or sort call
  ngAfterViewInit() {

    // get quires from server
    this.query.getQuery().subscribe((data) => {
      this.quires = new MatTableDataSource(
        data.map((e) => {
          const data = e.payload.doc.data();
          return data;
        })
      );

      // sore and paginator
      this.quires.paginator = this.paginator;
      this.quires.sort = this.sort;
    });

  }

  // sort data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.quires.filter = filterValue.trim().toLowerCase();
  }

}
