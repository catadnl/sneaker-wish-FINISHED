import {Component, Input} from '@angular/core';
import {Shoe} from '../../model/shoe.model';

@Component({
  selector: 'app-shoe-item',
  templateUrl: './shoe-item.component.html',
  styleUrls: ['./shoe-item.component.css']
})
export class ShoeItemComponent {

  @Input() shoe: Shoe;

  @Input() index: number;

  constructor() {
  }
}
