import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Residences4Component } from './residences/residences4/residences4.component';
import { Residence } from './core/models/residence';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:"test", pathMatch:'full'},
  {path:"test/:id/:name", component:TestComponent},
  {path:"add", component:FormAppartmentComponent},

  {path:"residence", component:Residences4Component},

  {path:"**", component:NotFoundComponent}   // ** : toujours à la dernière position

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
