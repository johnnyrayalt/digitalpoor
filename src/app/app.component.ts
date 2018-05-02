import { Component } from '@angular/core';
import { Beer } from './models/beer.model';

import { beerList } from './seed-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digital Poor';
  beers = [];
  constructor() {
    for(let beer of beerList) {
      this.beers.push(new Beer(beer.name, beer.brand, beer.type, beer.price, beer.alcContent, 124))
    }
  }

  addBeer(newName, newBrand, newType, newPrice, newAlcContent) {
    this.beers.push(new Beer(newName, newBrand, newType, newPrice, newAlcContent, 124))
  }

  pourPint(currentTotal, newPintTotal) {
    let i = 0;
      this.beers[i].pints = currentTotal - newPintTotal;
  }

}
