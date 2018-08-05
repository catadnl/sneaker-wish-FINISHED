import {EventEmitter, Injectable} from '@angular/core';
import {Shoe} from '../shoes/model/shoe.model';
import {Wish} from './model/wish.model';
import {Color} from '../shoes/model/color.model';


@Injectable({
  providedIn: 'root'
})
export class WishService {

  wishesChanged = new EventEmitter<Wish[]>();

  private wishList: Wish[] = [
    new Wish(new Shoe('Air Max 97', 'Vintage air foam shoes by Nike',
      'https://sneakernews.com/wp-content/uploads/2017/08/skepta-nike-air-max-97-ultra-sk-release-date-01.jpg', 200,
      [new Color('cream white', 'midsole'), new Color('blue', 'foxing')]),
      2)
  ];

  getWishList() {
    return this.wishList;
  }

  addWish(wish: Wish) {
    this.wishList.push(wish);
    this.wishesChanged.emit(this.getWishList());
  }

  addToWishList(shoe: Shoe) {
    const wish: Wish = new Wish(shoe, 1);
    this.wishList.push(wish);
    this.wishesChanged.emit(this.getWishList());
  }
}
