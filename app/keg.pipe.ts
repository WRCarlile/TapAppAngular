import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "low",
  pure: false
})

export class KegPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredKeg = args[0];
    if(desiredKeg === "low") {
      return input.filter((keg) => {
        return keg.low;
      });
    } else if (desiredKeg === "notLow") {
      return input.filter((keg) => {
        return !keg.low;
      });
    } else {
      return input;
    }
  }
}
