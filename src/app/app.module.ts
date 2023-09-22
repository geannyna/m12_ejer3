import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateCustomerComponent } from './create-customer/create-customer.component'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// hay que quitar todo lo que hay en app.component.html