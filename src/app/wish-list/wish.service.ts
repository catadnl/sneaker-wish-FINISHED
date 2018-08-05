import {Injectable} from '@angular/core';
import {Shoe} from '../shoes/model/shoe.model';
import {Wish} from './model/wish.model';
import {Color} from '../shoes/model/color.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishService {

  wishListChanged = new Subject<Wish[]>();

  editStarted = new Subject<number>();

  private wishList: Wish[] = [
    new Wish(new Shoe('Air Max 97', 'Vintage air foam shoes by Nike',
      'https://sneakernews.com/wp-content/uploads/2017/08/skepta-nike-air-max-97-ultra-sk-release-date-01.jpg', 200,
      [new Color('cream white', 'midsole'), new Color('blue', 'foxing')]),
      2)
  ];

  getWishList() {
    return this.wishList.slice();
  }

  getWish(id: number) {
    return this.wishList[id];
  }

  deleteWish(id: number) {
    this.wishList.splice(id, 1);
    this.wishListChanged.next(this.wishList.slice());
  }

  addWish(wish: Wish) {
    this.wishList.push(wish);
    this.wishListChanged.next(this.wishList.slice());
  }

  updateWish(id: number, updatedWish: Wish) {
    this.wishList[id] = updatedWish;
    this.wishListChanged.next(this.wishList.slice());
  }

  addToWishList(shoe: Shoe) {

    const wish: Wish = new Wish(shoe, 1);

    this.wishList.push(wish);
    this.wishListChanged.next(this.wishList.slice());
  }
}
