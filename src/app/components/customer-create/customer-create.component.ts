import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  name:string;
  address:string;
  email:string;
  isCompany:boolean = false;
  selectedSource:string = "email";
  dateValue = new FormControl(new Date());
  selectedGender:string;

  constructor() { }

  ngOnInit(): void {
  }

  createCustomer()
  {
    console.log("Created !");
    console.log(this.dateValue.value);


  }

}
