import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from 'src/app/core/service/order/orders.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  // take paginator & sort DOM refrence
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // table colum list & store data
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'phoneNumber',
    'email',
    'addressLine1',
    'addressLine2',
    'zipcode',
    'experience',
    'type',
    'time',
    'date'
  ];
  orders: MatTableDataSource<any>;

  constructor(private order: OrdersService) {}

  ngOnInit(): void {}

  // call after every paginator or sort call
  ngAfterViewInit() {

    // get orders from server
    this.order.getOrder().subscribe((data) => {
      this.orders = new MatTableDataSource(
        data.map((e) => {
          const data = e.payload.doc.data();
          return data;
        })
      );

      // sore and paginator
      this.orders.paginator = this.paginator;
      this.orders.sort = this.sort;
    });

  }

  // sort data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.orders.filter = filterValue.trim().toLowerCase();
  }
	
}
