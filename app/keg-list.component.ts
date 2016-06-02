import { Keg } from './keg.model';
import { Component, EventEmitter } from 'angular2/core';
import { NewKegComponent } from './new-keg.component';
import { KegComponent } from './keg.component';
import { KegPipe } from './keg.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegs'],
  outputs: ['onKegSelect'],
  directives: [NewKegComponent, KegComponent],
  pipes: [KegPipe],
  template:`
  <div class="container">
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="low">Show Low Kegs</option>
      <option value="notLow" selected="selected">Show Kegs in Use</option>
    </select>

    <div *ngFor="#keg of kegs | low:filterKeg:selectedKeg">
      <h3 (click)="kegClicked(keg)" [class.selected]="selectedKeg === keg">{{ keg.name }}</h3>
      <ul *ngIf="selectedKeg === keg">
      <li>Brand: {{ keg.brand }}</li>
      <li>Price: {{ keg.price }} dollars</li>
      <li>Alcohol Content: {{ keg.alcohol }}%</li>
      <li>Pints Available: {{ keg.pints }}</li>
      <br>
      <button (click)="pintsServed(selectedKeg)" class="btn">Serve A Pint</button>
      <br>
      <br>
      <button (click)="changeKeg(selectedKeg)" class="btn">Change Keg</button>
      </ul>
    </div>
    <div>
      <new-keg (onSubmitNewKeg)="createKeg($event)">
      </new-keg>
    </div>
  </div>
  `
})

export class KegListComponent {
  public kegs: Keg[];
  public selectedKeg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  public filterKeg: string = "notLow";

  constructor() {
    this.onKegSelect = new EventEmitter();
  }

  kegClicked(keg: Keg): void {
    this.selectedKeg = keg;
    this.onKegSelect.emit(keg);
  }

  createKeg(newKeg: Keg): void {
    this.kegs.push(newKeg);
  }

  pintsServed(keg: Keg){
    if (keg.pints > 0 ){
    this.selectedKeg = keg;
    keg.pints -= 1;
    }
    if (keg.pints === 122){
    this.selectedKeg = keg;
    alert("Keg is Low");
    keg.low = true;
    }
  }
  onChange(filterOption){
    this.filterKeg = filterOption;
  }
  changeKeg(keg: Keg){
    this.selectedKeg = keg;
    keg.pints = 124;
  }
}
