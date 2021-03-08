import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ClientsComponent } from './clients/clients.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import {AuthGuard} from './auth.guard';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  // all route will be here
  {
    path: 'product/:productId/photos/:photoId',
    component: ProductComponent
  },
  {
    path: 'loans/:id',
    component: LoansComponent
  },
  {
    path: 'loans/add-loan',
    component: AddLoansComponent
  },
  {
    path: 'loan-type',
    component: LoanTypesComponent
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'loan-type',
    pathMatch: "full"
  },
  {
    path: 'search',
    component: SearchComponent
  },
  { path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  },
  {
    path: 'simple-form',
    component: SimpleFormComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: '**',
    component: NotFound404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
