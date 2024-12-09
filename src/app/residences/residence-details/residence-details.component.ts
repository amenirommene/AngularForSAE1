import { Residence } from './../../core/models/residence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  id:number;
  next : number;

  constructor(private ac:ActivatedRoute, private rs:ResidenceService){
    console.log("je suis le constructor");
  }
  residence:Residence=new Residence();
 //méthode hook qui fait partie du cycle de vie du composant
  ngOnInit(){
    console.log("je suis le ngOnInit");
   // alert (this.ac.snapshot.params['name']);
   this.ac.paramMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.next = this.id + 1;
    this.rs.getResidencesByIdFromBackend(this.id).subscribe(res=>this.residence=res)
   })
 }
}
