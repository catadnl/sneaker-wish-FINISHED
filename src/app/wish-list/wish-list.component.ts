import {Component, OnInit} from '@angular/core';
import {Wish} from './model/wish.model';
import {Color} from '../shoes/model/color.model';
import {Shoe} from '../shoes/model/shoe.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishList: Wish[];

  constructor() {
  }

  ngOnInit() {
    this.wishList = [
      new Wish(new Shoe('Air Max 97', 'Vintage air foam shoes by Nike',
        'https://sneakernews.com/wp-content/uploads/2017/08/skepta-nike-air-max-97-ultra-sk-release-date-01.jpg', 200,
        [new Color('cream white', 'midsole'), new Color('blue', 'foxing')]),
        2)
    ];
  }

  onNewWishAdded(wish: Wish) {
    this.wishList.push(wish);
  }
}
