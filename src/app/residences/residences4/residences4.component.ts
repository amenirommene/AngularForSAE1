import { ResidenceService } from './../../core/services/residence.service';
import { Component } from '@angular/core';
import { Residence } from '../../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences4.component.html',
  styleUrls: ['./residences4.component.css'],
})
export class Residences4Component {

  constructor(private rs:ResidenceService){}
  address : string = "";
  listResidences:Residence[]=[];
   showAdress: boolean = false;
   id : number = -1;
  ngOnInit(){  //méthode hook
     this.rs.getAllResidencesFromBackend().subscribe(
      (res:Residence[])=>this.listResidences=res)
  }
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
