import { Component } from '@angular/core';
import { Beer } from './models/beer.model';
import { masterBeersList } from './seed-data';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { PourAPintComponent } from './pour-a-pint/pour-a-pint.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Digital Poor';
  selecetedBeer = null;
  beers = [];
  constructor() {
    for(let beer of masterBeersList) {
      this.beers.push(new Beer(beer.name, beer.brand, beer.type, beer.price, beer.alcContent, 124))
    }
  }

  addTap(tap) {
    this.beers.push(tap);
  }

}
