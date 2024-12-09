import { Residence } from './../models/residence';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ //décorateur pour dire que c'est un service
  providedIn: 'root'  //une seule instance pour tous
})
export class ResidenceService {

  constructor(private http:HttpClient) { }

  getAllResidences() : Residence[]{
    return [
      {"id":1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg", "status": "Disponible"},
      {"id":2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", "status": "Disponible" },
      {"id":3,"name": "El Arij", "address":"Borj Lella","image":"../../assets/images/R3.jpg", "status": "Vendu"},
      {"id":4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", "status": "En Construction"}
    ]
  }

  getAllResidencesFromBackend() : Observable<Residence[]>{
   return this.http.get<Residence[]>("http://localhost:3000/residences");
  }

  getResidencesByIdFromBackend(id:number) : Observable<Residence>{
    return this.http.get<Residence>("http://localhost:3000/residences/"+id);
   }

   addResidence(r:Residence):Observable<Residence>{
    return this.http.post<Residence>("http://localhost:3000/residences",r)
   }
}
