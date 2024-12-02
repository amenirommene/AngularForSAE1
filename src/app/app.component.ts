import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjoour Angular4SAE1';
  f(nb:number){
    console.log("test"+ nb);
  }
}
