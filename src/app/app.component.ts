import { Component } from '@angular/core';
import { Beer } from './models/beer.model';
import { masterBeersList } from './seed-data';
import { AddBeerComponent } from './add-beer/add-beer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Digital Poor';
  selecetedBeer = null;
  childBeer = [];
  constructor() {
    for(let childBeer of masterBeersList) {
      this.childBeer.push(new Beer(childBeer.name, childBeer.brand, childBeer.type, childBeer.price, childBeer.alcContent, 124))
    }
  }

  // pourPint(clickedBeer, currentTotal, newPintTotal) {
  //   this.selecetedBeer = clickedBeer;
  //   this.beers[0].pints = currentTotal - newPintTotal;
  // }

}
