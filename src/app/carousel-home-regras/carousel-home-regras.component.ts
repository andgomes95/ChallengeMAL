import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-home-regras',
  templateUrl: './carousel-home-regras.component.html',
  styleUrls: ['./carousel-home-regras.component.css']
})
export class CarouselHomeRegrasComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
