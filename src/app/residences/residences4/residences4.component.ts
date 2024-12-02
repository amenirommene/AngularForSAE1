import { Component } from '@angular/core';
import { Residence } from '../../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences4.component.html',
  styleUrls: ['./residences4.component.css']
})
export class Residences4Component {

  address : string = "";
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Borj Lella","image":"../../assets/images/R3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
   ];
   showAdress: boolean = false;
   id : number = -1;
   getLocation(r:Residence){
    this.showAdress = true;
    this.id=r.id;
    if (r.address == "inconnu"){
      alert ('adresse inconnue')
    }
   /* else{
      alert (r.address)
    }*/
   }
   getColor(status:string) : string{
      switch (status){
        case "Disponible" :  return 'green';
        case "En Construction": return 'orange';
        case "Vendu": return 'red';
      default: return "";
      }
   }
   listResidencesFavoris:Residence[]=[];
   addFavoris(residence: Residence){
      this.listResidencesFavoris.push(residence);
      console.log(this.listResidencesFavoris);
   }
}
