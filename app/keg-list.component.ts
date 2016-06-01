import { Keg } from './keg.model';
import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegs'],
  outputs: ['onKegSelect'],
  template:`
  <div class="container">
    <div *ngFor="#keg of kegs" >
      <h3 (click)="kegClicked(keg)" [class.selected]="selectedKeg === keg">{{ keg.name }}</h3>
      <ul *ngIf="selectedKeg === keg">
      <li>Brand: {{ keg.brand }}</li>
      <li>Price: {{ keg.price }} dollars</li>
      <li>Alcohol Content: {{ keg.alcohol }}%</li>
      <li>Pints Available: {{ keg.pints }}</li>
      <br>
      <button (click)="pintsServed(selectedKeg)" class="btn">Serve A Pint</button>
      </ul>
    </div>
  </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  public onKegSelect: EventEmitter<Keg>;

  constructor() {
    this.onKegSelect = new EventEmitter();
  }

  kegClicked(keg: Keg): void {
    this.selectedKeg = keg;
    this.onKegSelect.emit(keg);
  }

  pintsServed(keg: Keg){
    if (keg.pints > 0 ){
    this.selectedKeg = keg;
    keg.pints -= 1;
    }
    if (keg.pints === 10){
    this.selectedKeg = keg;
    alert("Change the keg");
  }
  }
}
