import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div class="container">
    <div *ngFor="#keg of kegs" >
      <h3 (click)="kegClicked(keg)" [class.selected]="selectedKeg === keg">{{ keg.name }}</h3>
      <ul *ngIf="selectedKeg === keg">
      <li>Brand: {{ keg.brand }}</li>
      <li>Price: {{ keg.price }} dollars</li>
      <li>Alcohol Content: {{ keg.alcohol }}%</li>
      <li>Pints Available: {{ keg.pints }}</li>
  `

})
export class KegComponent {
  public keg: Keg;
  // toggleLow(setState: boolean){
  //   this.keg.low = setState;
  // }
}
