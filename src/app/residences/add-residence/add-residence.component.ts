import { Residence } from './../../core/models/residence';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
 //myForm : propriété (attribut) de ce composant
 myForm : FormGroup; // l'objet myForm n'est pas encore crée
 //initialisation des proprités d'un composant se fait dans la méthode ngOnInit()
 constructor(private rs:ResidenceService){}
 ngOnInit(){
     this.myForm = new FormGroup({
       name : new FormControl('',Validators.required),
       address : new FormControl('',[Validators.required, Validators.minLength(5)])
     });

 }
 residence : Residence = new Residence();
 get nameR(){
  return this.myForm.get('name');
 }

 get addressR(){
  return this.myForm.get('address');
 }

 addR(){
  this.residence=this.myForm.value;
  this.rs.addResidence(this.residence).subscribe();
 }
}
