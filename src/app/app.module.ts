import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './dialogs/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
