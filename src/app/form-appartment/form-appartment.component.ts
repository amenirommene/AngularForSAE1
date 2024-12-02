import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent {

  //myForm : propriété (attribut) de ce composant
  myForm : FormGroup; // l'objet myForm n'est pas encore crée
  myForm1 : FormGroup;
  //initialisation des proprités d'un composant se fait dans la méthode ngOnInit()
  ngOnInit(){
      this.myForm = new FormGroup({
        FloorNumber : new FormControl('',Validators.required),
        AppartementNumber : new FormControl('',[Validators.required, Validators.minLength(5)])
      });

      this.myForm1 = new FormGroup({});
  }

  get FNumber(){
   return this.myForm.get('FloorNumber');
  }

}
