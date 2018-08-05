import {Color} from './color.model';

export class Shoe {

  constructor(public name: string, public description: string, public imagePath: string, public price: number, public colors: Color[]) {
  }

}
