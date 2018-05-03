import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { masterBeersList } from './../seed-data';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})

export class AddBeerComponent implements OnInit {
  @Input() childBeer: Beer[];
  @Output() clickSender = new EventEmitter();
  addBeer(newName, newBrand, newType, newPrice, newAlcContent) {
      this.clickSender.emit(new Beer(newName, newBrand, newType, newPrice, newAlcContent, 124))
    }
  ngOnInit() {
  }

}
