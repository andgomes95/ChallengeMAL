import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  desafios : any = []
  testeDesafio = {
    name: 'Teste Desafio',
    rank: 1,
    quantidade: 25
  }

  constructor() {
    
   }

  ngOnInit() {
    this.desafios = [this.testeDesafio]  
  }



}
