import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './authorization/logIn/form/form.component';
import { AuthorizationGuard } from './core/route-guards/authorization.guard';
import { TableComponent } from './core/table/table.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'table', component: TableComponent, canActivate: [AuthorizationGuard]},
  {path: '', redirectTo: 'form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
