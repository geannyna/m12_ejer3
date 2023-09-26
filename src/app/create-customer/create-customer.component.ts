import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit{
  customerForm :FormGroup = new FormGroup({});
  customerInfo: any = null;
  

  constructor() {}

  ngOnInit(): void{
    this.customerForm=new FormGroup ({
      name  :new FormControl(''),
      cif   :new FormControl(''),
      city : new FormControl(''),
      })
  }
  showCustomer() {
    console.log(this.customerForm.value);
    this.customerInfo = this.customerForm.value;
      // Limpia el formulario
  this.customerForm.reset();
  }
}

// hay que quitar todo lo que hay en app.component.html

