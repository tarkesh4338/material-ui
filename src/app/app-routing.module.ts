import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
