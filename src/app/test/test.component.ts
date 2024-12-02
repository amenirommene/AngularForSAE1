import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  id : string;
  name:string;
  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }

 //méthode hook qui fait partie du cycle de vie du composant
  ngOnInit(){
    console.log("je suis le ngOnInit");
   // alert (this.ac.snapshot.params['name']);
   this.ac.paramMap.subscribe(res=>this.id=res.get('id'))
 }
  getParam(){
    this.name=this.ac.snapshot.params['name'];
  }
}
