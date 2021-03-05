import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  firstName: string = '';
  terms: boolean = false;
  customerType: string = '';
  description = '';

  constructor() { }

  ngOnInit(): void {
  }

  addCustomer(formValue: NgForm){
    console.log(formValue.value);
  }

  resetForm(formValue: NgForm){
    //formValue.reset();
    formValue.resetForm();
  }

  loadValues(formValue: NgForm){
    console.log('loadValues call');
    let userDetails = {
      firstName: 'Loaded firstName',
      terms: true,
      customerType: '1',
      description: 'SOME description'
    }
    formValue.setValue(userDetails);
  }

}
