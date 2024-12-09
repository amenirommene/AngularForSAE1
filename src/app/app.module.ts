import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Residences4Component } from './residences/residences4/residences4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ //la liste des composants
    AppComponent,
     TestComponent,
      Residences4Component,
      NotFoundComponent,
      FormAppartmentComponent,
      HeaderComponent,
      HomeComponent,
      FooterComponent,
      ResidenceDetailsComponent,
      AddResidenceComponent,
      AddApartmentComponent,
      ApartmentsComponent,
      ApartmentsByResidenceComponent
  ],
  imports: [ //la liste des modules internes (App) ou externes (node_modules)
    BrowserModule, //sous node_modules
    AppRoutingModule, //sous le App
    FormsModule, // utile pour ngModel
    ReactiveFormsModule, //utile pour travailler avec ReactiveForm
    HttpClientModule
  ],
  providers: [], //les services utiles
  bootstrap: [AppComponent] //le(s) composants à appeler dans le fichier index.html
})
export class AppModule { }
