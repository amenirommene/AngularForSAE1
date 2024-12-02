import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  id:number;
  next : number;
  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }

 //méthode hook qui fait partie du cycle de vie du composant
  ngOnInit(){
    console.log("je suis le ngOnInit");
   // alert (this.ac.snapshot.params['name']);
   this.ac.paramMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.next = this.id + 1;
   })
 }
}
