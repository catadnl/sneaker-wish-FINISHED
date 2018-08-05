import {Shoe} from './model/shoe.model';
import {Color} from './model/color.model';
import {Injectable} from '@angular/core';
import {WishService} from '../wish-list/wish.service';
import {Subject} from 'rxjs';

@Injectable()
export class ShoesService {

  shoesChanged = new Subject<Shoe[]>();

  private shoes: Shoe[] = [
    new Shoe('Air Max 97', 'Vintage air foam shoes by Nike',
      'https://sneakernews.com/wp-content/uploads/2017/08/skepta-nike-air-max-97-ultra-sk-release-date-01.jpg', 200,
      [new Color('cream white', 'midsole'), new Color('blue', 'foxing')]),
    new Shoe('Air Jordan 1', 'Classic basketball Jordan shoes',
      'http://www.collectedmag.com/images/large/jordan%201%20high%20og-661uat.jpg', 120,
      [new Color('dark blue', 'midsole'), new Color('black', 'foxing')]),
    new Shoe('Adidas Superstar', 'Timeless model with a new remake from Adidas Originals',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Adidas_Superstar_shoes_pair.jpg/1599px-Adidas_Superstar_shoes_pair.jpg',
      150, [new Color('white', 'midsole'), new Color('red', 'tongue')])
  ];

  constructor(private wishService: WishService) {
  }

  getShoes() {
    return this.shoes.slice();
  }

  getShoe(index: number) {
    return this.shoes[index];
  }

  deleteShoe(index: number) {
    this.shoes.splice(index, 1);
    this.shoesChanged.next(this.getShoes());
  }

  addToWishList(shoe: Shoe) {
    this.wishService.addToWishList(shoe);
  }

  addShoe(shoe: Shoe) {
    this.shoes.push(shoe);
    this.shoesChanged.next(this.getShoes());
  }

  updateShoe(index: number, updatedShoe: Shoe) {
    this.shoes[index] = updatedShoe;
    this.shoesChanged.next(this.getShoes());
  }
}
