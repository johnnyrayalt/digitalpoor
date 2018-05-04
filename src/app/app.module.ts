import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { PourAPintComponent } from './pour-a-pint/pour-a-pint.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBeerComponent,
    PourAPintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
