import {Component, Input} from '@angular/core';
import {Shoe} from '../model/shoe.model';
import {ShoesService} from '../shoes.service';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent {

  @Input() shoe: Shoe;

  constructor(private shoeService: ShoesService) {
  }

  onAddToWishList() {
    this.shoeService.addToWishList(this.shoe);
  }
}
