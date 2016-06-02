import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <hr>
  <div class="keg-form center">
    <h3>Create Keg</h3>
    <input placeholder="Name" class="input-lg" #newName required>
    <input placeholder="Brand" class="input-lg" #newBrand required>
    <input placeholder="Price" class="input-lg" #newPrice required>
    <input placeholder="Alcohol" class="input-lg" #newAlcohol required>
    <br>
    <br>
  <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol)" class="btn btn-success">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement){
    var keg = new Keg(userName.value, userBrand.value, userPrice.value, userAlcohol.value, 124, 0);
    this.onSubmitNewKeg.emit(keg);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";

  }

}
