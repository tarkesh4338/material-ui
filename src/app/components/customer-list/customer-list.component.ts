import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  loading: boolean = true;
  customers: Customer[] = [
    { id: 1, name: 'Customer 001', job: 'Programmer' },
    { id: 2, name: 'Customer 002', job: 'Mechanic' },
    { id: 3, name: 'Customer 003', job: 'Carpenter' },
    { id: 4, name: 'Customer 004', job: 'Developer' },
    { id: 5, name: 'Customer 005', job: 'Singer' },
    { id: 6, name: 'Customer 006', job: 'Programmer' },
    { id: 7, name: 'Customer 007', job: 'Mechanic' },
    { id: 8, name: 'Customer 008', job: 'Carpenter' },
    { id: 9, name: 'Customer 009', job: 'Developer' },
    { id: 10, name: 'Customer 0010', job: 'Singer' },
    { id: 1, name: 'Customer 001', job: 'Programmer' },
    { id: 2, name: 'Customer 002', job: 'Mechanic' },
    { id: 3, name: 'Customer 003', job: 'Carpenter' },
    { id: 4, name: 'Customer 004', job: 'Developer' },
    { id: 5, name: 'Customer 005', job: 'Singer' },
    { id: 6, name: 'Customer 006', job: 'Programmer' },
    { id: 7, name: 'Customer 007', job: 'Mechanic' },
    { id: 8, name: 'Customer 008', job: 'Carpenter' },
    { id: 9, name: 'Customer 009', job: 'Developer' },
    { id: 10, name: 'Customer 0010', job: 'Singer' }
  ];

  displayedColumns:string[] = ['id', 'name', 'job', 'actions'];

  dataSource = new MatTableDataSource<Customer>(this.customers);

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  deleteCustomer(id)
  {
    this.snackBar.open(`Deleting Customer #${id}`, 'Undo', {
      duration:3000
    });
  }
  editCustomer(id)
  {
    this.snackBar.open(`Editing Customer #${id}`, 'Undo', {
      duration:3000
    });

  }
}
