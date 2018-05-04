import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { masterBeersList } from './../seed-data';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-pour-a-pint',
  templateUrl: './pour-a-pint.component.html',
  styleUrls: ['./pour-a-pint.component.css']
})
export class PourAPintComponent implements OnInit {
  @Input() numberOfPintsPoured: Beer[];
  @Output() clickSender = new EventEmitter();

  pintsPoured(beerToEdit: Beer) {
    console.log(beerToEdit.pints);
    // this.clickSender.emit(beerToEdit)
  }
  ngOnInit() {
  }

}
