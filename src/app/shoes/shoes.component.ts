import {Component} from '@angular/core';
import {Shoe} from './model/shoe.model';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {

  selectedShoe: Shoe;

  onShoeWasSelected(shoe: Shoe) {
    this.selectedShoe = shoe;
  }
}
