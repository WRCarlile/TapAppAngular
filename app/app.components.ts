import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import{ KegListComponent} from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Kegs</h1>
      <keg-list [kegs] = "kegs" (onKegSelect)="kegWasSelected($event)"></keg-list>
    </div>
  `
})
  export class AppComponent {
    public kegs: Keg[];

    constructor(){
      this.kegs = [
        new Keg("Blue Hard", "Bill's", "60", ".5", 124),
        new Keg("Blue Soft", "Bill's", "60", "20", 124)
      ];
    }

    kegWasSelected(keg: Keg): void {
      console.log(keg);
    }
}
